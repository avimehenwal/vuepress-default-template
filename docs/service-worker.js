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
    "revision": "5d611dd0e63f1dd23e1c333c47e1e73d"
  },
  {
    "url": "am.svg",
    "revision": "a131470d08ad8b5e09dc74c0d94eb478"
  },
  {
    "url": "assets/css/0.styles.c66f8472.css",
    "revision": "0f0c25ad9858b02bb9f0efb369e0429c"
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
    "url": "assets/js/16.58f1147a.js",
    "revision": "68e0335e67e809b9da409d448a50e376"
  },
  {
    "url": "assets/js/17.0469024c.js",
    "revision": "a51c8a387e7a17f45da25659c4cb6b29"
  },
  {
    "url": "assets/js/18.64701c85.js",
    "revision": "5df5cc37da1480c84186e0e772a32115"
  },
  {
    "url": "assets/js/19.a9d04e06.js",
    "revision": "d526800e3985b649895caadf127ffe13"
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
    "url": "assets/js/app.89812f8c.js",
    "revision": "5cd4d6e0127cccaa1ebb52c9df24b680"
  },
  {
    "url": "config/index.html",
    "revision": "1f8b524e8ebbbf1c2268239579325a30"
  },
  {
    "url": "config/someconfig.html",
    "revision": "d456e6f84c407e0d2b18b6f45364325e"
  },
  {
    "url": "guide/index.html",
    "revision": "c75eda3c8f1319a896836f9c131b9ecf"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "f069bfe0a19744a228f03ea9f902e431"
  },
  {
    "url": "index.html",
    "revision": "f477081fb3706e1c6d130853dd31154b"
  },
  {
    "url": "post/1970/01/01/third-post/index.html",
    "revision": "cbecb9ec83f2fa84659c2476ef9afc7e"
  },
  {
    "url": "post/1970/01/01/this-is-first-post/index.html",
    "revision": "092c0177b02a92975d0940d2f76eb010"
  },
  {
    "url": "post/1970/01/01/this-is-second-post/index.html",
    "revision": "61d4be63ae55af54d7ca373b97ac5f60"
  },
  {
    "url": "post/index.html",
    "revision": "91e57263c47095d51571643f505d939f"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "0e089d4c411d3994263a6e367fee51e3"
  },
  {
    "url": "tag/index.html",
    "revision": "919711e28b1d7d090a6c3c4011194076"
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
