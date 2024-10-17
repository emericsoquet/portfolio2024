<template>
    <nav class="header__nav flex">

        <ul class="flex">
            <li v-for="(link, i) in navLinks"
                :key="i"
                class="nav__item">
                    <NuxtLink   :to="link.url"
                                class="px-2 mx-2 font-heading">
                        {{ link.label }}
                    </NuxtLink>
            </li>
        </ul>
        
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

