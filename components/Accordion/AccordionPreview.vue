<template>
    <article :class="`accordion__preview work fixed top-[-150px] ml-[calc(-533px/2)] z-[-1] ${ !!activeProject ? 'visible opacity-1' : 'invisible opacity-0' }`" ref="previewRef">
        <figure class="flex items-center justify-center aspect-video rounded-lg h-[300px]">
            <img 
                :src="activeProject ? `/media/img/projects/${activeProject.id}/cover.webp` : ''"
                :alt="activeProject ? `${altLabel} ${activeProject.title}` : ''"
                ref="newImg"
                class="absolute"
            />
            <img 
                v-show="previousProject"
                :src="previousProject ? `/media/img/projects/${previousProject.id}/cover.webp` : ''"
                :alt="previousProject ? `${altLabel} ${previousProject.title}` : ''"
                ref="currentImg"
                class="absolute"
            />
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
});

const previewRef = ref(null);
const previousProject = ref(null);
const currentImg = ref(null);
const newImg = ref(null);
const previousIndex = ref(null);

watch(() =>
    props.activeProject,
    async (newProject, oldProject) => {
        if (!oldProject || !currentImg.value) return;

        await nextTick();

        // reinitialize position before any transition playing
        currentImg.value.style.transition = 'none'; 
        currentImg.value.style.transform = 'translateY(0px)'; 

        previousProject.value = oldProject;

        await nextTick();

        const direction = oldProject?.key > previousIndex.value ? '-1' : '1';
        requestAnimationFrame(() => {
            currentImg.value.style.transition = 'transform 0.3s ease-out';
            currentImg.value.style.transform = `translateY(${direction * 100}%)`;
        });

        previousIndex.value = oldProject?.key;
    }
);

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

<style scoped>
img {
    transition: all .5s;
}
</style>