(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{394:function(t,a,i){},440:function(t,a,i){"use strict";var n=i(394);i.n(n).a},475:function(t,a,i){"use strict";i.r(a);var n={mounted:function(){console.log(this.$pagination)},method:{},computed:{first:function(){return this.$pagination._paginationPages[0].path},last:function(){return this.$pagination._paginationPages[this.$pagination._paginationPages.length-1].path},total:function(){return this.$pagination._matchedPages.length},nowDisplaying:function(){return this.$pagination._currentPage.interval}}},e=(i(440),i(17)),s=Object(e.a)(n,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",[i("div",{staticClass:"container"},t._l(t.$pagination.pages,(function(a){return i("div",{key:a.paginationIndex,staticClass:"item"},[i("a",{attrs:{href:a.path}},[a.featuredimg?i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:a.featuredimg,alt:a.featuredimg}})]):i("div",[i("img",{attrs:{src:"https://picsum.photos/300/200.webp"}})]),t._v(" "),i("div",[i("h2",[i("b",[t._v(t._s(a.title))])]),t._v(" "),i("p",[t._v(t._s(a.readingTime.text))])])])])})),0),t._v(" "),i("div",{staticClass:"pagination"},[i("router-link",{attrs:{to:t.first,tag:"a"}},[t._v("«")]),t._v(" "),t.$pagination.hasPrev?i("router-link",{attrs:{to:t.$pagination.prevLink,tag:"a"}},[t._v("‹")]):t._e(),t._v(" "),t._l(t.$pagination._paginationPages,(function(a,n){return i("router-link",{key:a.path,class:{active:t.$route.path===a.path},attrs:{to:a.path,tag:"a"}},[t._v(t._s(n))])})),t._v(" "),t.$pagination.hasNext?i("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("›")]):t._e(),t._v(" "),i("router-link",{attrs:{to:t.last,tag:"a"}},[t._v("»")])],2),t._v(" "),i("span",[t._v(t._s(t.nowDisplaying)+" / "+t._s(t.total))]),t._v(" "),i("div",[i("ul",{attrs:{id:"default-layout"}},t._l(t.$pagination.pages,(function(a){return i("li",{key:a.path},[i("router-link",{staticClass:"page-link",attrs:{to:a.path}},[t._v(t._s(a.title))])],1)})),0),t._v(" "),i("div",{attrs:{id:"pagination"}})]),t._v(" "),i("br"),t._v("\n  "+t._s(t.nowDisplaying)+"\n  "),i("br")])}),[],!1,null,"03ee381e",null);a.default=s.exports}}]);