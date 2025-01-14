export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:finish', (context) => {
        const body = document.body;

        const routeMeta = context.route?.meta || {};
        const bodyClass = routeMeta.bodyClass || '';

        body.className = '';

        if (bodyClass) {
            body.classList.add(...bodyClass.split(' '));
        }
    });
});
