/**
 * Vuepress plugins array with config
 * @vuepress/plugin-blog is seperated out due to its complexity and
 * sheer volume of config options.
 */

module.exports = [
  ['social-share'],
  ['reading-progress'],               // readingShow: false in frontmatter
  ['@vuepress/nprogress'],
  ['@vuepress/back-to-top'],
  ['@vuepress/last-updated'],
  ['vuepress-plugin-auto-sidebar', {}],
  ['@vuepress/register-components', { componentsDir: '' }],
  // See: https://github.com/francoischalifour/medium-zoom#options
  // TODO accept from config
  ['@vuepress/google-analytics', { 'ga': 'UA-iosadfiosdi' }],
  ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],
  // TODO accept from config
  ['web-monetization', { 'address': '$ilp.uphold.com/DrRw6MnEEqBB' }],
  ['vuepress-plugin-reading-time', { excludes: ['/about', '/tag/.*'] }],
  ['vuepress-plugin-mathjax', { target: 'svg', macros: { '*': '\\times' } }],
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
  ['@vuepress/blog', require('./pluginBlog')],
]