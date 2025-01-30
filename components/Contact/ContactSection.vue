<template>
    <section class="contact my-20 lg:my-36" :id="sectionID">

        <div class="container">
            <h2>
                <span class="title font-heading">{{ content?.title }}</span>
                <span class="subtitle">{{ content?.subtitle }}</span>
            </h2>
        </div>

        <ContactForm></ContactForm>

    </section>
</template>

<script setup>
const content = computed( () => useContentStore().getChoosenHome.contact );

const sectionID = computed( () => {
    if(!useContentStore().getChoosenGeneral.navigation)
        return null

    return convertFunctions().convertStringToURL(useContentStore().getChoosenGeneral?.navigation[2]);
});
</script>

<style scoped>
.contact {
    scroll-margin-top: 50px;
}
</style>