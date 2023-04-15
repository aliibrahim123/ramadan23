import {cachecore} from './cache/dcore.js';
import {cacheabada} from './cache/cacheabada.js';
import {cacheali} from './cache/cacheali.js';
import {cacheblogs} from './cache/cacheblogs.js';
import {cachedew} from './cache/cachedew.js';
import {cachedoaa} from './cache/cachedoaa.js';
import {cacheklam} from './cache/cacheklam.js';
import {cachequr} from './cache/cachequr.js';
import {cacheqi} from './cache/cacheqi.js';
import {cachesera} from './cache/cachesera.js';
import {cacheziara} from './cache/cacheziara.js';

const cacheName = 'ramadan23';
const filesToCache = [
  ...cachecore
].map(i=>i.replace('ramadan', '.')).filter(i=>!i.includes('sw.js'));
globalThis.cachedfs = {
	abada: cacheabada,
	ali: cacheali,
	blogs: cacheblogs,
	dewan: cachedew,
	doaa:cachedoaa,
	klam:cacheklam,
	quran:cachequr,
	qind:cacheqi,
	sera:cachesera,
	ziara:cacheziara
};

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function (e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(new URL(e.request.url.replace(/\?.*/, ''))).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

onmessage =async(i)=>{
	(await caches.open(cacheName)).addAll(cachedfs[i.data]).then(i=>clients.matchAll().then(i=>i[0].postMessage('')));
	console.log(i.data)
}