<template>
    <div class="about__main md:border-left md:border-right md:grid md:grid-cols-3">
        <AboutMargin :orientation="true">{{ content?.title }}</AboutMargin>
        <AboutContent></AboutContent>
        <AboutPlaylist></AboutPlaylist>
        <AboutMargin>{{ content?.title }}</AboutMargin>
    </div>
</template>

<script setup>
const content = computed( () => useContentStore().getChoosenHome.aboutMe );
</script>
