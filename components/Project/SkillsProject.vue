<template>
    <ul class="project__skills md:border-left md:grid md:grid-cols-2">
        <li :key="i" v-for="(skill, i) in skills"
            class="flex w-full items-center px-5 py-5 border-bottom md:border-right md:w-auto">
            <span class="font-sub font-semibold text-2xl uppercase md:text-xl md:mx-auto md:block">
                {{ skill }}
            </span>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    skills: {
        type: Array,
        required: true
    }
})
</script>