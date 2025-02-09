<template>
    <a href="" class="accordion__item cursor-pointer flex items-center">
        <h3 class="uppercase font-heading font-semibold leading-[0.85] z-[1] w-full block py-10 px-4">{{  project.title }}</h3>
    </a>
</template>

<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});
</script>