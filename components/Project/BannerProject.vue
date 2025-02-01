<template>
    <section class="banner container mt-20 mb-12 lg:my-32">
        <div class="main-suptitle uppercase">{{ content?.context }}</div>
        <h1 class="main-title uppercase break-words font-heading text-balance font-bold max-w-6xl">
            {{ title }}
        </h1>
    </section>
</template>

<script setup>
const title   = computed(() => useContentStore().project.title );
const content = computed(() => useContentStore().projectContent );
</script>

<style scoped>
h1 {
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>