console.log(importScripts);

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    './',
    './style/main.css',
    './style/main.js'
];

self.addEventListener('install', function(event) {
    console.log('install', event);
    // Perform install steps
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('fetch', event);
    // event.respondWith(
    //     caches
    //     .match(event.request)
    //     .then(function(response) {
    //         if (response) {
    //             return response;
    //         }
    //         return fetch(event.request);
    //     })
    // );
});