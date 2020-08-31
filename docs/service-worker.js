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
    "revision": "9be5fb57077d187da7c697ca81d3cc65"
  },
  {
    "url": "am.svg",
    "revision": "a131470d08ad8b5e09dc74c0d94eb478"
  },
  {
    "url": "assets/css/0.styles.f7c16557.css",
    "revision": "63090ee8e64de79c6c234772763e348d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.435d5d09.js",
    "revision": "e2175e1cd0d96f8432ae65dd96715ca2"
  },
  {
    "url": "assets/js/11.35b6bb69.js",
    "revision": "cc7cf10ea1892919a6a592f9b9c914b1"
  },
  {
    "url": "assets/js/12.8af78917.js",
    "revision": "32607d9207ab974d0837ef733ae16922"
  },
  {
    "url": "assets/js/13.818b1416.js",
    "revision": "42d71e559bdcdd4c02e9f30158b5438e"
  },
  {
    "url": "assets/js/14.3618656d.js",
    "revision": "64a1ad6897d1353447a5f9fa42e9f108"
  },
  {
    "url": "assets/js/15.8c3f61cb.js",
    "revision": "908e89829bb6c379d8287a0268429238"
  },
  {
    "url": "assets/js/16.ff2b997a.js",
    "revision": "14841a8f35c79855cd4876e63d8d66fd"
  },
  {
    "url": "assets/js/17.84af63e8.js",
    "revision": "66596d2969ec5cdc25c072c66c027c55"
  },
  {
    "url": "assets/js/18.4d51164d.js",
    "revision": "df31f7869aea185afd84b1b5fa40c786"
  },
  {
    "url": "assets/js/19.1d330b9a.js",
    "revision": "011b3dea3e14a71424750ad405d76208"
  },
  {
    "url": "assets/js/2.81d80f29.js",
    "revision": "3f0184c93c3c4bdfa0b1982959545725"
  },
  {
    "url": "assets/js/20.564dab12.js",
    "revision": "140fcc483b359d3bb5070cebe18efdaf"
  },
  {
    "url": "assets/js/3.93eb8f9d.js",
    "revision": "9e4eab741feb0fe8b9c9ad1271d671a4"
  },
  {
    "url": "assets/js/4.0ae5fa1a.js",
    "revision": "57a82b00b02f50af209ecbce1e587658"
  },
  {
    "url": "assets/js/5.00fab150.js",
    "revision": "0442edd6bf90509804e25dd49f004302"
  },
  {
    "url": "assets/js/6.592d18da.js",
    "revision": "be6018796a645a635cd9b09ffc26b2d1"
  },
  {
    "url": "assets/js/7.954dd7d3.js",
    "revision": "d6692ce05ed3d68b4c67c795e387ffa7"
  },
  {
    "url": "assets/js/8.304b4568.js",
    "revision": "8e28e28a72ca79c97ece7c81f22cc688"
  },
  {
    "url": "assets/js/9.8fe26dfb.js",
    "revision": "078130f9e4fea5fc3c6b2717321dfe97"
  },
  {
    "url": "assets/js/app.2059aa1a.js",
    "revision": "e0ee34c4c27300a82fb196de31dd9245"
  },
  {
    "url": "config/index.html",
    "revision": "3b2b9ce24c6c529d2deb99e5c17272cc"
  },
  {
    "url": "config/someconfig.html",
    "revision": "6ee47bdfefc781ce70ce4fd95c037ee4"
  },
  {
    "url": "guide/index.html",
    "revision": "593361f39844b1ee2a0d58dc9c1a91f5"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "217fdbfa85aef67b06b15371373c06ab"
  },
  {
    "url": "index.html",
    "revision": "7f0bc9875fa7f2d4b5bfbd3ba73373ae"
  },
  {
    "url": "post/1970/01/01/third-post/index.html",
    "revision": "0ceeaf47b1668d3a3fa0eac697e5438a"
  },
  {
    "url": "post/1970/01/01/this-is-first-post/index.html",
    "revision": "c56e2152efd15c3670648b33df765f49"
  },
  {
    "url": "post/1970/01/01/this-is-second-post/index.html",
    "revision": "835b071b109f23f6e27d27ef02245ac1"
  },
  {
    "url": "post/index.html",
    "revision": "0237e6c3abcc60a523166ad8f8bae5d9"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "ce0aeaec4733ed7dd3ef45c167dc5a99"
  },
  {
    "url": "tag/index.html",
    "revision": "ebf426f130edb1eff2dd0e04a21e215d"
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
