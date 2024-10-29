<template>
    <nav :class="`header__nav flex items-center ${ isMenuOpen ? 'is-open' : '' }`">

        <NavigationToggle :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />

        <div class="nav__list flex flex-col border-bottom md:border-none" ref="navList">
            <ul class="flex flex-col md:flex-row">
                <li v-for="(link, i) in navLinks"
                    :key="i"
                    class="nav__item">
                        <NuxtLink   :to="link.url"
                                    class="px-2 py-1 block mx-2 text-lg font-heading">
                            {{ link.label }}
                        </NuxtLink>
                </li>
            </ul>
        
        </div>

        <button class="nav__item font-bold ml-5 sm:ml-7 font-sub" to="">{{ language }}</button>

    </nav>
</template>

<script setup>

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const navLinks = reactive([
    { label: 'About me', url: '#'},
    { label: 'Works', url: '#'},
    { label: 'Contact', url: '#'},
]);

const language = ref('FR');

</script>

