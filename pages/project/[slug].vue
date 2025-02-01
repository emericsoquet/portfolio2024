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
/* onBeforeUnmount(() => {
    document.body.style.background = '';
});
onBeforeMount(() => {
    document.body.style.background = '';
}); */
</script>