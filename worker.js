const filesToCache = [
	"CSSMinifier.css",
	"CSSMinifier.htm",
	"CSSMinifier.js",
	"CSSMinifier.json",
	"CSSMinifier.png",
	"CSSMinifierFavIcon_16x16.png",
	"CSSMinifierFavIcon_192x192.png",
	"CSSMinifierFavIcon_512x512.png",
	"CSSMinifierShare.png"
];

const staticCacheName = "CSSMinifier-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});