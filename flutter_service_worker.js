'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4d4e71de7cbd0a872e74be36e49417ee",
"assets/assets/gifs/logo.gif": "8014c867bf8435b7b12f1a6370273fbb",
"assets/assets/images/activate.png": "1560931a3ab2fb0e041e36c04d0e7730",
"assets/assets/images/admin.png": "6f70f8d002d28099ca1b55e81a6b5223",
"assets/assets/images/arrowLeft.png": "e861cab2d3fa13a4cda7e777459265d7",
"assets/assets/images/azerbaijanFlag.png": "1be8ebe2f9b0ceee8c841a449ed7c26d",
"assets/assets/images/azFlag.png": "a3ff89a1c35e8038560035388504a83e",
"assets/assets/images/azFlag.svg": "5a1aba69d57ba96077be2e8a7e93dab6",
"assets/assets/images/azn.png": "64a93e7338e7e43a6f34ef962b0a6bea",
"assets/assets/images/background.jpg": "13ee698cfc40fe2e9c56eee8c70dbca6",
"assets/assets/images/background.png": "f27e4ca4d981053f4b3b66c9a405d8cd",
"assets/assets/images/bannerSample.jpg": "46f64538a927eed26535b8d435b9f6b6",
"assets/assets/images/basket.png": "7ed2725a8e9568aa768bf4647930e67b",
"assets/assets/images/bell.png": "f6197ddb2900eac80a7357f884a08fd8",
"assets/assets/images/bezier.png": "54996e9e4a5a0fbc7aa21522e801f637",
"assets/assets/images/boltFood.png": "54c54b44da521680dc281eb9631a71e5",
"assets/assets/images/calendar.png": "59ab572a09ee8701b5c570465c381bda",
"assets/assets/images/catalogue.png": "0a1649a8028ad82f7e859ebd50174d37",
"assets/assets/images/centerMarker.png": "864f66e946db3294d763705980995992",
"assets/assets/images/clock.png": "ec23a46e2dbd9e86b4859f40b1306e77",
"assets/assets/images/close.png": "a4980413830464714643b73603b626da",
"assets/assets/images/createMenu.png": "ac961c5b3dce40ce01af07055dad7116",
"assets/assets/images/curve.png": "9fa203c5f9c69e9e01da08b8a7586fe1",
"assets/assets/images/defaultMeal.png": "5d54ba53e680fb91aef87ac5273c60b5",
"assets/assets/images/delete.png": "954ec78e7213b353f6ca3c9bf374519f",
"assets/assets/images/discount.png": "abed265cd5f621820ce2457d1abc7391",
"assets/assets/images/down.png": "99749a78db2801c363eb849af38b2b9c",
"assets/assets/images/edit.png": "79d3e99d58d3c0b0580af68eb018b013",
"assets/assets/images/fastDelivery.png": "d11dba31387273b14b2318912559d0ab",
"assets/assets/images/feedback.png": "18d432a84ded77d8b3ccd6ef3d589d0f",
"assets/assets/images/instagram.png": "fa90e1e7734e5bef1193daca074ad67c",
"assets/assets/images/introBg.png": "7f002397a06c11e0c6cca347da22fc76",
"assets/assets/images/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/logo.png": "aa09d0da4dc456d1b24f4e928ad972a8",
"assets/assets/images/logout.png": "827fab6b92d6c8cef5c889d48591d313",
"assets/assets/images/menu.png": "aed0c9d3b528583d5bc9bd7cc6a3fb72",
"assets/assets/images/qr.png": "efceee2ac0420c298a0a0c4220bca49e",
"assets/assets/images/qrMenu.png": "72a03cb0e5c7720ab8304ab409207cf0",
"assets/assets/images/reception.png": "fbba4137cbbdb10f4221cb0d98190434",
"assets/assets/images/reorder.png": "68d301730372a90a6d7e9bb8a79fe523",
"assets/assets/images/resetPassword.png": "3916a148141169bd235f9795b5358437",
"assets/assets/images/restaurant.png": "c06a05bd4a6c444db46980667b926578",
"assets/assets/images/restaurantInfo.png": "9c14fae2878c5f8975ac37fed31b67b4",
"assets/assets/images/ruFlag.svg": "bdd4d968105569163b210c24249fb6fb",
"assets/assets/images/russiaFlag.png": "9c87c98b1a0737372bfdb19a2bc8b3a4",
"assets/assets/images/scooter.png": "8bac91d73edeecf023d1083da7b58820",
"assets/assets/images/scooter.svg": "91bd34dc71b47aff4aa937f79a130c44",
"assets/assets/images/search.png": "b9225c6ced0721522b8b3a01c3769434",
"assets/assets/images/special.png": "8f8604e711b7589205ad602de500293f",
"assets/assets/images/starCalendar.png": "54c592d46fab323916a760c103fa629f",
"assets/assets/images/stats.png": "e16ac435b49581dc8ece5aafdf27396c",
"assets/assets/images/takeaway.png": "9d8d20d1abbe0bd956b4515059699a1e",
"assets/assets/images/trFlag.png": "47363a69f6b8e720db18b600683b4c80",
"assets/assets/images/trFlag.svg": "aec72ab79c1791f9474bc1721c79fa8e",
"assets/assets/images/triangle.png": "d27891f842d47313ad360f1b9b7f23e3",
"assets/assets/images/ukFlag.png": "54582381d138a0e8422971486c14019e",
"assets/assets/images/ukFlag.svg": "5ce2f3da2fcacc3e319d18269c9c9432",
"assets/assets/images/user.png": "b45467476c4b526121b2bb21afc49326",
"assets/assets/images/verified.png": "ad26ccfbe4cb82572f6cf95b66a0cc17",
"assets/assets/images/whatsapp.png": "141f6585c6c0d6ad2f071b5bba57de14",
"assets/assets/images/wolt.png": "07d7ba9cc6d94f31b13eede65402c4bb",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/main.dart": "9cb9797c37b02d8bd15add47d930b294",
"assets/lib/todo.txt": "4457819e72c28f197b9fed3925eb68cf",
"assets/NOTICES": "c7d0129297acd7aefb8c92e3cd4ff99f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/shaders/ink_sparkle.frag": "dcd91dfe72b1d36c91c16fbb24841030",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "c066306c23447cfe2a80f0199ea1d68e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "c066306c23447cfe2a80f0199ea1d68e",
"icons/android-chrome-512x512.png": "bd8a3c2d28f7fefdcc05d923836f937b",
"icons/apple-touch-icon.png": "b93df6d40c0bea9ffe9d336354e70041",
"icons/favicon-16x16.png": "43af96cc3cc9cb4c9b0eedc53f277a5a",
"icons/favicon-32x32.png": "ae72ff033d4e4c24930870b8ba4f2c7b",
"icons/favicon.ico": "cc522e8001e8c9f49740e2354d647b39",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "795600b69fc0662eed0c6b194333afc4",
"/": "795600b69fc0662eed0c6b194333afc4",
"main.dart.js": "fc4e13abbdc61a7c16643c38dac80981",
"manifest.json": "239117a34a3711eae970aa24c347bd0a",
"version.json": "18e4fef8d164a2142a02762a8030a260"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
