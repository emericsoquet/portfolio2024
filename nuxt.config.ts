// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
    components: [
        {
          path: '~/components',
          pathPrefix: false,
        }
      ],
    postcss: {
        plugins: {
            'tailwindcss': {},
            'autoprefixer': {},
            'postcss-nesting': {},
            'postcss-import': {},
        },
    },
})
