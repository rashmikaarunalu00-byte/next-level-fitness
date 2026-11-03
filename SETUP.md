# Setup

1. **Supabase config** – `supabase-config.js` already holds the project URL and the *publishable* (anon) key. These are safe to be public; never put a `service_role` / secret key here.
2. **Database** – Supabase Dashboard → SQL Editor → paste and run `supabase/schema.sql`.
3. **Auth URLs** – Authentication → URL Configuration: set *Site URL* and add your hosted URL (e.g. your GitHub Pages address) to *Redirect URLs*.
4. **Delete account (optional)** – `supabase functions deploy delete-account`.
5. **Admin (optional)** – run the commented `insert into public.fitness_admins ...` line at the bottom of `schema.sql` with your email.
6. **Hosting** – GitHub Pages: repo Settings → Pages → Deploy from branch `main` / root.
