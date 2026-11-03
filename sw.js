/* App-shell offline support only. Never cache Supabase/Auth/API responses. */
const CACHE = 'next-level-shell-v19';
const SHELL = ['./', './index.html', './manifest.json', './supabase-config.js', './theme.js', './sw-register.js', './supabase-init.js', './vendor/supabase.js', './handlers.js', './app.js', './exguide.js', './gate.js', './tailwind.css', './vendor/chart.umd.js', './vendor/confetti.js', './vendor/jspdf.umd.min.js', './vendor/nacl-fast.min.js', './my_icon.png', './icon-32.png', './icon-180.png', './icon-192.png', './icon-512.png', './eat.jpg', './fitness-hero-banner.jpg', './fuel-meal-banner.jpg'];
const SHELL_PATHS = new Set(SHELL.filter(p => p !== './').map(p => new URL(p, self.location.href).pathname));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).catch(() => undefined));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith('next-level-shell-') && k !== CACHE).map(k => caches.delete(k))
  )));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // Never cache any local API endpoints or auth/data responses.
  if (/\/(rest\/v1|auth\/v1|functions\/v1)(\/|$)/.test(url.pathname)) return;
  const isShell = SHELL_PATHS.has(url.pathname) || url.pathname === new URL('./', self.location.href).pathname;
  if (!isShell && req.mode !== 'navigate') return;
  event.respondWith(fetch(req).then(response => {
    if (response.ok) caches.open(CACHE).then(cache => cache.put(req, response.clone()));
    return response;
  }).catch(async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
  }));
});
