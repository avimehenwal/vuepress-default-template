/**
 * Entry file of theme configuration
 *
 * Theme Inheritance
 * https://vuepress.vuejs.org/theme/inheritance.html#motivation
 *
 * TODO
 * [] Apply plugins
 */

/**
 * theme API
 *
 * @param {*} themeConfig precomputed user configuration of theme-default
 * @param {*} ctx plugin API context
 */
module.exports = (themeConfig, ctx) => {
  // themeConfig.sidebarDepth = 0;
  // themeConfig.sidebarDepth = themeConfig.sidebarDepth || 0

  return {
    extend: '@vuepress/theme-default',      // theme override/inheritance
    // extend: '@vuepress/theme-blog',

    devTemplate: '',
    ssrTemplate: '',
    globalLayout: '',    // set global headers/footers uses $frontmatter.layout

    // it will overide the parent theme configuration.
    plugins: require('./themePlugins'),
  }
}