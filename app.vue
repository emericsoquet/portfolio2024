<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
// stores are available without imports because of nuxt configuration with pinia
const generalStore = useGeneralStore();

// change dynamicaly the theme depending on state theme which is in generalStore
useHead({
    bodyAttrs: {
        class: computed( () => generalStore.theme )
    }
}); 

</script>
