// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
 
  tailwindcss:{
    configPath: 'tailwind.config',
  },
  googleFonts:{
    display:"swap",
    families: {
      "Young Serif":true,
      Outfit:true
  },
  },
  primevue: {
    options: {
      unstyled: true
    },
  }
})
