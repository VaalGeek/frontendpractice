// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  primevue: {
    options: {
      unstyled: true
    },
  }
})
