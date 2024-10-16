<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>

useHead({
    bodyAttrs: {
        class: computed( () => { return 'amethyst'; })
    }
}); 

</script>
