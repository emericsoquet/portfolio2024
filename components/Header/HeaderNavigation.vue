<template>
    <nav class="header__nav">
        <NuxtLink   v-for="(link, i) in navLinks"
                    :key="i"
                    class="nav__item px-2 mx-2" 
                    :to="link.url" >
            {{ link.label }}
        </NuxtLink>
        <NuxtLink class="nav__item font-bold ml-3" to="">{{ language }}</NuxtLink>
    </nav>
</template>

<script setup>

const navLinks = reactive([
    { label: 'About me', url: '#'},
    { label: 'Works', url: '#'},
    { label: 'Contact', url: '#'},
]);

const language = ref('FR');

</script>

