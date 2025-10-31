// sw.js
const CACHE_NAME = 'pwa-site-v1';
const OFFLINE_URL = '/offline.html';


const PRECACHE = [
'/',
'/index.html',
'/styles.css',
'/app.js',
'/manifest.json',
OFFLINE_URL,
'/icons/icon-192.png'
];


self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
);
});


self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(keys => Promise.all(
keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
))
);
self.clients.claim();
});


self.addEventListener('fetch', event => {
const req = event.request;
// Only handle GET requests
if (req.method !== 'GET') return;


event.respondWith(
caches.match(req).then(cached => {
if (cached) return cached;
return fetch(req).catch(() => {
// Si falla (sin internet), devolver la página offline para navegación HTML
if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
return caches.match(OFFLINE_URL);
}
});
})
);
});
