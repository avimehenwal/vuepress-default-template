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
    "url": "404.html",
    "revision": "633eafd825373909d43121eb55cd0c35"
  },
  {
    "url": "am.svg",
    "revision": "a131470d08ad8b5e09dc74c0d94eb478"
  },
  {
    "url": "assets/css/0.styles.7c25f08e.css",
    "revision": "63c18f673d10b1e998bf8ba0df10769d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.563fa1fc.js",
    "revision": "4d17565bac069ca1ef89a5600ab9a361"
  },
  {
    "url": "assets/js/11.63085c30.js",
    "revision": "c5b3aea6647901effa51748d5cfe3054"
  },
  {
    "url": "assets/js/12.73132932.js",
    "revision": "b68b12481fc050c68dfe78da0314f674"
  },
  {
    "url": "assets/js/13.4b63ed63.js",
    "revision": "505903f5fe584869cb3bbae9c44d2e61"
  },
  {
    "url": "assets/js/14.f7587148.js",
    "revision": "de0e26d76fa3f3390a0b07a56d3f316f"
  },
  {
    "url": "assets/js/15.7c165f04.js",
    "revision": "b7d717d7a75bb595a061804ea7a28baa"
  },
  {
    "url": "assets/js/16.cc048348.js",
    "revision": "b1055ef92a075543a2d5abd2005347f0"
  },
  {
    "url": "assets/js/17.8cc4b04c.js",
    "revision": "d940b5bfd677f71d3d70b00fa1cf205e"
  },
  {
    "url": "assets/js/18.f49e04e0.js",
    "revision": "a3a2cef6bd7052388d96ca2fb77ba773"
  },
  {
    "url": "assets/js/19.b136e9f3.js",
    "revision": "ba75a35b112d3e8fab525db4ff81bc29"
  },
  {
    "url": "assets/js/2.1313f20d.js",
    "revision": "ad595a2ae5c99af5468721a6142638a8"
  },
  {
    "url": "assets/js/20.7661c7e1.js",
    "revision": "65778b40154ff930cf7c90acb74434b0"
  },
  {
    "url": "assets/js/21.1150af3e.js",
    "revision": "c6deaba45fdb1617f09daf1034d1d9ae"
  },
  {
    "url": "assets/js/3.0f2e9c79.js",
    "revision": "024cb7f08900f5e13f701eb8afb4f532"
  },
  {
    "url": "assets/js/4.6cfdb44d.js",
    "revision": "19618342af235f5791b656e35022774a"
  },
  {
    "url": "assets/js/5.68eb1345.js",
    "revision": "ee560ea3b9652ae4f9981d9924fb106e"
  },
  {
    "url": "assets/js/6.aa33c855.js",
    "revision": "739dcceda9bfaef3d17945ba4d429488"
  },
  {
    "url": "assets/js/7.7f95e869.js",
    "revision": "2ed428535138da95df0e15a7a569a045"
  },
  {
    "url": "assets/js/8.ad61b564.js",
    "revision": "6832fa6d46857865cc99746ea609d768"
  },
  {
    "url": "assets/js/9.a4951a5d.js",
    "revision": "41b743e95a9ed9c141583b76834565a8"
  },
  {
    "url": "assets/js/app.86250211.js",
    "revision": "db52c4d30f2d326fd55dfba857338881"
  },
  {
    "url": "config/index.html",
    "revision": "77711487f0359eb1aedb01a3cb65e9ea"
  },
  {
    "url": "config/someconfig.html",
    "revision": "8bb7ae0f32e66639e65811bee2b245a2"
  },
  {
    "url": "guide/index.html",
    "revision": "615cca9410a5db1a025d36aae78df6d7"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "af66194ccc7abccebf591e28145e9508"
  },
  {
    "url": "index.html",
    "revision": "a8dfbe115752f471eb9e472b518f6cee"
  },
  {
    "url": "post/1970/01/01/posts/index.html",
    "revision": "66b86ccca757d3afe4b8e629b04fcfd1"
  },
  {
    "url": "post/1970/01/01/third-post/index.html",
    "revision": "860c0928212fd04a9855663d0dc5399e"
  },
  {
    "url": "post/1970/01/01/this-is-first-post/index.html",
    "revision": "2be60715f550396ecb1e27b072f3ca45"
  },
  {
    "url": "post/1970/01/01/this-is-second-post/index.html",
    "revision": "ea72730d51d19a997f56cd2222b251ba"
  },
  {
    "url": "post/index.html",
    "revision": "5f0e4c84b5ae044223324f4a25359c06"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "17d3783140b91d115d0bc353b7f0dafb"
  },
  {
    "url": "tag/index.html",
    "revision": "5dad9f409c034177d88470bd68e81e12"
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
