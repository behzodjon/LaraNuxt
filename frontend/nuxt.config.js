export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      pathRewrite: {
        '^/api' : '/'
        }
      }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post'},
          user: { url: '/auth/user', method: 'get', propertyName: 'user' }
        },
        redirect_uri:'/'
      }
    },
    localStorage: false
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:8000',
  credentials: true
},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
