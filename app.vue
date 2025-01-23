<template>
    <div v-show="isThemeLoaded">
        <div class="cursor" ref="cursorRef"></div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
// stores are available without imports because of nuxt configuration with pinia
const generalStore = useGeneralStore();
const contentStore = useContentStore();
const isThemeLoaded = computed( () => generalStore.isThemeLoaded );

onMounted( async() => {

    // change dynamically the theme depending on state theme which is in generalStore
    generalStore.initTheme();
    useHead({
        bodyAttrs: {
            class: computed( () => generalStore.theme )
        }
    }); 


    window.addEventListener('mousemove', animateCursor);
    updateCursor();

    // load all content
    await contentStore.fetchAllContent();

});

// animate cursor circle blur
let cursorX = 0;
let cursorY = 0;
let targetX = 0;
let targetY = 0;

const cursorRef = ref(null);

const animateCursor = (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
};
const updateCursor = () => {
    cursorX += (targetX - cursorX) * 0.1; // La vitesse de lissage peut être ajustée (0.1 est lent, 0.5 est rapide)
    cursorY += (targetY - cursorY) * 0.1;

    cursorRef.value.style.top = cursorY + 'px';
    cursorRef.value.style.left = cursorX + 'px';

    requestAnimationFrame(updateCursor);
};



</script>

<style>
[v-cloack] {
    display: none;
}
</style>
