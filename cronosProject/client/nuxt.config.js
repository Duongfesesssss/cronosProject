export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/vuelidate'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],




   modules : ["@nuxtjs/axios" , "@nuxtjs/auth"],


  axios: {
    baseURL : "http://localhost:8888"
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
      strategies:{
        local:{
          endpoinsts:{
            login:{
                url : "api/users/auth/login",
                method:"post",
                propertyName:"token"

            },
            user:{
              url:"api/users/auth/user",
              method:"get",
              propertyName: false
            }
          },
          tokenType:"",
          logout:false
        }
      }
  }
};
