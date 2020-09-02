/**
 * used in sitmap and feeds
 */
const url = 'https://avimehenwal.github.io/vuepress-default-theme-template/'

module.exports = {
  /**
   * ANCHOR classification and taxonomy
   */
  directories: [{
    id: 'post',                     // Unique ID of current classification
    dirname: 'posts',               // Target directory
    path: '/post/',                 // Path of the `entry page` (or `list page`)
    // path: '/',
    // itemPermalink: '/post/:year/:month/:day/:slug',
    /**
     * FIXME layout doesnt seems to have any effect
     * has to be inside .vuepress/theme/layouts/IndexPost.vue
     */
    layout: 'IndexPost',
    // itemLayout: 'MyPost',
    /**
     * TODO pagination
     * layout:"Layout"
     */
    pagination: {
      lengthPerPage: 2,
      prevText: 'Prev',
      nextText: 'Next',
      // 'DirectoryPagination' || 'Layout',
      layout: 'IndexPost',
      sorter: (prev, next) => {
        const dayjs = require('../../vuepress-theme-avi/node_modules/dayjs');
        const prevTime = dayjs(prev.frontmatter.date);
        const nextTime = dayjs(next.frontmatter.date);
        return prevTime - nextTime > 0 ? -1 : 1;
      },
      // getPaginationPageUrl: function getPaginationPageUrl(index) {
      //   if (index === 0) {
      //     return indexPath
      //   }
      //   return `${indexPath}page/${index + 1}/`
      // }
    },
  },
  ],

  frontmatters: [{
    id: 'tag',         // Unique ID of current classification
    keys: ['tag'],     // Decide that the frontmatter keys will be grouped under this classification
    path: '/tag/',     // Path of the `entry page` (or `list page`)
    /**
     * FIXME uses layout:"FrontmatterKey"
     * $pagination: "(error during evaluation)"
     */
    // layout: 'Tags',    // Layout of the `entry page`
    // scopeLayout: 'Tag' // Layout of the `scope page`
  }],

  sitemap: { hostname: url },

  comment: {
    // service: 'vssue',    // vssue | disqus
    // owner: 'You',        // The owner's name of repository to store the issues and comments.
    // repo: 'Your repo',
    // clientId: 'Your clientId',
    // clientSecret: 'Your clientSecret',
    service: 'disqus',
    shortname: 'vuepress-plugin-blog',
  },

  // mailchimp
  newsletter: { endpoint: "http://eepurl.com/dlqpQX" },

  feed: { canonical_base: url },
}

/**
 * ANCHOR examples
 * https://github.com/CadeCode/vuepress-theme-2zh/blob/master/index.js
 * https://github.com/z3by/vuepress-tools/blob/master/.vuepress/config.js
 * https://github.com/vuepressjs/vuepress-theme-blog/blob/master/index.js
 */