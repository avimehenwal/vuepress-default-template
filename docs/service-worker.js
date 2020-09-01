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
    "revision": "a9a4c1dcffb4269ef4864c4d20d4306f"
  },
  {
    "url": "1970/01/01/this-is-first-post/index.html",
    "revision": "52c20390c23dd304fe28bc713516d654"
  },
  {
    "url": "1970/01/01/this-is-second-post/index.html",
    "revision": "e6551435e21b6bbb88b1d7d51a69372d"
  },
  {
    "url": "2020/09/01/one-more-post/index.html",
    "revision": "5a7fdde71f6c1394ccc7cd660cf1323b"
  },
  {
    "url": "2020/09/01/vuepress-common-troubles/index.html",
    "revision": "603ed66257dae1ffd72e3124de85e7a6"
  },
  {
    "url": "404.html",
    "revision": "c9fb8e072b6dd8b0eed57e1da176ac9d"
  },
  {
    "url": "am.svg",
    "revision": "a131470d08ad8b5e09dc74c0d94eb478"
  },
  {
    "url": "assets/css/0.styles.6133c6c7.css",
    "revision": "6a09c65b9b2918ab076f1004d85edcf1"
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
    "url": "assets/js/10.ea2eff2b.js",
    "revision": "f9cc6dc3ab7a74c241cad78e44395927"
  },
  {
    "url": "assets/js/11.d3c9801e.js",
    "revision": "f086e92e83b6fbd083a6d94d1c97a2e2"
  },
  {
    "url": "assets/js/12.d1e607e2.js",
    "revision": "06dde8ab9669e9d4f5b9c090925ed5dd"
  },
  {
    "url": "assets/js/13.e75c4ad7.js",
    "revision": "38d9c93acd41bdab82f7c412adeefda5"
  },
  {
    "url": "assets/js/14.f9ecb33d.js",
    "revision": "4479198848c614048b56a8c43fec4b54"
  },
  {
    "url": "assets/js/15.9ad8893a.js",
    "revision": "99cfd345caf22b857b13b4fd751992a3"
  },
  {
    "url": "assets/js/16.42fe4ca4.js",
    "revision": "b82d52d87d75abdafe2c955fa611f910"
  },
  {
    "url": "assets/js/17.80819125.js",
    "revision": "3d9ac5271c495c13b038d92ba2248adb"
  },
  {
    "url": "assets/js/18.61ae78f6.js",
    "revision": "0f1b00faafd24b4d7d0ca7c33863cb84"
  },
  {
    "url": "assets/js/19.fce4c06f.js",
    "revision": "38b3430d372aca5d647870b50c64d364"
  },
  {
    "url": "assets/js/20.79c25418.js",
    "revision": "30a359bad82ac50992f6b379ab188bb7"
  },
  {
    "url": "assets/js/21.815d786b.js",
    "revision": "7a3e409728cddf39037a53ac08251de3"
  },
  {
    "url": "assets/js/22.dd57d3a2.js",
    "revision": "ab5512656c91d24ef4bda068240a4eed"
  },
  {
    "url": "assets/js/23.2bbebe2e.js",
    "revision": "523d2e982d63e176d4e51048a86761ab"
  },
  {
    "url": "assets/js/24.173be8d8.js",
    "revision": "a61bc1869aacf96cc88e644f975223ae"
  },
  {
    "url": "assets/js/25.c5cd8ebf.js",
    "revision": "e0217fcd357797a83e0ee42203b1f3bc"
  },
  {
    "url": "assets/js/26.6a86fc5c.js",
    "revision": "e7d92484918cecca65b60ea6c242c885"
  },
  {
    "url": "assets/js/27.3102bd7b.js",
    "revision": "eb97b9dfbbba149b370ed3f2545a642c"
  },
  {
    "url": "assets/js/3.a39bd97d.js",
    "revision": "22605fab40bd50f96ca92402a040ea29"
  },
  {
    "url": "assets/js/4.2fb27971.js",
    "revision": "8c01d95b87f3e5d963d30958da509fd4"
  },
  {
    "url": "assets/js/5.d9e60e30.js",
    "revision": "4c27d545125e78ead523be2893d1178f"
  },
  {
    "url": "assets/js/6.52e3089d.js",
    "revision": "20aedebe65a208fe66fc0e4e91beb083"
  },
  {
    "url": "assets/js/7.dedc0109.js",
    "revision": "edec44199c7d3ea7074bb3222c05f098"
  },
  {
    "url": "assets/js/8.64e9063b.js",
    "revision": "c234a7cd8887f82dbe22fb3e76b63494"
  },
  {
    "url": "assets/js/9.798ec211.js",
    "revision": "1e7d808ec93ce6ac66b1abe4e73436e7"
  },
  {
    "url": "assets/js/app.2312032d.js",
    "revision": "34e27b4e011cf998055fbc9d5327b340"
  },
  {
    "url": "assets/js/styles.6133c6c7.js",
    "revision": "162662bfb6b6cea542eacfb4ba100502"
  },
  {
    "url": "assets/js/vuejs-paginate.f0af481b.js",
    "revision": "d484a2d9a95f110478a40f9f1feba10c"
  },
  {
    "url": "config/index.html",
    "revision": "6292581d08311d74bd9016e74d2e8403"
  },
  {
    "url": "config/someconfig.html",
    "revision": "c2771dd3c1be3bc2196d2c4e7acb78a1"
  },
  {
    "url": "guide/index.html",
    "revision": "dfe7f8992dc7e3dcfd47f20d70448d48"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "dd4adf91fe5d544b229f11e573d46015"
  },
  {
    "url": "icons/pencil-rocket.svg",
    "revision": "72c95f7d83a2ea56a5bde41f7ac80890"
  },
  {
    "url": "index.html",
    "revision": "e3ef3beaad3d22f6a39915b94c8f65e9"
  },
  {
    "url": "post/index.html",
    "revision": "65bf938e8205909af8e8c223fb01b200"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "c58e1bb22e66b9171ebe51bba913c2fc"
  },
  {
    "url": "post/page/3/index.html",
    "revision": "f723563d6db1b73836ced3ab2c711184"
  },
  {
    "url": "tag/index.html",
    "revision": "883bcd3b0f77ce5c4aa6b17684026a58"
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
