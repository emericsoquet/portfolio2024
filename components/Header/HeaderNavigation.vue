<template>
    <nav class="header__nav">
        <NuxtLink   v-for="(link, i) in navLinks"
                    :key="i"
                    class="nav__item px-2 mx-2 font-heading" 
                    :to="link.url" >
            {{ link.label }}
        </NuxtLink>
        <button class="nav__item font-bold ml-7 font-sub" to="">{{ language }}</button>
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

