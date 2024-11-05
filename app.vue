<template>
    <div v-show="isThemeLoaded">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
// stores are available without imports because of nuxt configuration with pinia
const generalStore = useGeneralStore();
const isThemeLoaded = computed( () => generalStore.isThemeLoaded )

// change dynamically the theme depending on state theme which is in generalStore
onMounted(() => {
    generalStore.initTheme();
    useHead({
        bodyAttrs: {
            class: computed( () => generalStore.theme )
        }
    }); 
});

</script>

<style>
[v-cloack] {
    display: none;
}
</style>
