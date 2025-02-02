<template>
    <main>
        <BannerProject />
        <ContentProject />
    </main>
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: 'project-page'
    }
});

const slug    = useRoute().params.slug;
const project = computed(() => useContentStore().projects);

watchEffect(() => {
    if (slug && project.value.length > 0)
        useContentStore().fetchProjectByName(slug);
});

</script>