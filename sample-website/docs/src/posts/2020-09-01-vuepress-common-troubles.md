---
title: Common pitfalls with vuepress
tags:
- vuepress
- pitfalls
---

<Gallery loc="../assets" />

> VuePress is a Vue-SSR based application

# Common pitfalls with vuepress

* [ ] Adding custom redirects, implementing vue-router
* [ ] Using vuex in vuepress?
* [ ] [Multiple sidebars](https://stackoverflow.com/questions/62641721/vuepress-multiple-sidebar-dont-show-all-items)
* [ ] [Add vuetiy to vuepress?](https://stackoverflow.com/questions/52684077/how-to-add-vuetify-to-default-vuepress-theme)
* [ ] How to load all image in a directory and add them to page?
* [ ] Use `https` with devServer?
* [ ] https://github.com/vuejs/vuepress/issues/402#issuecomment-388169056
* [ ] https://github.com/vuejs/vuepress/issues/826
* [ ] [Load images using index numbers](https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working)
* [ ] How to switch layouts?
* [ ] How to use markdown slots?
* [ ] How to add classDefs on specific pages to style them differently?
* [ ] Use [Excerpt](https://vuepress.vuejs.org/theme/writing-a-theme.html#content-excerpt)


Vuepress will supply us with these important variable objects for each `.md` page to theme makers.

1. $site
   1. $site.themeConfig
2. $page
   1. $frontmatter
3. $pagination
   1. hasPrev, hasNext, Pages
4. $route, $router

Metadata will be added to `$site` from `config.js`

* [ ] themeEntry and themeConfig difference
  * themeEntry is a configuration for the theme itself, provided by VuePress
  * themeConfig user configuration for theme.
* [ ] Plugin API
  * both `.vuepress/config.js` and `theme/index/js` are plugins
  * we are applying plugins inside plugins
* [ ] Options API
* [ ] You can use `@parent-theme` to access the root path of the parent theme.
  * You can consider that '@parent-theme' stands for `node-module/@vuepress/theme-default`
* [VUE SSR](https://ssr.vuejs.org/)

::: tip VUE-SSR
In short, make sure to only access Browser / DOM APIs in beforeMount or mounted hooks.
:::

* How to make a component being served from client only?

```html
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

markdown -> Vue component -> vue compiler / vue-loader

Difference b/w `require()` and `require.resolve()`?
:   import/export modules

## Resources

* [stackoverflow vuepress](https://stackoverflow.com/questions/tagged/vuepress?sort=MostFrequent&edited=true)
* https://vuepress.vuejs.org/theme/inheritance.html#override-components

<Footer />
