'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "e353bbd7932db16d174a89e7be9cb224",
"/": "e353bbd7932db16d174a89e7be9cb224",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/FontManifest.json": "8c476394fb7f8463dc7cd0e8bc7f574a",
"assets/fonts/Aloevera-OVoWO.ttf": "014b325fa476de379679f0097c5450ea",
"assets/fonts/SparkyStones.ttf": "9a06f1b1d399490de92bec296d944b3c",
"assets/fonts/NishikiTeki-MVxaJ.ttf": "ba84bc758856478bdf44a1c9448df0d4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a3da1a216aad89e7984725255bdeb0ca",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "0061d347a1693a9fd509fa0adfaa8b73",
"assets/shaders/ink_sparkle.frag": "f6928627b9c70c2386dd4d545a62972c",
"assets/assets/images/android.png": "3b3c458a8882897dd54ef0c3140c2b94",
"assets/assets/images/android2.png": "3d5f98bd198f9a05a76ab2cf889dd269",
"assets/assets/images/git2.png": "08ebd745f78318fc46d36bed02f50f90",
"assets/assets/images/my_pic.jpg": "53def4576bb55b211b08b51f0eed31e3",
"assets/assets/images/android3.png": "5734f365692cd7c60413930be2c03386",
"assets/assets/images/html.png": "deeee259f2ea348a6d9042a0545d46bf",
"assets/assets/images/php.png": "b1dbf08bc3beb359c2435e3423a64f06",
"assets/assets/images/resume2.jpg": "cc9c57f7cd4d623ba2d146591971994b",
"assets/assets/images/firebase.png": "26add061294369c92fcbd49383d04bf5",
"assets/assets/images/java2.png": "3e2039323537f91a51e3bd3b30abb2e4",
"assets/assets/images/flutter3.png": "4a29c43962404fecadb95f3163b1223d",
"assets/assets/images/windows.png": "3585f4befcc70e68c9d4f4bfb3eed69f",
"assets/assets/images/projectImages/vehicle_rental.png": "8a3aeaa96cf56643e55e44d83cf0359a",
"assets/assets/images/projectImages/blogging.png": "990c5e604c3848159bcf0a6a43f4c59f",
"assets/assets/images/projectImages/quizApp.jpg": "a43fc5bb92aece632315d460c1888d2e",
"assets/assets/images/projectImages/weather.jpg": "1fa617b676c290cdb2881e09ecde5439",
"assets/assets/images/projectImages/go_grocery.png": "74e21922a24b31e5437ab9d520c8b518",
"assets/assets/images/projectImages/calculator_project.png": "129fbf5317ce2c285c9cf5c691cd17d4",
"assets/assets/images/projectImages/bus_track.png": "48cf8e3366ec81a0cec2a778f81e8c8c",
"assets/assets/images/mysql.png": "f55b8ad9f56bbfb61f0dd06a85b685e4",
"assets/assets/images/flutter.png": "0ab4e1d9faa1a66cff67c70172740b4b",
"assets/assets/images/stack.png": "aa8ceb19ecf71eb300b771d263daec45",
"assets/assets/images/flutter2.png": "7fd423d2608f2b2d6dd73ad4e7b7dc52",
"assets/assets/images/java.png": "59b8c3af10b1970c64d36bd2d9665c2a",
"assets/assets/images/ios.png": "f840349bf915efd915be321207217f87",
"assets/assets/images/linkedin.png": "a1f85fa006bd837f168764ef3f0b8002",
"assets/assets/images/git.png": "c6087d8414f6ae635d65a05938ee5bd5",
"assets/assets/images/firebase2.png": "4c4ccc707b79369517946f343bf1f0e0",
"assets/assets/images/css.png": "6dae906e0ca0b69ff9611f26fc998014",
"version.json": "009c9e65172e010890f7f65fde438006",
"main.dart.js": "d6a6d28dc3f290678a5fd77bdfab4938"
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
