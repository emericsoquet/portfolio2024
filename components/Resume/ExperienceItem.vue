<template>
    <article class="experience mb-8 2xl:mb-0">

        <header>
            <h4 class="font-heading text-2xl font-medium pr-5">{{ experience.title }}</h4>
            <p class="font-sub text-xl font-semibold uppercase">{{ experience.date }}</p>
        </header>

        <p class="font-sub text-lg">{{ experience.company }}</p>

        <ul class="mt-5 mb-5 list-disc ml-3">
            <li v-for="(item, i) in experience.tasks" :key="i" class="leading-5 my-2 font-light">
                {{ item }}
            </li>
        </ul>

    </article>
</template>

<script setup>
const props = defineProps({
    experience: {
        type: Object,
        required: true
    }
})
</script>