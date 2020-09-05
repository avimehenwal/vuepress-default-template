/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1970/01/01/third-post/index.html",
    "revision": "215c9fd4520c5dd4ef946b8c58121522"
  },
  {
    "url": "1970/01/01/this-is-first-post/index.html",
    "revision": "b5c2bfb44e114181f72ff3c9a7efab70"
  },
  {
    "url": "1970/01/01/this-is-second-post/index.html",
    "revision": "2229ef0a4c3be513267938ed4c27d95f"
  },
  {
    "url": "2020/09/01/one-more-post/index.html",
    "revision": "3ce961dc5a5f05c409466377ad436fee"
  },
  {
    "url": "2020/09/01/vuepress-common-troubles/index.html",
    "revision": "ebc7bbca7764b69b32c173d84e7e6b52"
  },
  {
    "url": "404.html",
    "revision": "df21f48b73e2b4e3abaf69d533c7898b"
  },
  {
    "url": "am.svg",
    "revision": "a131470d08ad8b5e09dc74c0d94eb478"
  },
  {
    "url": "assets/css/0.styles.e1d19006.css",
    "revision": "46a8a37940a0fe878c5015415aeff22f"
  },
  {
    "url": "assets/img/face.da2bf8d1.png",
    "revision": "da2bf8d11badfb3b2bc1cc7a9b917d2b"
  },
  {
    "url": "assets/img/glasses.d89bcdd0.png",
    "revision": "d89bcdd0c041376fa868a29102fb55bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35b83464.js",
    "revision": "710cbfbfb458ef734f8c8cc0fcf2e315"
  },
  {
    "url": "assets/js/11.87e738e0.js",
    "revision": "f41a3add672c11faecad2edd447a196d"
  },
  {
    "url": "assets/js/12.39f4f55a.js",
    "revision": "ef714b7befe8392f2a9323ecc463658b"
  },
  {
    "url": "assets/js/13.920ef54c.js",
    "revision": "d8371378daaaa0edea5485ff1786ef29"
  },
  {
    "url": "assets/js/14.48d16f03.js",
    "revision": "7bb2f1fe5f24136f84e27810cca39885"
  },
  {
    "url": "assets/js/15.d52f37b7.js",
    "revision": "3a28c2def43d11d699ae337390884d34"
  },
  {
    "url": "assets/js/16.f30b50cc.js",
    "revision": "8a317d2dcfa1d2924c3b86a7a98c0bb3"
  },
  {
    "url": "assets/js/17.803048b8.js",
    "revision": "d5ace73d8fb138b2c0eed411ffdcac13"
  },
  {
    "url": "assets/js/18.4ab30d48.js",
    "revision": "6058cbbcbc4ec4e44be0feba139a2d03"
  },
  {
    "url": "assets/js/19.68873b2f.js",
    "revision": "9fc8f848cc3e4348ecd52d1f5e76ce10"
  },
  {
    "url": "assets/js/20.58d6e5f1.js",
    "revision": "5edcc6aefe9107df625762611839bba8"
  },
  {
    "url": "assets/js/21.457f607a.js",
    "revision": "49e965491b661146b6ad11b256a26bca"
  },
  {
    "url": "assets/js/22.5cb65e1d.js",
    "revision": "7f8923597914dcf6ea18f99e046f712d"
  },
  {
    "url": "assets/js/23.86d187d8.js",
    "revision": "1965ca104a0fadc08f78a86034ad721b"
  },
  {
    "url": "assets/js/24.c92f433a.js",
    "revision": "0ad4c0e621919ba7c3a79e06c3caf0ff"
  },
  {
    "url": "assets/js/25.95475a7c.js",
    "revision": "3664b83f1809fc180769abb6ad00a155"
  },
  {
    "url": "assets/js/26.7edc6651.js",
    "revision": "439cb515b4ae052fa89a40271dea8909"
  },
  {
    "url": "assets/js/3.2503dfdb.js",
    "revision": "d600c5581b3fd7952ae0fa0518d35a6d"
  },
  {
    "url": "assets/js/4.34e1340c.js",
    "revision": "5bca708db93dab12652290f99ba1c96d"
  },
  {
    "url": "assets/js/5.43613f43.js",
    "revision": "d08274e8795cddd639f51ad20828aec1"
  },
  {
    "url": "assets/js/6.f7e797d4.js",
    "revision": "88bd29988df5163d3a03003a42392c0b"
  },
  {
    "url": "assets/js/7.e6549aa8.js",
    "revision": "df28e91d55830af6d2c8f5132d649f63"
  },
  {
    "url": "assets/js/8.a88d1c35.js",
    "revision": "67906e34f697caf5f7d4baae23e9f84b"
  },
  {
    "url": "assets/js/9.fdf50bd5.js",
    "revision": "1867bf3f8500df7328a3203da1b895a2"
  },
  {
    "url": "assets/js/app.edce6f24.js",
    "revision": "4f1e2ad321392ccdeafc2d010346b833"
  },
  {
    "url": "assets/js/vuejs-paginate.857628a5.js",
    "revision": "3df298776cd55e098da8d6a61e28ae10"
  },
  {
    "url": "guide/index.html",
    "revision": "c9c30ca2ef18bef7dfb91ebd1437e069"
  },
  {
    "url": "guide/someconfig.html",
    "revision": "ca55a154241daea71d140f0eed6aa628"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "4df4fdfcaccae654446d678bfccae16f"
  },
  {
    "url": "icons/pencil-rocket.svg",
    "revision": "72c95f7d83a2ea56a5bde41f7ac80890"
  },
  {
    "url": "index.html",
    "revision": "a6b4cccf8aac2264ca8c8b3fa9f8155a"
  },
  {
    "url": "post/index.html",
    "revision": "a8133569bab14f3a7811ffaba0eda7de"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "2bf2035c2805de363dbe0b75cfcd6344"
  },
  {
    "url": "post/page/3/index.html",
    "revision": "799286ac4d6036a4666a2e35f9f00e6e"
  },
  {
    "url": "tag/index.html",
    "revision": "3b08b7b5699c068fe24040e68f6d3a8f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
