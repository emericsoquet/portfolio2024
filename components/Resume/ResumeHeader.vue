<template>
    <article class="resume__column resume__header md:col-span-7 md:order-2 md:border-left md:border-right lg:col-span-8">
        <h3 class="text-3xl font-bold uppercase font-body mb-5">{{ content?.role }}</h3>
        <p>{{ content?.introduction }}</p>
    </article>
</template>

<script setup>
const content = computed( () => useContentStore().getChoosenHome.resume );
</script>
