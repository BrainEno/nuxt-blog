export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Roller",
    htmlAttrs: {
      lang: "zh",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/svg",
    "@nuxtjs/color-mode",
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/apollo"],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://localhost:4000/graphql",
      },
      // alternativeClient: {
      //   // required
      //   httpEndpoint: "http://localhost:4000",

      //   // override HTTP endpoint in browser only
      //   browserHttpEndpoint: "/graphql",

      //   // See https://www.apollographql.com/docs/link/links/http.html#options
      //   httpLinkOptions: {
      //     credentials: "same-origin",
      //   },

      //   // You can use `wss` for secure connection (recommended in production)
      //   // Use `null` to disable subscriptions
      //   wsEndpoint: "ws://localhost:4000",

      //   // LocalStorage token
      //   tokenName: "apollo-token",

      //   // Enable Automatic Query persisting with Apollo Engine
      //   persisting: false,

      //   // Use websockets for everything (no HTTP)
      //   // You need to pass a `wsEndpoint` for this to work
      //   websocketsOnly: false,
      // },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
  },
}
