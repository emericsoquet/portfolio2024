<template>
    <NuxtLink to="/" class="header__logo flex items-center">
        <figure class="header__icon w-14 md:w-16 rounded">
            <img    src="~/assets/media/logo/emeric-soquet.webp" 
                    :alt="content?.header?.logoAlt"
                    class="aspect-square">
        </figure>
        <div class="ml-6 font-heading text-xl">{{ shared?.header?.logoTitle }}</div>
    </NuxtLink>
</template>

<script setup>
const shared = computed( () => ( useContentStore().getSharedGeneral ));
const content = computed( () => ( useContentStore().getChoosenGeneral ));
</script>