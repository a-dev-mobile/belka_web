'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "50b558c440d60ef71f46c3b301b7538b",
"assets/AssetManifest.json": "3b2d304549793385ae92a6ed1a348362",
"assets/assets/fonts/ProximaNova-Bold.ttf": "2b93e8e975cd6d488fe0e635541728f9",
"assets/assets/fonts/ProximaNova-Light.ttf": "f65a2d7d4f360293cf031799964a9fc3",
"assets/assets/fonts/ProximaNova-Medium.ttf": "40f429bcfe7b91e974e7aeb5fe30912b",
"assets/assets/fonts/ProximaNova-Regular.ttf": "1fc524a22c99e8d63393ecfe238e3d35",
"assets/assets/fonts/ProximaNova-Semibold.ttf": "3625e925425cb102cadb2f5db79c9aa0",
"assets/assets/fonts/proximanova_regular.ttf": "386c8ff06aaa9d3ea14528a5703b6ec5",
"assets/assets/image/foto_card.png": "466c3b76c1b43cf9a2aaf8397db1d0fb",
"assets/assets/image/logo.png": "55aca42b165af0c1227aab04cf5ebe31",
"assets/assets/image/logo_card_1.png": "99ea0efe5f940213bc51824e6d179819",
"assets/assets/image/logo_card_2.png": "9a14845f5888a0c63624e6b8b81ae040",
"assets/assets/image/logo_card_3.png": "613bc180f0f0fd654c9365c25881a31e",
"assets/assets/image/onb_1.png": "94c5bd3b0a210aa8b4e2e1f29720cb62",
"assets/assets/image/onb_2.png": "108a85d57d19f6b17634c27205dd20a1",
"assets/assets/image/onb_3.png": "88cde83de166281524de3866c7832211",
"assets/assets/image/onb_4.png": "e11a645712ef7fde1ce3a4c700864401",
"assets/assets/image/passport_1.png": "0bcd5034a71fd34a7815989d5b562a68",
"assets/assets/image/passport_2.png": "4ab1816252ea57f354c0fb71ee3d6983",
"assets/assets/image/passport_3.png": "ae9339f1b36426296d740843985dc3a9",
"assets/assets/lottie/load_btn.json": "ad7348a8a6ac4078c641dd97a048ab47",
"assets/assets/lottie/load_page.json": "50f979a829652b793ea34c58e3896fcf",
"assets/assets/svg/card_photo.svg": "6ce7b47c44c51f03f6164063257d8217",
"assets/assets/svg/connectivity_problem.svg": "027a82ad29843a4dfc88719eb4626f19",
"assets/assets/svg/doc.svg": "8f64764fb446a66c00e8efa007e8700f",
"assets/assets/svg/download.svg": "268ec282fe6a8c761f9a4e5de48adc92",
"assets/assets/svg/down_arrow.svg": "4f2bbd134299fce89f5a22daf2b26a18",
"assets/assets/svg/hard_rejected.svg": "e3452dc04bfe90b3da07e84474f0efe0",
"assets/assets/svg/ic_active_done.svg": "496a23f8af5cff894461eea7185ead95",
"assets/assets/svg/ic_active_plus.svg": "9d63866fbf60d5718a2c92530c752183",
"assets/assets/svg/ic_active_trash.svg": "3a53af1557848b12e2d572af70518bdf",
"assets/assets/svg/ic_add_card.svg": "f200f378d9243a1c50bb02287cb25cdc",
"assets/assets/svg/ic_arrow_back.svg": "9384f53db34b2fcfd350b57a92f5fe8d",
"assets/assets/svg/ic_arrow_bottom.svg": "e68ab24b528754fc92d5bc07a64e90ac",
"assets/assets/svg/ic_arrow_top.svg": "2de88e478ceb2f28ca2b945dfe159b4b",
"assets/assets/svg/ic_belka.svg": "b4f4e49564707361d31a93dd2779a260",
"assets/assets/svg/ic_btn_back.svg": "acd5d8c373f3f2c5ee763e77d19a4d2c",
"assets/assets/svg/ic_c7.svg": "30b102359b212a507983059846995402",
"assets/assets/svg/ic_calendar.svg": "e534cf324f8174b115c876eb0e0ec0ff",
"assets/assets/svg/ic_card_1.svg": "ba6ac422f54dc1fb7ba6bace574cba13",
"assets/assets/svg/ic_chevron_down.svg": "0e2d573b8b56b841018c7613c32f2071",
"assets/assets/svg/ic_circle_checked.svg": "b721633ed46a18b1c6c73d385be83dcb",
"assets/assets/svg/ic_close.svg": "40e6665ec08fe38fb82d8836d9ce6209",
"assets/assets/svg/ic_closed_eye.svg": "7de5d86391b99698045c291fe90b01b6",
"assets/assets/svg/ic_congrats.svg": "38c8e5a423e326f1c5a2cd9b8c04dff2",
"assets/assets/svg/ic_delete.svg": "babac52cc3a684d1b54c6807de99d161",
"assets/assets/svg/ic_del_card.svg": "cd2307a107f8bcb067326fbb8126dc0b",
"assets/assets/svg/ic_del_pin.svg": "8d6126db98ec8b8fb6a326607965aaa0",
"assets/assets/svg/ic_doc.svg": "e58360ef347698fc3e82840f8ac4b1fd",
"assets/assets/svg/ic_edit.svg": "11837c2e8a2314537287176a88e95073",
"assets/assets/svg/ic_error.svg": "4f8ba178300df936a5bbd20e48e1305a",
"assets/assets/svg/ic_error_close.svg": "ef46e9c449b875c2f72de0aca039d74c",
"assets/assets/svg/ic_error_valid.svg": "159aa8ad07782c62084fcaacb10d68f7",
"assets/assets/svg/ic_faceid.svg": "94163604b9ab7a7b453b211b59e5a1e0",
"assets/assets/svg/ic_fingerprint.svg": "34c4a50da6fc315f15513a0057614e98",
"assets/assets/svg/ic_info.svg": "dd0f2b165b92f37153467c6f07ff22b3",
"assets/assets/svg/ic_info_2.svg": "b6877881155a8f92e53ab033e830d205",
"assets/assets/svg/ic_info_close.svg": "0d3119c0b7ce5fdbe863a3864f411740",
"assets/assets/svg/ic_label_card.svg": "cd44a116d3423116519d3f772e54e23d",
"assets/assets/svg/ic_line.svg": "d9d9478d3347230be84fa197d2c77ed2",
"assets/assets/svg/ic_load.svg": "91631a805e75d39c7aa1b62d494e8c8b",
"assets/assets/svg/ic_loan_wait.svg": "84f6cf8b1dbc1ffe0d7d03bb8105bf44",
"assets/assets/svg/ic_lock.svg": "a3c059a9a7ba24cfc05a6645596a677f",
"assets/assets/svg/ic_nd.svg": "7601a3bf24fc9e955e93a55af352f7ba",
"assets/assets/svg/ic_notification_info.svg": "cbcbcabd0706c6c9afff0202ad5b19f2",
"assets/assets/svg/ic_opened_eye.svg": "49319b6fb2f00a0f58ae18c3616762ea",
"assets/assets/svg/ic_person.svg": "b5ddd96728758ac72e5ee33996951128",
"assets/assets/svg/ic_phone.svg": "3fa9ed4181f9768aba3589ce515cdd30",
"assets/assets/svg/ic_phone_book.svg": "b30f43be739e3f1b03888c4ee9bf2901",
"assets/assets/svg/ic_pincode.svg": "1ad6d747ccbdff838ba21dfe2e62175f",
"assets/assets/svg/ic_radio_card_false.svg": "8726c67014584a9520a5f3bf0ac2ea5e",
"assets/assets/svg/ic_radio_card_true.svg": "537d0d92607d7e1560a8577d9ccac76f",
"assets/assets/svg/ic_snackbar_error.svg": "43aa443129ef8b650849175e84180c0f",
"assets/assets/svg/ic_snackbar_info.svg": "8e1791dcc75b3bdbdc4805c6a8e6d54b",
"assets/assets/svg/ic_snackbar_positive.svg": "996825da5d635c48304af0acf7b0f957",
"assets/assets/svg/ic_snackbar_positive_1.svg": "97f5a6a339ec96794125ba1628a3d3d0",
"assets/assets/svg/ic_soft_reject.svg": "811b83659c7e55ef86520f494a8f96d2",
"assets/assets/svg/ic_success.svg": "219f20d34a68df211d4887e7fd22ae9c",
"assets/assets/svg/ic_success_close.svg": "8020ea1b4f3abd9c77d502a91f387b7f",
"assets/assets/svg/ic_success_photo.svg": "926ecc4c229a9255d7caa888b088768f",
"assets/assets/svg/ic_tab_card.svg": "087d4be141804a56ac100f64c72682b8",
"assets/assets/svg/ic_tab_card_active.svg": "3659c40938e3bb3a582a90b8d670ed3e",
"assets/assets/svg/ic_tab_card_inactive.svg": "fac5301b57ab2c65f0abc5589081e88a",
"assets/assets/svg/ic_tab_help.svg": "ad1d7208bebe072d6fa498b1c6b27778",
"assets/assets/svg/ic_tab_help_active.svg": "3c35f6dfcd5945efa27a60f467f34af3",
"assets/assets/svg/ic_tab_loan.svg": "3ffece57a27d0cf5524bfa314d5d216d",
"assets/assets/svg/ic_tab_loan_active.svg": "84ac7825589d2ce72d069c16ecc1dadb",
"assets/assets/svg/ic_tab_setting.svg": "2088659be932cb8bb0f9262469984872",
"assets/assets/svg/ic_tab_setting_active.svg": "7d162c7aa6914f401fe9eea1a64161f6",
"assets/assets/svg/ic_tg.svg": "2b1d8fbfc950b1300ec9fb0e42605061",
"assets/assets/svg/ic_user.svg": "9af4926ed93dfe48ca56824870a94192",
"assets/assets/svg/ic_vk.svg": "b086baa532815b5b8aaa096e6cfb23d5",
"assets/assets/svg/ic_warning.svg": "133bf6fc6b174bfd8846ec97783a578d",
"assets/assets/svg/ic_warning_close.svg": "a52490b52507f071c37aeaf2cc81e090",
"assets/assets/svg/ic_zen.svg": "a288e12b48efc70691d629f3c57b85e0",
"assets/assets/svg/loader.svg": "24524ac0079c9404ee2d201899d727af",
"assets/assets/svg/logo.svg": "00e26b48fd8ec8a2d25cc88d251ee1e3",
"assets/assets/svg/money.svg": "8aa8e57e3621119ad7c236e52af0142c",
"assets/assets/svg/no_internet.svg": "51ec9e125a07e0ca0d1b6fa7f6f52af6",
"assets/assets/svg/passport_first.svg": "0d6d5a4cfb6d8205ec5be73b68d4b244",
"assets/assets/svg/passport_second.svg": "91b55c6a0efe143eb90210d0b9299cd4",
"assets/assets/svg/passport_selfie.svg": "718e16433605c97e3cd87fba76778115",
"assets/assets/svg/pco_congrats.svg": "019fec907b297ae2185c72b736aaa6d2",
"assets/assets/svg/personal_card.svg": "884339042bac613101b0266acf9a6d20",
"assets/assets/svg/prefix_phone.svg": "b0f875b7725a69b1da889d0d7d134e77",
"assets/assets/svg/reject.svg": "1602e8f61f69b30752437a6eafff208c",
"assets/assets/svg/selfie.svg": "98723507bf68e7f0a6127ebda8fb0e1a",
"assets/assets/svg/slider_minus.svg": "af1d49b578deab56c77ce201a4f853ad",
"assets/assets/svg/slider_plus.svg": "638c3b1a1d32e2fb15cb42209c96ca51",
"assets/assets/svg/star.svg": "07e7218b12d6f93186d710ceb9078f42",
"assets/assets/svg/step_done.svg": "01ac9fcd46f448b5bc600637ebb68f91",
"assets/assets/svg/step_inactive.svg": "176a45754d773908475d8953af0c27fd",
"assets/assets/svg/step_progress.svg": "fe81fe3ba9b0a0021be7732680e91baf",
"assets/assets/svg/success.svg": "1e7cb4df13f889a3991935891bcf84c8",
"assets/assets/svg/valid_error.svg": "72ebf1925892ffcee0aa333608cad0f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ba34dfe2c2d0d71d757c3a2cfde0db7",
"assets/NOTICES": "ee1040f61199e1680d59763864c5c897",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "eb64893f841785b6d53193aa7826a506",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "8a74745d1ed7f68c386499597e496fa5",
"icons/android-chrome-512x512.png": "5ea3e519f9d13af303e5d1a713591f6f",
"icons/apple-touch-icon.png": "141fd68fa05a53d0251de87bec7929ad",
"icons/favicon-16x16.png": "05f88cf6b0ec2a98bf8a1877031f1b25",
"icons/favicon-32x32.png": "421900d6318ce442613adf9b4fdbf763",
"icons/favicon.ico": "eb64893f841785b6d53193aa7826a506",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/icon-192-maskable.png": "770598951a5f2959a87dfe5050e1c480",
"icons/Icon-192.png": "675c39d58a071dd3b69ca225ebc9da16",
"icons/icon-512-maskable.png": "3e3a35b08de10f62904705a0eb8e1a95",
"icons/Icon-512.png": "649ca9890ad1279977bf6dece7bd7d12",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "344dcdb0179f9553d4ecfe4e427f4dc2",
"/": "344dcdb0179f9553d4ecfe4e427f4dc2",
"main.dart.js": "0646a872679d04074b2537fe9662f779",
"manifest.json": "22436cd60adf619537bed837fa24a9e9",
"splash/img/light-4x.png": "649ca9890ad1279977bf6dece7bd7d12",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "ed126b7186e28f5a99c851eb5379a71e",
"version.json": "1bba9bf0d31ccf1a8399df5c1d12a394"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
