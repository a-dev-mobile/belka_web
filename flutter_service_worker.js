'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "515f7fc57d3d93521890a69ef48b2e89",
"assets/assets/docs/1.pdf": "ac717a8081ac3c18826bf73b6b67a2ce",
"assets/assets/docs/10.pdf": "4194dc22c9d0ab351e360fc478a8dcf7",
"assets/assets/docs/11.pdf": "0d3ce615a4de06d17b51144531220bf0",
"assets/assets/docs/12.pdf": "d286df4c649c43c7fb1d8a3d22c27508",
"assets/assets/docs/2.pdf": "2f7b38ecac99363c3e082552ef94a7c2",
"assets/assets/docs/3.pdf": "cc4e94aa47106039577d35bb46c5f621",
"assets/assets/docs/4.pdf": "b2a7bbc484ac4105ae23f2ac39d30398",
"assets/assets/docs/5.pdf": "113d74b1324709a3c571010f297cb7c9",
"assets/assets/docs/6.pdf": "e5c0d80d9315b05116b9e47c8962a333",
"assets/assets/docs/7.pdf": "f44a0b57b69a9f0fc71737291ef29188",
"assets/assets/docs/8.pdf": "c1a0b8d9317e2807324057a1e60139f4",
"assets/assets/docs/9.pdf": "fbdf73a1f3b4cd321e542509d3a2e372",
"assets/assets/docs/certificate_part_of_sro.pdf": "02532964d048d429bdd0a01702c4ef94",
"assets/assets/docs/common_loan_rules.pdf": "3167c311c399cf6ccb5ecf0402fe381d",
"assets/assets/docs/credit_report_agreement.pdf": "c5e5e44a0945d04a10787e36a6e684ee",
"assets/assets/docs/credit_request_form.pdf": "3e936a2c55835f9bb185a5e76ad474d2",
"assets/assets/docs/executive_law_115.pdf": "f1f35c2cf4f4872c3ca825a3a7f0f6fb",
"assets/assets/docs/giveout_return_info.pdf": "2ad705438f56c209036843fab139e55d",
"assets/assets/docs/giveout_rules.pdf": "82cd6daca5e18529e320f5e32d6d4317",
"assets/assets/docs/meanings.txt": "f1e6c9459477a3ee24822aff28b88167",
"assets/assets/docs/processing_of_personal_data.pdf": "594500f6c75d2188a15b510a678c2c3b",
"assets/assets/docs/signature.pdf": "d13352e0eb79bd9570305308519a5398",
"assets/assets/icon/icon.png": "ddd175ce65f555096cf2d9073c12e137",
"assets/assets/image/logo.png": "55aca42b165af0c1227aab04cf5ebe31",
"assets/assets/image/onb_1.png": "54dddf915837a976810ef2f52db299b3",
"assets/assets/image/onb_2.png": "048203c6fc1e50cf98458ad6ca1ff81f",
"assets/assets/image/onb_3.png": "7aa05f6f7c2d7d9171ba095ed174f13d",
"assets/assets/image/onb_4.png": "5f5b5c05ec18d1452dcc4b9fddd96375",
"assets/assets/svg/card_photo.svg": "6ce7b47c44c51f03f6164063257d8217",
"assets/assets/svg/connectivity_problem.svg": "027a82ad29843a4dfc88719eb4626f19",
"assets/assets/svg/download.svg": "268ec282fe6a8c761f9a4e5de48adc92",
"assets/assets/svg/down_arrow.svg": "4f2bbd134299fce89f5a22daf2b26a18",
"assets/assets/svg/ic_calendar.svg": "7fa13c0200f6a3848ec16aba280989b4",
"assets/assets/svg/ic_circle_checked.svg": "b721633ed46a18b1c6c73d385be83dcb",
"assets/assets/svg/ic_closed_eye.svg": "680e33a06afc700d105f30931bf5b18b",
"assets/assets/svg/ic_delete.svg": "babac52cc3a684d1b54c6807de99d161",
"assets/assets/svg/ic_edit.svg": "2ecc86559cc1ebedc7fec0ef611ea7b3",
"assets/assets/svg/ic_facebook.svg": "1f7dff41e9b0bfcf88c8a09d9d916b58",
"assets/assets/svg/ic_faceid.svg": "94163604b9ab7a7b453b211b59e5a1e0",
"assets/assets/svg/ic_fingerprint.svg": "34c4a50da6fc315f15513a0057614e98",
"assets/assets/svg/ic_instagram.svg": "865de2050921413d13e0d8d61a1213e0",
"assets/assets/svg/ic_linkedin.svg": "9403e79511e6c00c69665eebd52a47ed",
"assets/assets/svg/ic_opened_eye.svg": "f5aa8373a0bdd0edd404bd873d26e885",
"assets/assets/svg/ic_pincode.svg": "1ad6d747ccbdff838ba21dfe2e62175f",
"assets/assets/svg/ic_snackbar_error.svg": "43aa443129ef8b650849175e84180c0f",
"assets/assets/svg/ic_snackbar_info.svg": "8e1791dcc75b3bdbdc4805c6a8e6d54b",
"assets/assets/svg/ic_snackbar_positive.svg": "996825da5d635c48304af0acf7b0f957",
"assets/assets/svg/ic_tab_credit.svg": "c7f5eabadd6ffc78dfd030bdc68bbf53",
"assets/assets/svg/ic_tab_help.svg": "e639b622f1cf241a2325e3cf25c7f292",
"assets/assets/svg/ic_tab_settings.svg": "7b9988fb0e4fb12fed6a66c0a1e55411",
"assets/assets/svg/ic_youtube.svg": "4196c0a0b2c132bc71a8f4edde09ab51",
"assets/assets/svg/loader.svg": "4a73d16d715696d7a6916921bf15dae0",
"assets/assets/svg/logo.svg": "b4838c50aa579437f842aa416c94f460",
"assets/assets/svg/logo_no_text.svg": "4d445bc93ad51073b030ed99e75c6d8e",
"assets/assets/svg/logo_small.svg": "4d445bc93ad51073b030ed99e75c6d8e",
"assets/assets/svg/money.svg": "8aa8e57e3621119ad7c236e52af0142c",
"assets/assets/svg/onboarding_1.svg": "cddddcad840bf5dc5dd7e40830bf2b6c",
"assets/assets/svg/onboarding_2.svg": "bd1cb21de948f80d4b899f145c5a124e",
"assets/assets/svg/onboarding_3.svg": "68527de00f1027620d1d580211ec7c7d",
"assets/assets/svg/onboarding_4.svg": "a891e5f47fdb19846fb8741cc961ba08",
"assets/assets/svg/passport_first.svg": "0d6d5a4cfb6d8205ec5be73b68d4b244",
"assets/assets/svg/passport_second.svg": "91b55c6a0efe143eb90210d0b9299cd4",
"assets/assets/svg/passport_selfie.svg": "718e16433605c97e3cd87fba76778115",
"assets/assets/svg/pco_congrats.svg": "6f5472f1a1848d7e1825f5c1ee37e42e",
"assets/assets/svg/personal_card.svg": "884339042bac613101b0266acf9a6d20",
"assets/assets/svg/reject.svg": "4cb1f9c4abcc87215d50878007c5b58f",
"assets/assets/svg/selfie.svg": "98723507bf68e7f0a6127ebda8fb0e1a",
"assets/assets/svg/slider_minus.svg": "af1d49b578deab56c77ce201a4f853ad",
"assets/assets/svg/slider_plus.svg": "638c3b1a1d32e2fb15cb42209c96ca51",
"assets/assets/svg/splash_background.svg": "340aadd5191f8215cbb803713b34ecc8",
"assets/assets/svg/splash_background_2.svg": "8f1859f82ac07648c799d6c2ee504980",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7bb70371c8f595996744d9935655b2c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"index.html": "680e3c9c80a96f1592d85eccb8a6e898",
"/": "680e3c9c80a96f1592d85eccb8a6e898",
"main.dart.js": "f760ffe11cd0dd5628276d4168b8c8aa",
"manifest.json": "ec0a6cb45bafda8b114c381f0b69efe7",
"splash/img/dark-1x.png": "d9cbb090ec27fb4c547641aa6d070063",
"splash/img/dark-2x.png": "23f1797e57447e978b290f341d03550b",
"splash/img/dark-3x.png": "2ffb78d8186eb712a542516b47efc649",
"splash/img/dark-4x.png": "e932e0439f624449aacc0ce0638e2b0b",
"splash/img/light-1x.png": "d9cbb090ec27fb4c547641aa6d070063",
"splash/img/light-2x.png": "23f1797e57447e978b290f341d03550b",
"splash/img/light-3x.png": "2ffb78d8186eb712a542516b47efc649",
"splash/img/light-4x.png": "e932e0439f624449aacc0ce0638e2b0b",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"version.json": "1711fa2cde54c60a45d77d66ac9f7c11"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
