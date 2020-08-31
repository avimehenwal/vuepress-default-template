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
    "revision": "8257795c58778b96f497898164e7c481"
  },
  {
    "url": "1970/01/01/this-is-first-post/index.html",
    "revision": "cdfa9c7a6c5d0eacd1e046fca5085529"
  },
  {
    "url": "1970/01/01/this-is-second-post/index.html",
    "revision": "490750b9a4d8717141dce6a9ab1a6e27"
  },
  {
    "url": "404.html",
    "revision": "3c8348ac9be6aab0efe9d770dd2904dd"
  },
  {
    "url": "am.svg",
    "revision": "a131470d08ad8b5e09dc74c0d94eb478"
  },
  {
    "url": "assets/css/0.styles.326b91ab.css",
    "revision": "358324440d4b205c60a00b6ffa9b280f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.781ddb86.js",
    "revision": "3114b55354b794eea23e27b0f3c2cdf4"
  },
  {
    "url": "assets/js/11.6ff98a1c.js",
    "revision": "e92ddb090f47f6c1c91b4b87b5ec4d4c"
  },
  {
    "url": "assets/js/12.3cc7f6e9.js",
    "revision": "70371016c006e899d4e5f68329dcf1b4"
  },
  {
    "url": "assets/js/13.197cb366.js",
    "revision": "b80d47262b403359b2cb0c218de29d56"
  },
  {
    "url": "assets/js/14.182497ec.js",
    "revision": "f2b7ef2691b7c89ba753f49e15f75345"
  },
  {
    "url": "assets/js/15.10dfc962.js",
    "revision": "903a7580b6cec16f1a207bb5fe999e1a"
  },
  {
    "url": "assets/js/16.46562b7f.js",
    "revision": "a2bf7941c14c9919aea093d3a077ab49"
  },
  {
    "url": "assets/js/17.7a4b053a.js",
    "revision": "08489fe4034965c3cd0a63783e8d2a30"
  },
  {
    "url": "assets/js/18.999ef4e3.js",
    "revision": "93a40ffc1aaf0e6b7565047f6914f6b9"
  },
  {
    "url": "assets/js/19.4e351e34.js",
    "revision": "915ea4422eacdf0096be11fc6e2200a4"
  },
  {
    "url": "assets/js/20.f2838b05.js",
    "revision": "1fa74fb95b85dd5b64ce81c705c1564f"
  },
  {
    "url": "assets/js/21.aca58181.js",
    "revision": "73c2cf3bb07aebec0ab32dd2edfe1356"
  },
  {
    "url": "assets/js/22.2e8b088a.js",
    "revision": "e11f03cd0c6bdeea1bdff03829ad462c"
  },
  {
    "url": "assets/js/23.c8c46bbc.js",
    "revision": "ab3b62e039acd1eb72b359ffe1d272d7"
  },
  {
    "url": "assets/js/24.764866d8.js",
    "revision": "738c62d8707993db9677ca4128d7c46e"
  },
  {
    "url": "assets/js/3.fabe4269.js",
    "revision": "45c29d09806c5ca6689144cc771f746b"
  },
  {
    "url": "assets/js/4.fa28bef6.js",
    "revision": "7c44a8c243699c45335f7ef56fa80761"
  },
  {
    "url": "assets/js/5.74d918b4.js",
    "revision": "5c966350c787b8f9ad7e8ff8480015c7"
  },
  {
    "url": "assets/js/6.2a71a3cb.js",
    "revision": "6fa508a1da27e03805557e592994b439"
  },
  {
    "url": "assets/js/7.50841abe.js",
    "revision": "0de206c5ea2b28d985223f9279a1f663"
  },
  {
    "url": "assets/js/8.46a9463f.js",
    "revision": "bbed4a5e7f240d43ada396d7f25011ab"
  },
  {
    "url": "assets/js/9.88b255f3.js",
    "revision": "b4130f94760b59bd9865f7e15d89e5bf"
  },
  {
    "url": "assets/js/app.09555544.js",
    "revision": "2bd1e181da2ddf71366e8a5969c424d7"
  },
  {
    "url": "assets/js/vuejs-paginate.1c0c9e5a.js",
    "revision": "c013ffad8397ff9035bb1e7f3d8d5bdb"
  },
  {
    "url": "config/index.html",
    "revision": "75f8a3fdfb85cfa5167ec7a83b30c82c"
  },
  {
    "url": "config/someconfig.html",
    "revision": "9b3555c1e189d3b94622117f47d28b30"
  },
  {
    "url": "guide/index.html",
    "revision": "c9c183401d6cd9b2d49d641d44e8a2f8"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "36a538a5aaafd615de911107b12054fb"
  },
  {
    "url": "icons/pencil-rocket.svg",
    "revision": "72c95f7d83a2ea56a5bde41f7ac80890"
  },
  {
    "url": "index.html",
    "revision": "b5f660ed150519cfa3466108d2a1f2b4"
  },
  {
    "url": "post/index.html",
    "revision": "aac3a6cacc16c67d843f884817dfab79"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "c1362266a34ec0fbecb1308ab1014607"
  },
  {
    "url": "tag/index.html",
    "revision": "4a4b7b6d26e17d51019acfea684f36bb"
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
