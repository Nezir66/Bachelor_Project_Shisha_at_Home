export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Shisha@Home',
    script: [
      { src: "https://js.stripe.com/v3" }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/responsive.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [  
    { src: "~/plugins/localStorage.js", ssr: false },
    { src: "~/plugins/vueCarousel-3D.js", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/auth
    "@nuxtjs/auth"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "http://localhost:3000/"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Auth Configuration
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "Shisha@home/auth/login",
            method: "post",
            propertyName: "token"
          },
          logout: true,
          user: {
            url: "Shisha@home/auth/user",
            method: "get",
            propertyName: "user"
          }
        }
      }
    }
  }
}
