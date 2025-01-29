<template>
    <article class="education mb-5">
        <h4 class="font-heading text-2xl font-medium pr-5">{{ education.diploma }}</h4>
        <p class="font-sub text-lg">{{ education.school }}, {{ education.startingYear }} - {{ education.endingYear }}</p>
    </article>
</template>

<script setup>
const props = defineProps({
    education: {
        type: Object,
        required: true
    }
})
</script>