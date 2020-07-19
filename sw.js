importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

const CACHE_DATA = [
	{ url: 'index.html', revision: '1' },
	{ url: 'index.js', revision: '1' },
	{ url: 'sw.js', revision: '1' },
	{ url: 'manifest.json', revision: '1' },
	{ url: 'css/style.css', revision: '1' },
	{ url: 'css/materialize.min.css', revision: '1' },
	{ url: 'js/mainScript.js', revision: '1' },
	{ url: 'js/materialize.min.js', revision: '1' },
	{ url: 'js/idb.js', revision: '1' },

	{ url: 'assets/icon/logo-32.png', revision: '1' },
	{ url: 'assets/icon/logo-144.png', revision: '1' },
	{ url: 'assets/icon/logo-192.png', revision: '1' },
	{ url: 'assets/image/hero.jpg', revision: '1' },
	{ url: 'assets/image/navbar-bg.jpg', revision: '1' },
	{ url: 'assets/image/Primera Division.png', revision: '1' },
	{ url: 'assets/image/UEFA Champions League.png', revision: '1' },
	
	{ url: 'pages/404.html', revision: '1' },
	{ url: 'pages/bookmark.html', revision: '1' },
	{ url: 'pages/competition.html', revision: '1' },
	{ url: 'pages/home.html', revision: '1' },
	{ url: 'pages/league.html', revision: '1' },
	{ url: 'pages/player.html', revision: '1' },
	{ url: 'pages/team.html', revision: '1' },
	{ url: 'pages/navbar.html', revision: '1' },
];

if (workbox) {
	const { precacheAndRoute } = workbox.precaching;
	precacheAndRoute(CACHE_DATA, { ignoreURLParametersMatching: [/.*/] });
	registerRouteConfig();
} else {
	console.log(`Workbox gagal dimuat`);
}

/** config register route */
function registerRouteConfig() {
	const { registerRoute } = workbox.routing;
	const { CacheFirst } = workbox.strategies;

	/** save all images files from certain page */
	registerRoute(
		/\.(?:png|gif|jpg|svg)$/,
		new CacheFirst({
			cacheName: 'images-asset',
			cacheExpiration: {
				maxEntries: 50,
				maxAgeSeconds: 7 * 24 * 30 * 30 // 7 days
			},
		})
	);

	/** save all css & js files from certain page */
	registerRoute(
		/\.(?:js|css)$/,
		new CacheFirst({
			cacheName: 'css-js-asset',
			cacheExpiration: {
				maxEntries: 50,
				maxAgeSeconds: 7 * 24 * 30 * 30 // 7 days
			},
		})
	);

	/** save api route */
	registerRoute(
		({url}) => url.origin === 'https://api.football-data.org',
		new CacheFirst({
			cacheName: 'api-data',
			plugins: [
				new workbox.cacheableResponse.CacheableResponse(({
					statuses: [0, 200, 404],
					headers: {
						'Access-Control-Expose-Headers': 'X-Is-Cacheable',
						'X-Is-Cacheable': 'yes'
					}
				}))
			]
		})
	);
}

/** Generate Push Notification */
self.addEventListener('push', function (event) {
	let body;
	if (event.data) {
		body = event.data.text();
	} else {
		body = 'Push message no payload';
	}
    const title = 'Barcelona Info';
	let options = {
		body: body,
        icon: 'assets/icon/logo-192.png',
        badge: 'assets/icon/logo-32.png',
        image: 'assets/image/hero.jpg',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1
		}
	};
	event.waitUntil(
		self.registration.showNotification(title, options)
	);
});