/* Register the app-shell Service Worker (offline support) on https:// or localhost only. */
(function () {
  if (!('serviceWorker' in navigator)) return;
  var ok = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (!ok) return;
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').catch(function (e) {
      console.warn('Service Worker registration failed:', e && e.message);
    });
  });
})();
