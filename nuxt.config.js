const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Darkgel Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/iview.js', ssr: true},
    {src: '~plugins/filters.js'}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    extendRoutes(routes, resolve) {
      // nuxt 的路由生成不符合 seo 要求，因此替换 nuxt 生成的
      routes.forEach(item => {
          switch(item.name) {
            case 'article-detail':
              item.path = '/a/:id(\\d+).html';
              break;
            case 'article-archive':
              item.path = '/archive.html';
              break;
            case 'about':
              item.path = '/about.html';
              break;
            default:
                item = item;
          }
      });
      routes.push({
        name: 'home',
        path: '',
        component: resolve(__dirname, 'pages/article/index.vue')
      });
      routes.push({
        name: 'articleList',
        path: '/articles/con-p:page(\\d+).html',
        component: resolve(__dirname, 'pages/article/index.vue')
      });
      routes.push({
        name: 'articleArchivePages',
        path: '/archive/con-y:year(\\d{4})-p:page(\\d+).html',
        component: resolve(__dirname, 'pages/article/archive/index.vue')
      });
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
