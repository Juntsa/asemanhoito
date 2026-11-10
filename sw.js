// Luotea Asemakierto – service worker: toimii ilman verkkoa.
// Sivu haetaan verkosta kun mahdollista (päivitykset tulevat heti), muuten välimuistista.
const VERSIO = 'asemakierto-261110.1';
const TIEDOSTOT = ['./', './index.html', './ohje.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSIO).then(c => c.addAll(TIEDOSTOT)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('asemakierto-') && k !== VERSIO).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(res => { const k = res.clone(); caches.open(VERSIO).then(c => c.put(r, k)); return res; })
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { const k = res.clone(); caches.open(VERSIO).then(c => c.put(r, k)); return res; })));
});
