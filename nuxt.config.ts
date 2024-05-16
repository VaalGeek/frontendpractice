// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  googleFonts:{
    display:"swap",
    families: {
      "Young Serif":{
        wght:[400]
      },
      'Outfit': [160],
  },
  },
  primevue: {
    options: {
      unstyled: true
    },
  }
})
