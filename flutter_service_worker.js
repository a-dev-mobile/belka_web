'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1711fa2cde54c60a45d77d66ac9f7c11",
"splash/img/light-2x.png": "23f1797e57447e978b290f341d03550b",
"splash/img/dark-4x.png": "e932e0439f624449aacc0ce0638e2b0b",
"splash/img/light-3x.png": "2ffb78d8186eb712a542516b47efc649",
"splash/img/dark-3x.png": "2ffb78d8186eb712a542516b47efc649",
"splash/img/light-4x.png": "e932e0439f624449aacc0ce0638e2b0b",
"splash/img/dark-2x.png": "23f1797e57447e978b290f341d03550b",
"splash/img/dark-1x.png": "d9cbb090ec27fb4c547641aa6d070063",
"splash/img/light-1x.png": "d9cbb090ec27fb4c547641aa6d070063",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"index.html": "f42217ba20e91a9cfb1acb9510ad8d3c",
"/": "f42217ba20e91a9cfb1acb9510ad8d3c",
"main.dart.js": "99a4226996865b4cda893f9aa1d8b7d9",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/favicon-16x16.png": "05f88cf6b0ec2a98bf8a1877031f1b25",
"icons/favicon.ico": "43073be7ae6cc7330c17422e74a7aef4",
"icons/android-chrome-192x192.png": "8a74745d1ed7f68c386499597e496fa5",
"icons/apple-touch-icon.png": "847985fcbd63390d6ab8530899e4964e",
"icons/android-chrome-512x512.png": "5ea3e519f9d13af303e5d1a713591f6f",
"icons/favicon-32x32.png": "421900d6318ce442613adf9b4fdbf763",
"manifest.json": "8832b8ebb9bec6576db8919486d9cb56",
"assets/AssetManifest.json": "a001894fbbbc09f18b1df13928bfe449",
"assets/NOTICES": "d49c0af4df1980183a1f6d57f66de051",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/splash_background.svg": "15e18528e6bb259df46077129a556863",
"assets/assets/svg/onboarding_2.svg": "bd1cb21de948f80d4b899f145c5a124e",
"assets/assets/svg/ic_snackbar_info.svg": "799681902e4634668ba3e03878b4254d",
"assets/assets/svg/onboarding_3.svg": "68527de00f1027620d1d580211ec7c7d",
"assets/assets/svg/onboarding_1.svg": "cddddcad840bf5dc5dd7e40830bf2b6c",
"assets/assets/svg/ic_facebook.svg": "6d3bd02bd410d9ac830c636964a96fe8",
"assets/assets/svg/personal_card.svg": "dc8674a2f35de2607e331cf17abdcbe1",
"assets/assets/svg/ic_delete.svg": "426d86bea807107f61f9e33bd588d26f",
"assets/assets/svg/passport_first.svg": "372199ffde038b95ee1edbf1f7bcbc6c",
"assets/assets/svg/onboarding_4.svg": "a891e5f47fdb19846fb8741cc961ba08",
"assets/assets/svg/card_photo.svg": "116f6971c381fd47e9dede79a26f7d55",
"assets/assets/svg/ic_opened_eye.svg": "1f1734e062edbcfcd109d57bc7c165a2",
"assets/assets/svg/passport_selfie.svg": "00f79e6e0153332593332dcff6258f43",
"assets/assets/svg/ic_tab_settings.svg": "43f1736ddbe3e372e5427e15c3b96879",
"assets/assets/svg/ic_faceid.svg": "fea65875e96522f60915a2312ab85385",
"assets/assets/svg/step_inactive.svg": "234d53699ab0b51de5c3095d51cca05d",
"assets/assets/svg/ic_circle_checked.svg": "611b9ec7385b15d559bea25c55378037",
"assets/assets/svg/download.svg": "d813f66627b268a573d619f8b315ff18",
"assets/assets/svg/ic_linkedin.svg": "44d6b7fab6bb1cbecc46100addb022be",
"assets/assets/svg/ic_calendar.svg": "4d8a2e3b619cc8c0a282cd71ef37f803",
"assets/assets/svg/icon_drawer.svg": "71ad4121568ce02d0cffd98cd7c96580",
"assets/assets/svg/ic_tab_help.svg": "f83f2605ac1cf5c491fa78857084031d",
"assets/assets/svg/ic_youtube.svg": "1bade902e4c2188b4f71f498916ac7f4",
"assets/assets/svg/passport_second.svg": "3687f563f3f37bd10d009a3d720c1975",
"assets/assets/svg/ic_close_dialog.svg": "e22c064bb3fff0baa56651d74596dc81",
"assets/assets/svg/down_arrow.svg": "d4d28c1c306050114619f22d3dcac7a2",
"assets/assets/svg/loader.svg": "d348d84a43969629eef7c69b499e8f07",
"assets/assets/svg/pco_congrats.svg": "7a0ca50ddf6778d4ef0171410a84498e",
"assets/assets/svg/ic_closed_eye.svg": "0312e97ad4883b45a2059b946fc05c73",
"assets/assets/svg/ic_pincode.svg": "503620ca47b2f4ce73474e280aa60640",
"assets/assets/svg/selfie.svg": "90161951729ea871b53335a282bf926c",
"assets/assets/svg/logo_no_text.svg": "94981c45376235bd57558d1e370e4930",
"assets/assets/svg/step_progress.svg": "3595906c64b9f1fde389943968655ade",
"assets/assets/svg/slider_minus.svg": "6ab6fb4df60186dbb21498377dba2742",
"assets/assets/svg/ic_tab_credit.svg": "98c42398f3912b3cefe36c10a24feb82",
"assets/assets/svg/connectivity_problem.svg": "a3df70711696bc878c1a85df9b606d9c",
"assets/assets/svg/logo_small.svg": "94981c45376235bd57558d1e370e4930",
"assets/assets/svg/ic_snackbar_error.svg": "8742b604dccb6428277cc629c6ad7392",
"assets/assets/svg/money.svg": "c9c88c3853e091a64ff04fa9d4887b57",
"assets/assets/svg/step_done.svg": "6b9ec878a5b2f5e415e892c128453d79",
"assets/assets/svg/logo.svg": "94a8f5f0fe91310d182a7126784f357b",
"assets/assets/svg/reject.svg": "1a194f2fcf4bc595214f579aa78bb91a",
"assets/assets/svg/ic_fingerprint.svg": "f86af2e26ff587e1c56ef8810f760fe0",
"assets/assets/svg/ic_edit.svg": "8c5dd58708ffba2106e9db98f9e4ab57",
"assets/assets/svg/ic_snackbar_positive.svg": "cf051841ffc0b337597811da4eeb48fe",
"assets/assets/svg/slider_plus.svg": "c8e54bafa79ee6de7e5839d8b0f2c01d",
"assets/assets/svg/progressbar_1.svg": "3777d38869ac0b71d430d124aea908c4",
"assets/assets/svg/ic_instagram.svg": "d0fece07e69cb1c8a2d21e83a5440bbf",
"assets/assets/docs/giveout_rules.pdf": "82cd6daca5e18529e320f5e32d6d4317",
"assets/assets/docs/common_loan_rules.pdf": "3167c311c399cf6ccb5ecf0402fe381d",
"assets/assets/docs/certificate_part_of_sro.pdf": "02532964d048d429bdd0a01702c4ef94",
"assets/assets/docs/processing_of_personal_data.pdf": "594500f6c75d2188a15b510a678c2c3b",
"assets/assets/docs/9.pdf": "fbdf73a1f3b4cd321e542509d3a2e372",
"assets/assets/docs/8.pdf": "c1a0b8d9317e2807324057a1e60139f4",
"assets/assets/docs/giveout_return_info.pdf": "2ad705438f56c209036843fab139e55d",
"assets/assets/docs/10.pdf": "4194dc22c9d0ab351e360fc478a8dcf7",
"assets/assets/docs/11.pdf": "0d3ce615a4de06d17b51144531220bf0",
"assets/assets/docs/12.pdf": "d286df4c649c43c7fb1d8a3d22c27508",
"assets/assets/docs/executive_law_115.pdf": "f1f35c2cf4f4872c3ca825a3a7f0f6fb",
"assets/assets/docs/6.pdf": "e5c0d80d9315b05116b9e47c8962a333",
"assets/assets/docs/7.pdf": "f44a0b57b69a9f0fc71737291ef29188",
"assets/assets/docs/credit_report_agreement.pdf": "c5e5e44a0945d04a10787e36a6e684ee",
"assets/assets/docs/credit_request_form.pdf": "3e936a2c55835f9bb185a5e76ad474d2",
"assets/assets/docs/5.pdf": "113d74b1324709a3c571010f297cb7c9",
"assets/assets/docs/4.pdf": "b2a7bbc484ac4105ae23f2ac39d30398",
"assets/assets/docs/signature.pdf": "d13352e0eb79bd9570305308519a5398",
"assets/assets/docs/1.pdf": "ac717a8081ac3c18826bf73b6b67a2ce",
"assets/assets/docs/3.pdf": "cc4e94aa47106039577d35bb46c5f621",
"assets/assets/docs/2.pdf": "2f7b38ecac99363c3e082552ef94a7c2",
"assets/assets/docs/meanings.txt": "7424c1246dd803ecdc665fa38607de59",
"assets/assets/image/lady_money.png": "c9a6a45377cd788b687ce1c798b2c4cd",
"assets/assets/image/onb_4.png": "5f5b5c05ec18d1452dcc4b9fddd96375",
"assets/assets/image/onb_1.png": "54dddf915837a976810ef2f52db299b3",
"assets/assets/image/onb_3.png": "7aa05f6f7c2d7d9171ba095ed174f13d",
"assets/assets/image/onb_2.png": "048203c6fc1e50cf98458ad6ca1ff81f",
"assets/assets/image/logo.png": "55aca42b165af0c1227aab04cf5ebe31",
"assets/assets/icon/icon.png": "ddd175ce65f555096cf2d9073c12e137",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
