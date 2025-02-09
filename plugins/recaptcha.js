import { defineNuxtPlugin } from '#app'
import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Lek1tEqAAAAAJLD52I6LZ-pQJqTGfFb9HTR3rrF',
        loaderOptions: {
            autoHideBadge: true,
        },
    });
});