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

/* const reversedWorksList = computed(() => {
    const middleIndex = Math.ceil(works.value.length / 2);
    return works.value.slice(0, middleIndex);
});

const worksList = computed(() => {
    const middleIndex = Math.ceil(works.value.length / 2);
    return works.value.slice(middleIndex);
}); */
</script>

