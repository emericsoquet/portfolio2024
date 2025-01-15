<template>
    <article class="chapter my-20 relative md:grid md:grid-cols-12 lg:my-24">
        <div class="chapter__content md:col-span-7 xl:col-span-6 lg:pr-16 h-max">
            <h2 class="text-3xl font-light uppercase font-body mb-5 lg:text-5xl">{{ title }}</h2>
            <div v-html="chapter.content"></div>
        </div>
        <figure class="chapter__img h-max md:col-span-5 xl:col-span-6 sticky top-8 md:mx-5 lg:mx-8 my-10 md:my-0 rounded max-w-xl" v-if="chapter.img">
            <img :src="chapter.img" :alt="chapter.alt" class="block w-full">
        </figure>
    </article>
</template>

<script setup>
const props = defineProps({
    chapter: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

</script>

