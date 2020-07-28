
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 4000 // default: 3000
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2169D0' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios-accessor'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy', // 引入代理模块
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],
  // 请求代理配置
  proxy: {
    '/cjj-nuxt': {
      target: 'https://mock.yonyoucloud.com/mock/12598/cjj-nuxt',
      changeOrigin: true,
      pathRewrite: {
        '^/cjj-nuxt': '',
        changeOrigin: true
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true, // 开启代理
    prefix: '/cjj-nuxt',
    credential: true
  },
  // 当您需要在页面中注入一些变量和mixin而不必每次都导入它们时，这非常有用
  // 详见文档 https://zh.nuxtjs.org/api/configuration-build/#styleresources
  styleResources: {
    scss: '@/assets/styles/base-variables.scss'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/]
  },
  router: {
    middleware: 'auth',
    scrollBehavior () {
      return { x: 0, y: 0 }
    }
  }
}
