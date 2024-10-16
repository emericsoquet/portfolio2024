<template>
    <nav class="header__nav">
        <ul v-for="(link, i) in navLinks" :key="i">
            <li>
                <NuxtLink   class="nav__item" 
                            :to="link.url" >
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
        <NuxtLink class="nav__item font-bold" to="">{{ language }}</NuxtLink>
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

