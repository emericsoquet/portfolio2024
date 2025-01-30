<template>
    <div class="about__main md:border-left md:border-right md:grid md:grid-cols-3" :id="sectionID">
        <AboutMargin :orientation="true">{{ content?.title }}</AboutMargin>
        <AboutContent></AboutContent>
        <AboutPlaylist></AboutPlaylist>
        <AboutMargin>{{ content?.title }}</AboutMargin>
    </div>

</template>

<script setup>
const content = computed( () => useContentStore().getChoosenHome.aboutMe );

const sectionID = computed( () => {
    if(!useContentStore().getChoosenGeneral.navigation)
        return null

    return convertFunctions().convertStringToURL(useContentStore().getChoosenGeneral?.navigation[0]);
});
</script>
