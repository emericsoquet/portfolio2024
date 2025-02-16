// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    build: {
      transpile: ['gsap']
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
    modules: [
      '@pinia/nuxt'
    ],
    plugins: [
      '~/plugins/firebase',
      '~/plugins/recaptcha'
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
    app: {
      pageTransition: {
        name: 'fade-slide',
        mode: 'out-in',
      },
    },
    ssr: true,
    postcss: {
        plugins: {
            'tailwindcss': {},
            'autoprefixer': {},
            'postcss-nesting': {},
            'postcss-import': {},
        },
    },
    runtimeConfig: {
      public: process.env,
    },
})
