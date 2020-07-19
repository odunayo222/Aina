const staticCacheName ='site-static';
const cacheAssets = [
    '/',
    './index.html',
    './assets/js/app.js',
    './assets/js/jquery.js',
    './assets/js/materialize.min.js',
    './assets/css/all.css',
    './assets/css/materialize.min.css',
    './assets/css/style.css',
    './assets/fonts/material-icons.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css',
    'https://fonts.googleapis.com/icon?family=Gabriela'

    

];
// install service worker
self.addEventListener('install', evt => {
    // console.log('Service worker has been installed')
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
        cache.addAll(cacheAssets);
        console.log('caching shell assets');
        }))
});

//activate service worker
self.addEventListener('activate', () => {
    // console.log('Service worker has been activated')
});

// fetch
self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
        .then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})