const CACHE_NAME = "version-2";
const urlsToCache = ['index.html', 'offline.html', 'audioTherapy.html', 'laughTherapy.html', 'testimonials.html'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});
