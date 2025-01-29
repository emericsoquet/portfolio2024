<template>
    <article class="resume__column resume__experiences md:order-4 md:col-span-7 md:border-right md:border-left md:border-top lg:col-span-8">
        <h3 class="text-3xl font-bold uppercase font-body mb-5">{{ content?.title }}</h3>
        <section class="experiences 2xl:grid 2xl:grid-cols-2 2xl:gap-6">
            <ExperienceItem v-for="(item, i) in content?.experiencesList" :key="i" :experience="item" />
        </section>
    </article>
</template>

<script setup>
const content = computed( () => useContentStore().getChoosenHome.resume?.experiences );
</script>