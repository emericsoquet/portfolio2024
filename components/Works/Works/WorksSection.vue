<template>
    <section class="works">
        <SlidingTitle></SlidingTitle>

        <article class="works__slider">
            <WorksList :reversed="true" :list="works"></WorksList>
            <WorksList :list="works"></WorksList>
        </article>

    </section>
</template>

<script setup>
const works = computed(() => useContentStore().projects);
</script>

