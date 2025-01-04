// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
    modules: [
      '@pinia/nuxt'
    ],
    imports: {
      autoImport: true,
      dirs: [
        'stores'
      ]
    },
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
    runtimeConfig: {
      clientID: process.env.CLIENT_ID || 'default_client_id',
      public: {
        baseURL: '',
      },
    },
})
