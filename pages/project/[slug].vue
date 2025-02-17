<template>
    <main>
        <BannerProject />
        <ContentProject />
    </main>
</template>

<script setup>
const title = computed(() => useContentStore().project.title);

const route = useRoute();
const contentStore = useContentStore();
const slug = route.params.slug;

// Définition réactive du projet
const project = computed(() => contentStore.project);

// Attendre que le projet soit chargé
watchEffect(() => {
    if (slug && contentStore.projects.length > 0) {
        contentStore.fetchProjectByName(slug);
    }
});

useHead({
    title: `Projet - Emeric Soquet - Développeur front-end`,
    bodyAttrs: {
        class: 'project-page'
    }
});

</script>