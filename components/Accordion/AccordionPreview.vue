<template>
    <article :class="`accordion__preview work fixed top-[-150px] ml-[calc(-533px/2)] z-[-1] ${ !!activeProject ? 'visible opacity-1' : 'invisible opacity-0' }`" ref="previewRef">
        <figure class="flex items-center justify-center aspect-video rounded-lg h-[300px]">
            <img :src="`/media/img/projects/${ activeProject?.id }/cover.webp`" :alt="`${altLabel} ${activeProject?.title }`" ref="currentImg" class="absolute">
            <img src="../../public/media/img/projects/eduka/cover.webp" :alt="`${altLabel} ${activeProject?.title }`" ref="newImg" class="absolute">
        </figure>
    </article>
</template>

<script setup>
const props = defineProps({
    activeProject: {
        type: Object,
        required: false,
    }
});

const lang = computed(() => useContentStore().lang);

const altLabel = computed(() => {
    if (lang.value == 'fr') return 'Preview of the project called';
    return 'Prévisualisation du projet'
})

const previewRef = ref(null);

let cursorX = 0;
let cursorY = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

const animatePreview = (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
};

const updatePreview = () => {
    cursorX += (targetX - cursorX) * speed;
    cursorY += (targetY - cursorY) * speed;

    if (previewRef.value) {
        previewRef.value.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    }

    requestAnimationFrame(updatePreview);
};

onMounted(() => {
    window.addEventListener("mousemove", animatePreview);
    updatePreview();
});

onUnmounted(() => {
    window.removeEventListener("mousemove", animatePreview);
});
</script>