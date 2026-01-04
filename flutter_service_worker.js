'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "42b4a9196951a33575eae6be8fcf0513",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c0f235972e746799a9f5ff2074d50c19",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83df2e950e67c6bd5c76b060cce31a1f",
".git/logs/refs/heads/main": "2551e4ec9b4a3aa1ea1c4bb444670884",
".git/logs/refs/remotes/origin/main": "d0ec2e091fb9a3feea4a0d78800c4c28",
".git/objects/1c/70691a2abda262d7d921ca3c32fb3698e16228": "ea06c813052a1fd27001b5ab5cf7d99c",
".git/objects/3b/b971ae64c2044be65b21bd4966c98395c0f4a8": "52a826dc80f03c86372220baa06ec2a6",
".git/objects/41/2e928df446aae30544ac9745775b8677ee41eb": "b1d7461a976f864e9fb73f9c22598b1b",
".git/objects/59/990dccef4094cb61a08d4bb9de0454b3b57e34": "d922439f7dc8c13b1352c6cad0978632",
".git/objects/71/06ccf96cdcadbfa0d475a737ca79761824efec": "71a6bbf0fb12c484b1e65b0f7b7aead1",
".git/objects/7b/5c1bce64456da73e3989f6360dcc94ca030e5b": "c4b71f35089d2014b0fd1232209c368a",
".git/objects/7f/d03040abd918c5f9c4272604751fd6bc35f041": "f2bd4366b5f5cf34517ad933c1f99194",
".git/objects/88/4adbebde920ec6c38e4e4ed0238ae8c423219d": "4fc0b192ddb1cd499d0bdb3fcdf529de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/a61dca76e61a4b0100fc579a917cea75a2b5e9": "b4bd644cec440e51139090ac46b7175e",
".git/objects/94/9b33420277cbbc08a78af8fd3597eb2b5e82c5": "d847692ea0c1ba9afe28e5976858ca40",
".git/objects/9c/95e8ce883857957da5a624dec9470cf1d69f85": "5c8ee21e411c41ea614dac7a40909f87",
".git/objects/b1/5f0c4b71003462695b4b42d572ada26fc67e6b": "8421e54262f8464cb3432095ce838110",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c9/6f4c59aa21d242a2356412ac142822e2ee40f0": "a67df53910cf077d8216f7dc0d08cb12",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/ee9cd5d05c2f0120933d69c7223c44ed92369e": "1bcb683081670b7d0c695528511cbbfe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/6860720e5720301ead4787d1d9054fd8e00d2b": "68c10003c91485cc1a5d8167736d7e7d",
".git/objects/f7/d1d0cfca76186001b4faea29eb9915f9df7a6f": "5f92b9c87d18fd06c8e362e3e3a0b9f0",
".git/objects/fe/1daccf517d19f4e63b491eac18610c09b258d9": "f0676e74f6d2d9e98edf3b433027bccf",
".git/refs/heads/main": "774a7b1f482fbe83a270ed475d2dfde9",
".git/refs/remotes/origin/main": "774a7b1f482fbe83a270ed475d2dfde9",
"assets/AssetManifest.bin": "af9dd5a941a6666312987e7b11d8845b",
"assets/AssetManifest.bin.json": "cb6745883d9153886b30d8e3c55eaf21",
"assets/assets/barcode13.png": "f50f4c820a54b322e5e488b0e1c32517",
"assets/assets/calendar.png": "31936c93e5a3c7250416e057ca61698a",
"assets/assets/client.png": "cad5817c63104b479f295080ee776eda",
"assets/assets/coop.png": "712cdffbf82c7a9fc79859809fd4724a",
"assets/assets/display.png": "c55206252671167fa474874f6639155c",
"assets/assets/file-text.png": "d61a2884ceb1b1d567a042c89d5cf6b4",
"assets/assets/icon8/icons8-delete-48.png": "0552222f56b08ab5338e74e6b919ce5b",
"assets/assets/icon8/icons8-edit-50.png": "f5b8b600f9882296d6bfd958ffaec3ed",
"assets/assets/icon8/icons8-search-in-list-50.png": "3119cdc07a8426828ed09f1dfed36614",
"assets/assets/icon8/icons8-warranty-50.png": "04a0a42ef9f50f42b8365eda50421406",
"assets/assets/logo.png": "360fe5d5229e66777d38b49031cc22c2",
"assets/assets/mobile.png": "5c8d32dd68fcd0d6667a64ef21f47fe1",
"assets/assets/pass.png": "d27e23ef5ffeb4f621eb8c1cf8cae11c",
"assets/assets/power-cord.png": "3b0278800ea0475aa5e25e3423c44e84",
"assets/assets/printer.png": "a04ee2459215b3dd5e6a86417907c839",
"assets/assets/profile.png": "055a91979264664a1ee12b9453610d82",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "05160f42195964119b9421f56b9d376f",
"assets/NOTICES": "5a8a0d6bcc17342a67790680ed058734",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d76fca8f3e258dcde02b531e2db15647",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a8b991b934b76798175aa82339fce4db",
"/": "a8b991b934b76798175aa82339fce4db",
"main.dart.js": "8a60241a14db39a1ccc83fcab13ca2fa",
"manifest.json": "1a2757622f0572b23c4b23e4ad89a317",
"README.md": "127ba8f2434d5390b3b5c1f75e9c5bda",
"splash/img/dark-1x.png": "fffd59db6f94560968c79e98637bcdb0",
"splash/img/dark-2x.png": "bd1b7098d5db8dfd975a591ae17303d3",
"splash/img/dark-3x.png": "505c43062a677e732c60031ce367ccb9",
"splash/img/dark-4x.png": "f2613badb0116c213d14bf976078a389",
"splash/img/light-1x.png": "fffd59db6f94560968c79e98637bcdb0",
"splash/img/light-2x.png": "bd1b7098d5db8dfd975a591ae17303d3",
"splash/img/light-3x.png": "505c43062a677e732c60031ce367ccb9",
"splash/img/light-4x.png": "f2613badb0116c213d14bf976078a389",
"version.json": "96ddb5830582c9b898fd6770a3205753"};
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
