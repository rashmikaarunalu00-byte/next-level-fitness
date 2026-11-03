-- Next Level Fitness: run this once in Supabase Dashboard > SQL Editor.
create extension if not exists pgcrypto;

-- Profiles --------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  birthday date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
drop policy if exists "profiles_select_own" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_select_own" on public.profiles for select to authenticated using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert to authenticated with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Fitness data (one JSON row per user) ----------------------------------
create table if not exists public.fitness_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  app_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.fitness_data enable row level security;
drop policy if exists "fitness_select_own" on public.fitness_data;
create policy "fitness_select_own" on public.fitness_data for select to authenticated using (auth.uid() = user_id);
-- Writes go through save_my_fitness_data() only (optimistic concurrency).

create or replace function public.save_my_fitness_data(p_app_data jsonb, p_expected_updated_at timestamptz)
returns table(updated_at timestamptz)
language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); cur timestamptz; nv timestamptz := clock_timestamp();
begin
  if uid is null then raise exception 'not authenticated' using errcode = '28000'; end if;
  select f.updated_at into cur from public.fitness_data f where f.user_id = uid for update;
  if not found then
    insert into public.fitness_data(user_id, app_data, updated_at) values (uid, p_app_data, nv);
  else
    if p_expected_updated_at is distinct from cur then
      raise exception 'fitness_data_conflict' using errcode = '40001';
    end if;
    update public.fitness_data set app_data = p_app_data, updated_at = nv where user_id = uid;
  end if;
  return query select nv;
end $$;
revoke all on function public.save_my_fitness_data(jsonb, timestamptz) from public, anon;
grant execute on function public.save_my_fitness_data(jsonb, timestamptz) to authenticated;

-- Admin (optional) ------------------------------------------------------
create table if not exists public.fitness_admins (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.fitness_admins enable row level security;  -- no policies: only server-side functions read it

create or replace function public.is_fitness_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.fitness_admins where user_id = auth.uid());
$$;
revoke all on function public.is_fitness_admin() from public, anon;
grant execute on function public.is_fitness_admin() to authenticated;

create or replace function public.admin_fitness_summary() returns jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_fitness_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  return jsonb_build_object(
    'total_users', (select count(*) from auth.users),
    'profiles', (select count(*) from public.profiles),
    'active_fitness_users', (select count(*) from public.fitness_data),
    'recent_updates', (select count(*) from public.fitness_data where updated_at > now() - interval '7 days'));
end $$;
revoke all on function public.admin_fitness_summary() from public, anon;
grant execute on function public.admin_fitness_summary() to authenticated;

create or replace function public.admin_recent_profiles(p_limit int default 10)
returns table(full_name text, created_at timestamptz, updated_at timestamptz)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_fitness_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  return query select p.full_name, p.created_at, p.updated_at from public.profiles p
    order by p.updated_at desc limit least(greatest(coalesce(p_limit,10),1),50);
end $$;
revoke all on function public.admin_recent_profiles(int) from public, anon;
grant execute on function public.admin_recent_profiles(int) to authenticated;

-- To make yourself admin (replace the email):
-- insert into public.fitness_admins select id from auth.users where email = 'you@example.com';
