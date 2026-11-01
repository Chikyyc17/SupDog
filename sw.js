const CACHE_NAME = 'supdog-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Agrega aquí tus imágenes y videos principales si quieres que funcionen offline
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
