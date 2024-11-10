'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js": "53d1c959f209f593d90d85be36790365",
"assets/FontManifest.json": "fe6fa9fb978b8a0d926fa8c6647f6eec",
"assets/AssetManifest.bin": "133f9d752b02d3e19275607eb881f735",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/assets/fonts/CormorantGaramond-Regular.ttf": "8d38bcc84080a67c9d1630fd3141f7f3",
"assets/assets/fonts/nexon_gothic_extra_bold.otf": "059bc8038af9fd1839b79d4a3d83bdd9",
"assets/assets/fonts/nexon_gothic_bold.otf": "dd9fad7837d685ed9c99ebed9dd32c93",
"assets/assets/fonts/default_font_light.otf": "b9a9b17bad54e784897bdcbdb1d3d92d",
"assets/assets/fonts/nexon_gothic_medium.otf": "e48d68945f73a704ccd980ec895c331b",
"assets/assets/fonts/default_font_bold.otf": "94da6e2e519d87056591f7867cff87f4",
"assets/assets/images/map.png": "464807e57b1abd9eafbde04dcf147345",
"assets/assets/images/bg_img_white.jpg": "e4dae526a29570b3ee9d8934f77af0c3",
"assets/assets/images/daesun_minhee/daesun_minhee_5.jpg": "af44d23f57104c5b3de33d89b037b78f",
"assets/assets/images/daesun_minhee/daesun_minhee_8.jpg": "5e08e567edf97d54f74e6c178e7aa0ed",
"assets/assets/images/daesun_minhee/daesun_minhee_11.jpg": "d0768504cbbb0d071f67818db60907cf",
"assets/assets/images/daesun_minhee/daesun_minhee_1.jpg": "3759e69eb84d60e5f218695c3fb35249",
"assets/assets/images/daesun_minhee/daesun_minhee_13.jpg": "8496e64e1fea235fb0d3110387fd55f7",
"assets/assets/images/daesun_minhee/daesun_minhee_12.jpg": "2f9f11c35d3bea506b158a149f800637",
"assets/assets/images/daesun_minhee/daesun_minhee_6.jpg": "1228a90906216127b6799cf64417d5cc",
"assets/assets/images/daesun_minhee/daesun_minhee_15.jpg": "e465b39eaceac0e725d7350742905d4b",
"assets/assets/images/daesun_minhee/daesun_minhee_4.jpg": "ba6d3ed732863a7a99e35e673a84bfdc",
"assets/assets/images/daesun_minhee/daesun_minhee_2.jpg": "b064f0e8e929e01081d0b0a4251194c9",
"assets/assets/images/daesun_minhee/daesun_minhee_7.jpg": "da3fd78b0cda0cb70c2ef470701a28be",
"assets/assets/images/daesun_minhee/daesun_minhee_main.jpg": "e8108c8d8c39f04f66e878d87ab72ee1",
"assets/assets/images/daesun_minhee/daesun_minhee_10.jpg": "4b31d8532f14c6cd8ec865c42b556110",
"assets/assets/images/daesun_minhee/daesun_minhee_9.jpg": "10c9d78cf7831f51aa70b7cd45c03964",
"assets/assets/images/daesun_minhee/daesun_minhee_3.jpg": "a1bc23287386b713f3704a8e073b733a",
"assets/assets/images/daesun_minhee/daesun_minhee_14.jpg": "2fbc8a0e818fe8e5824fb5e2d5115f90",
"assets/assets/images/banner.png": "ebfcf2bc2f111129696d64d8cc383297",
"assets/assets/images/icons/down.png": "6ac86f552b542a934c9bfd60d94c2cb7",
"assets/assets/images/icons/phone_round.png": "e19896928e86d5402079fa35bb8d0c02",
"assets/assets/images/icons/phone.png": "608d42513438db47eea3256675af2bd5",
"assets/assets/images/icons/flower.png": "f545076e8e950d3dfb7ea4d75ad01f1c",
"assets/assets/images/icons/right.png": "a3779f5f00de900d713ea72b83b57904",
"assets/assets/images/icons/close.png": "a316b1ac42db31a697903086f3941d85",
"assets/assets/images/icons/up.png": "9f383d5ff7e3205f6eac824effaff78b",
"assets/assets/images/icons/botanical.png": "525602f71a5b07f14b9a332060e37e33",
"assets/assets/images/icons/email.png": "30f675ad8c87abd0bb24e82143cf531a",
"assets/assets/images/icons/left.png": "088bb37369c87064a2fc97204243f2d9",
"assets/assets/images/icons/link.png": "59b64953abfb91db58a44cc8fc3fcd6e",
"assets/assets/images/icons/bee.png": "045ecf9daa931df58df79a74afd764f3",
"assets/NOTICES": "e30c953c6c98f21c52812299a6c1c2f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "4df84dadee3897956be4cf8bdeca0506",
"assets/AssetManifest.bin.json": "12925e4bd3ec58fdaf9e87442b586272",
"index.html": "f6f2d444928dfba2975ee2ba221658c0",
"/": "f6f2d444928dfba2975ee2ba221658c0",
"manifest.json": "7b3fa4c4ab7eacfd60185d15ad3b6155",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"letter.png": "680582863495e013fa7bdda816e207b9",
"daesun_minhee.jpg": "32e8b643ed5f7be31957fc7b1d080b5b",
"icons/letter.png": "68f5dc80f1e3cd6d581245e54983a09c",
"version.json": "554a877c0a1929d4d108235cf727bad1",
"flutter_bootstrap.js": "72bf525c442075a4cc6efa71e3714e88"};
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
