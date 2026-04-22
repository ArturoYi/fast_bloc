import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
// Tailwind v4：用 @tailwindcss/vite，避免 @nuxtjs/tailwindcss 在 pnpm 下误判 v3 并错误注册 PostCSS
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
  compatibilityDate: '2025-07-15',

  vite: {
    plugins: [tailwindcss()],
  },
})
