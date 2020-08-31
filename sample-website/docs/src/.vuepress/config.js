const { description, name } = require('../../package')

module.exports = {
  /**
   * ANCHOR vuepress config * https://vuepress.vuejs.org/config/
   */
  base: '/vuepress-default-theme-template/',            // gh pages
  title: name,
  description: description,
  // TODO: could add SEO and seperate out like navigation menu
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  host: '0.0.0.0',
  port: '8080',
  // temp: '/path/to/@vuepress/core/.temp',
  dest: '../../docs',                          // github pages
  locales: null,
  shouldPrefetch: () => true,
  // vuepress dev docs --no-cache
  cache: true,
  extraWatchFiles: [
    '.vuepress/en-navigation.js',
  ],
  /**
   * ANCHOR add external theme
   */
  theme: undefined,
  themeConfig: {},
  // .vuepress/theme/index.js
  // extend: '@vuepress/theme-default',


  /**
   * ANCHOR theme config
   * https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config
   */
  themeConfig: {
    logo: '/am.svg',                       // navbar logo
    lastUpdated: true,                                  // string | boolean
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,

    /**
     * ANCHOR repo setting
     * https://vuepress.vuejs.org/theme/default-theme-config.html#git-repository-and-edit-links
     */
    repo: 'avimehenwal/fan-gallery',
    editLinks: true,
    // editLinkText: '',
    docsDir: 'docs',


    // ANCHOR navbar settings
    displayAllHeaders: true,
    activeHeaderLinks: true,
    // navbar: false,
    nav: require('./en-navigation'),
    // ANCHOR search box setting
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Search...',

    // ANCHOR sidebar settings
    sidebar: 'auto',
    // STUB manually set sidebar
    // sidebar: {
    //   '/guide/': [ { title: 'Guide', collapsable: true, children: [ '', 'using-vue', ] } ],
    //   '/config/': [ { title: 'Config', collapsable: true, children: [ '', 'someconfig', ] } ],
    // }
  },

  markdown: {
    /**
    * ANCHOR markdown builtin
    * https://vuepress.vuejs.org/guide/markdown.html#line-numbers
    */
    linkify: true,                // convert markdown link texts to links
    lineNumbers: true,
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' },
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    toc: { includeLevel: [2, 3] },

    /**
     * ANCHOR markdown external plugins
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


  /**
   * ANCHOR Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['social-share'],
    ['reading-progress'],               // readingShow: false in frontmatter
    ['@vuepress/nprogress'],
    ['@vuepress/back-to-top'],
    ['@vuepress/last-updated'],
    ['vuepress-plugin-auto-sidebar', {}],
    ['@vuepress/register-components', { componentsDir: '' }],
    // See: https://github.com/francoischalifour/medium-zoom#options
    ['@vuepress/google-analytics', { 'ga': 'UA-iosadfiosdi' }],
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],
    ['web-monetization', { 'address': '$ilp.uphold.com/DrRw6MnEEqBB' }],
    ['vuepress-plugin-reading-time', { excludes: ['/about', '/tag/.*'] }],
    ['vuepress-plugin-mathjax', { target: 'svg', macros: { '*': '\\times'} }],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content :not(a) > img',
      options: { margin: 16 }
    }],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/search', { searchMaxSuggestions: 10, searchHotkeys: ['s', '/'] }],
    ['vuepress-plugin-git-log', {
        additionalArgs: '--no-merge',
        onlyFirstAndLastCommit: true,
    }],
    ['vuepress-plugin-code-copy', {
        selector: 'div[class*="language-"] pre',
        align: 'top',
        color: '#27b1ff',
        backgroundTransition: true,
        backgroundColor: '#0075b8',
        successText: 'Copied!'
    }],

      /**
     * ANCHOR plugn containers
     */
    ['vuepress-plugin-container', { type: 'right', defaultTitle: '', }],
    ['vuepress-plugin-container', {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
    }],

    // https://github.com/drand/website/tree/master/docs/.vuepress
    ['@vuepress/blog', require('./pluginBlog') ],
  ],
}

