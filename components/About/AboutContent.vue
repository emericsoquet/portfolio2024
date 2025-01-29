<template>
<article class="about__content py-10 md:px-5 md:pb-32 md:pt-16 md:col-span-2 lg:px-8">
    <h2 class="title lowercase mb-5">{{ content?.title }}</h2>
    <p class="font-sub text-lg leading-relaxed mb-10">
        {{ content?.description }}
    </p>

    <FunctionButton :action="openResume">{{ content?.button }}</FunctionButton>

</article>
</template>

<script setup>
import { useResumeStore } from '~/stores/resumeStore';
const store = useResumeStore();
const openResume = () => {
    store.toggleResume();
}

const content = computed( () => useContentStore().getChoosenHome.aboutMe );
</script>