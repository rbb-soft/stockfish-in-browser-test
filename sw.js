// sw.js

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  // Puedes agregar archivos a la caché aquí si lo deseas
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
