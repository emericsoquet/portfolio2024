export default defineNuxtPlugin((nuxtApp) => {
    
    const runtimeConfig = useRuntimeConfig();
  
    if (process.server) {
      runtimeConfig.public.baseURL = `${nuxtApp.ssrContext.event.req.protocol}://${nuxtApp.ssrContext.event.req.headers.host}`;
    } else {
      runtimeConfig.public.baseURL = window.location.origin;
    }

});
  