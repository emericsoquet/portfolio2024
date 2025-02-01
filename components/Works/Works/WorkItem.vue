<template>
    <NuxtLink :to="`/project/${work?.id}`" class="work px-3">
        <article class="flex items-center justify-center aspect-video rounded-lg">
            <h3 class="text-3xl font-bold uppercase font-body opacity-0">{{ work?.title }}</h3>
            <img :src="`/media/img/projects/${work?.id}/cover.webp`" alt="">
        </article>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    work: {
        type: Object,
        required: true
    }
});
</script>