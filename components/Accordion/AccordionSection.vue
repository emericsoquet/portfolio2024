<template>
    <section class="accordion my-28 lg:my-28 relative z-0">
        <div class="accordion__list">
            <AccordionItem  v-for="(item, i) in projects" 
                            :key="i" :project="item"
                            @mouseenter="handleMouseEnter(item)"
                            @mouseleave="handleMouseLeave"
            />
        </div>
        <AccordionPreview :activeProject="activeProject" />
    </section>
</template>

<script setup>
const projects = computed(() => useContentStore().projects);

const activeProject = ref(null);
const handleMouseEnter = project => {
    activeProject.value = project;
}
const handleMouseLeave = () => {
    activeProject.value = null;
}
</script>