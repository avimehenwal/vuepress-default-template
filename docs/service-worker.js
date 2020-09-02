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
    "revision": "e9a92fe319aa369903d200f3c7a4b947"
  },
  {
    "url": "1970/01/01/this-is-first-post/index.html",
    "revision": "ba6306271e2a63338eda6e7ac286a56d"
  },
  {
    "url": "1970/01/01/this-is-second-post/index.html",
    "revision": "51fd3a7a86f89adb2740b900c8d75bcf"
  },
  {
    "url": "2020/09/01/one-more-post/index.html",
    "revision": "40190d9784b502c3e28a37317b1238cd"
  },
  {
    "url": "2020/09/01/vuepress-common-troubles/index.html",
    "revision": "d401e4ee3773a4befc9219aee9adfdfc"
  },
  {
    "url": "404.html",
    "revision": "8f655b6d4aeb0c10df6c75a81f74b969"
  },
  {
    "url": "am.svg",
    "revision": "a131470d08ad8b5e09dc74c0d94eb478"
  },
  {
    "url": "assets/css/0.styles.ca8d0aba.css",
    "revision": "082467fcc69ab5e733e8c5a4364ceb68"
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
    "url": "assets/js/10.e05e2454.js",
    "revision": "e7ae85f643807ccc16ef24980b7509c1"
  },
  {
    "url": "assets/js/11.733d964d.js",
    "revision": "c02ecb5125fde53fa98ce1c09abfdd85"
  },
  {
    "url": "assets/js/12.b58e83c6.js",
    "revision": "1428960b397ef8b30a1ac1b3a9f6745c"
  },
  {
    "url": "assets/js/13.83896be6.js",
    "revision": "73d0aecffee8917566e54f7e47de38d6"
  },
  {
    "url": "assets/js/14.10022a6d.js",
    "revision": "a99c0f0685c79c6472d2696962c6f323"
  },
  {
    "url": "assets/js/15.6a1ffc30.js",
    "revision": "dbc794679ef8ae7d9491fa2d57526890"
  },
  {
    "url": "assets/js/16.9ac477e1.js",
    "revision": "14a62cbd2ff2694e5f7eac6396899b4b"
  },
  {
    "url": "assets/js/17.355f6a26.js",
    "revision": "e6d627e965ff79f0454731abe717d315"
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
    "url": "assets/js/21.04ede393.js",
    "revision": "ef60a7beb60de3b22def07556aa94184"
  },
  {
    "url": "assets/js/22.b1435b0e.js",
    "revision": "d39ee44ac4bf823b50b6c70644a50d1e"
  },
  {
    "url": "assets/js/23.85901db9.js",
    "revision": "a2e17e80c70c77b10a7f7ebdcd0a0976"
  },
  {
    "url": "assets/js/24.56ed1f95.js",
    "revision": "74c08a494f24830c8e20e6022d4667c4"
  },
  {
    "url": "assets/js/25.8aa7af5b.js",
    "revision": "9a97114d9221c30e3790f1d31a929742"
  },
  {
    "url": "assets/js/26.c6378cb1.js",
    "revision": "752f3b74a0354b8e0d3ed20a7b608cdd"
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
    "url": "assets/js/5.d776ebf5.js",
    "revision": "4b3f772388bb3fa4e3fe958f2e232353"
  },
  {
    "url": "assets/js/6.f994665c.js",
    "revision": "3337212903d32a4b69dfa42ee47a6762"
  },
  {
    "url": "assets/js/7.de643d68.js",
    "revision": "86413f05005d18dd914690ce83d32b80"
  },
  {
    "url": "assets/js/8.64e9063b.js",
    "revision": "c234a7cd8887f82dbe22fb3e76b63494"
  },
  {
    "url": "assets/js/9.1545b230.js",
    "revision": "dd5670aa73dab7a4e38a4b27cfd0858e"
  },
  {
    "url": "assets/js/app.e02880fc.js",
    "revision": "e1783c2d8effdfbe7f2106f53972473e"
  },
  {
    "url": "assets/js/styles.ca8d0aba.js",
    "revision": "ef4d30f7993edcfd5514913b3d3d8b98"
  },
  {
    "url": "assets/js/vuejs-paginate.f0af481b.js",
    "revision": "d484a2d9a95f110478a40f9f1feba10c"
  },
  {
    "url": "config/index.html",
    "revision": "5a54335af8eea10d09a140417c88c02d"
  },
  {
    "url": "config/someconfig.html",
    "revision": "9004199bbb86868b9d757ec9619cce11"
  },
  {
    "url": "guide/index.html",
    "revision": "98e928aef5f8255aaa94cfe5e3d45c9e"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "766ce53583257212a661844dd866f0a7"
  },
  {
    "url": "icons/pencil-rocket.svg",
    "revision": "72c95f7d83a2ea56a5bde41f7ac80890"
  },
  {
    "url": "index.html",
    "revision": "d5ded759b0e878a96230d64a98de01fe"
  },
  {
    "url": "post/index.html",
    "revision": "dda6cbffc05e09fe810eace27b9a4564"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "da4f31473f9df1987b0121725adbadb3"
  },
  {
    "url": "post/page/3/index.html",
    "revision": "625ab2891c303697ec89506af4a3bb22"
  },
  {
    "url": "tag/index.html",
    "revision": "561e724664cdbfc9fbc2d9834e2e3032"
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
