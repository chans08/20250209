'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/letter.png": "68f5dc80f1e3cd6d581245e54983a09c",
"letter.png": "680582863495e013fa7bdda816e207b9",
"assets/assets/images/icons/pigeon.png": "0fea747d3ea75ad31cd55ba78d6ced41",
"assets/assets/images/icons/left.png": "088bb37369c87064a2fc97204243f2d9",
"assets/assets/images/icons/right.png": "a3779f5f00de900d713ea72b83b57904",
"assets/assets/images/icons/email.png": "30f675ad8c87abd0bb24e82143cf531a",
"assets/assets/images/icons/phone_round.png": "e19896928e86d5402079fa35bb8d0c02",
"assets/assets/images/icons/down.png": "6ac86f552b542a934c9bfd60d94c2cb7",
"assets/assets/images/icons/link.png": "59b64953abfb91db58a44cc8fc3fcd6e",
"assets/assets/images/icons/botanical.png": "525602f71a5b07f14b9a332060e37e33",
"assets/assets/images/icons/phone.png": "608d42513438db47eea3256675af2bd5",
"assets/assets/images/icons/up.png": "9f383d5ff7e3205f6eac824effaff78b",
"assets/assets/images/icons/ribbon.png": "99acbb60f0c354376408e7dc9584b2b4",
"assets/assets/images/icons/close.png": "a316b1ac42db31a697903086f3941d85",
"assets/assets/images/bg_img_white.jpg": "e4dae526a29570b3ee9d8934f77af0c3",
"assets/assets/images/map.png": "464807e57b1abd9eafbde04dcf147345",
"assets/assets/images/banner.png": "ebfcf2bc2f111129696d64d8cc383297",
"assets/assets/images/daesun_minhee/daesun_minhee_6.jpg": "cbeebb82951257ad64b6c8233fea47a6",
"assets/assets/images/daesun_minhee/daesun_minhee_7.jpg": "9040e8f1d738848993f950433da9737b",
"assets/assets/images/daesun_minhee/daesun_minhee_11.jpg": "4c9c037560fd8d6ad17f097abeca5a5d",
"assets/assets/images/daesun_minhee/daesun_minhee_4.jpg": "dfcc42624d5c6e973aecc387aa319694",
"assets/assets/images/daesun_minhee/daesun_minhee_5.jpg": "bbb1e84beb1ee1e709990690dd267c17",
"assets/assets/images/daesun_minhee/daesun_minhee_8.jpg": "693b122cd0db063abc99f95e04ab28da",
"assets/assets/images/daesun_minhee/daesun_minhee_14.jpg": "790b3ea94803ce5d011f7666fd60bc13",
"assets/assets/images/daesun_minhee/daesun_minhee_15.jpg": "8100c5aaf652dc478ef24e4ac2ad1848",
"assets/assets/images/daesun_minhee/daesun_minhee_2.jpg": "6d59e25c361b92c90751f339e7d7011d",
"assets/assets/images/daesun_minhee/daesun_minhee_10.jpg": "721897a61e7cefa55f100d18cf11afb1",
"assets/assets/images/daesun_minhee/daesun_minhee_12.jpg": "15bb66a1d4980da805b6ca4916aba41e",
"assets/assets/images/daesun_minhee/daesun_minhee_3.jpg": "b38b41433174f00df16997a2e228c591",
"assets/assets/images/daesun_minhee/daesun_minhee_main.jpg": "9566b56cfd623d22cf5e8678aa941c62",
"assets/assets/images/daesun_minhee/daesun_minhee_13.jpg": "7a96afb1cd1fba29f6574bc807d64a44",
"assets/assets/images/daesun_minhee/daesun_minhee_1.jpg": "ab73f884db377000b2757ce5e408453a",
"assets/assets/images/daesun_minhee/daesun_minhee_9.jpg": "dabc426a36e1911e2dc063222f77a917",
"assets/assets/fonts/default_font_light.otf": "83a00938e5f65c67277b5e8df02122a9",
"assets/assets/fonts/CormorantGaramond-Medium.ttf": "5e7d2ba2f6b625a7cbfcc293d2ec247b",
"assets/assets/fonts/NotoSansKR-Regular.ttf": "e910afbd441c5247227fb4a731d65799",
"assets/assets/fonts/default_font_bold.otf": "1e61e2a8c7798de2064447f2fa529a20",
"assets/AssetManifest.bin": "a0417a2c0ad26f617ab80e14acfcac62",
"assets/NOTICES": "e1f0b341b4fa4d03133316c7f0613f5a",
"assets/AssetManifest.json": "04eeff9c1939a075ff53ce9ca1c30c91",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/FontManifest.json": "fc7d59d7851cb707c190f46bef2d12c7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "6a13fd84467f0e7c2454d9da49791ec4",
"version.json": "554a877c0a1929d4d108235cf727bad1",
"manifest.json": "7b3fa4c4ab7eacfd60185d15ad3b6155",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"index.html": "f6f2d444928dfba2975ee2ba221658c0",
"/": "f6f2d444928dfba2975ee2ba221658c0",
"daesun_minhee.jpg": "32e8b643ed5f7be31957fc7b1d080b5b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "1edfdb2d0b8b558eded2a5bcb04adf79",
"main.dart.js": "a5aba32d559976ea961f5bb522dda5a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
