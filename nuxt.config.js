export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  router: {
    base: '/nuxt_ts_/',
  },
  generate: {
    dir: 'docs',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'public practice TypeScript',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        link: [
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>ð</text></svg>',
          },
        ],
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios-accessor.ts', '@/plugins/prism'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    '@nuxt/http',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // markdowwnnit
  markdownit: {
    injected: true, // $mdãå©ç¨ãã¦markdownãhtmlã«ã¬ã³ããªã³ã°ãã
    breaks: true, // æ¹è¡ã³ã¼ãã«å¤æãã
    html: true, // HTML ã¿ã°ãæå¹ã«ãã
    linkify: true, // URLã«ä¼¼ããã­ã¹ãããªã³ã¯ã«èªåå¤æãã
    typography: true, // è¨èªã«ä¾å­ããªãããããª ç½®æ + å¼ç¨ç¬¦ ãæå¹ã«ãã¾ãã
  },

  // generate: {
  //   async routes() {
  //     const { $content } = require('@nuxt/content')
  //     const files = await $content({ deep: true }).only(['path']).fetch()
  //     return files.map((file) => (file.path === '/index' ? '/' : file.path))
  //   },
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
