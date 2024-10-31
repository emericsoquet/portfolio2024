<template>

    <!-- is-open slides the menu when beneath md: 768px -->
    <nav :class="`header__nav flex items-center`">

        <NavigationToggle />

        <Teleport to="#mainHeader" v-if="isMounted">
            <div class="nav__list flex flex-col border-bottom md:border-none" ref="navList" >
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
        </Teleport>

        <button class="nav__item font-bold ml-5 sm:ml-7 font-sub" to="">{{ language }}</button>

    </nav>
</template>

<script setup>

const isMounted  = ref(false);
onMounted(() => {
    isMounted.value = true;
});

const navLinks = reactive([
    { label: 'About me', url: '#'},
    { label: 'Works', url: '#'},
    { label: 'Contact', url: '#'},
]);

const language = ref('FR');

</script>

