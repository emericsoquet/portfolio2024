<template>
    <section class="accordion my-28 lg:my-28 relative z-0">
        <div class="accordion__list">
            <AccordionItem  v-for="(item, i) in sortedProjects" 
                            :key="i" :project="item"
                            @mouseenter.stop="handleMouseEnter(item)"
                            @mouseleave.stop="handleMouseLeave"
            />
        </div>
        <AccordionPreview :activeProject="activeProject" />
    </section>
</template>

<script setup>
const projects = computed(() => useContentStore().projects);
const sortedProjects = computed(() => {
    if (!projects.value) return {};

    return [...projects.value]
        .sort((a, b) => b.date - a.date)
        .map((item, i) => ({ key: i, ...item }));
});

const activeProject = ref(null);

const handleMouseEnter = (project) => {
    activeProject.value = project;
}
const handleMouseLeave = () => {
    activeProject.value = null;
}
</script>