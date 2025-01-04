<template>
    <section :class="`resume ${isOpen ? 'is-active' : ''}`">

        <div class="container">
            <div class="resume__grid md:grid md:grid-cols-12">
                <ResumeHeader />
                <ResumeContact />
                <ResumeExperiences />
                <ResumeColumn />
            </div>
        </div>

    </section>
</template>

<script setup>
import { useResumeStore } from '~/stores/resumeStore';
const store = useResumeStore();

const isOpen = computed(() => store.isOpen);
</script>