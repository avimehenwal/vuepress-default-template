const { description, name } = require.resolve('../../package')
const { chainWebpack, configureWebpack } = require.resolve('./webpack.config')

// global node package
if (process.env.VUEPRESS_BASE) {
  console.log('VUEPRESS_BASE = ' + process.env.VUEPRESS_BASE);
} else {
  console.log('VUEPRESS_BASE = /');
}

/**
 * ANCHOR vuepress: website config
 * https://vuepress.vuejs.org/config/
 *
 * FIXME Error: Cannot find module '/manifest/client.json'
 * https://github.com/vuejs/vuepress/issues/2194
 */
module.exports = {
  // https://github.com/vuejs/vuepress/issues/560#issuecomment-395775721
  base: process.env.VUEPRESS_BASE || '/',
  chainWebpack,
  configureWebpack,
  title: name,
  description: description,
  // TODO: could add SEO tags and modularize
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  host: '0.0.0.0',
  port: '8080',
  // temp: '/path/to/@vuepress/core/.temp',
  dest: '../docs',                          // @root
  locales: null,
  shouldPrefetch: () => true,
  cache: true,                              // vuepress dev docs --no-cache
  extraWatchFiles: [
    '.vuepress/en-navigation.js',
    '.vuepress/webpack.config.js'
  ],

  /**
   * ANCHOR vuepress: themeConfig
   * https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config
   */
  theme: require.resolve('../../../'),
  themeConfig: {
    logo: '/am.svg',                                    // navbar logo
    lastUpdated: true,                                  // string | boolean
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,

    /**
     * ANCHOR themeConfig: repo setting
     * https://vuepress.vuejs.org/theme/default-theme-config.html#git-repository-and-edit-links
     */
    repo: 'avimehenwal/fan-gallery',
    editLinks: true,
    // editLinkText: '',
    docsDir: 'docs',

    // ANCHOR themeConfig: navbar settings
    displayAllHeaders: true,
    activeHeaderLinks: true,
    // navbar: false,
    nav: require('./en-navigation'),

    // ANCHOR themeConfig: search box setting
    // search: true,
    // searchMaxSuggestions: 10,
    // searchPlaceholder: 'Search...',

    // ANCHOR themeConfig: sidebar settings
    sidebar: 'auto',
    // STUB manually set sidebar
    // sidebar: {
    //   '/guide/': [ { title: 'Guide', collapsable: true, children: [ '', 'using-vue', ] } ],
    //   '/config/': [ { title: 'Config', collapsable: true, children: [ '', 'someconfig', ] } ],
    // }
  },

  markdown: {
    /**
    * ANCHOR vuepress: markdown builtin
    * https://vuepress.vuejs.org/guide/markdown.html#line-numbers
    */
    linkify: true,                // convert markdown link texts to links
    lineNumbers: true,
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    toc: { includeLevel: [2, 3] },

    /**
     * ANCHOR vuepress: markdown external plugins
     */
    plugins: [
      'markdown-it-container',
      'markdown-it-footnote',
      'markdown-it-deflist',
      'markdown-it-imsize',
      'markdown-it-emoji',
      'markdown-it-video',
      'markdown-it-todo',
      'markdown-it-abbr',
      'markdown-it-mark',
      'markdown-it-sup',
      'markdown-it-sub',
      'markdown-it-ins',
    ]
  },
}

