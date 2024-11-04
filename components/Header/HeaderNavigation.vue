<template>

    <!-- is-open slides the menu when beneath md: 768px -->
    <nav :class="`header__nav flex items-center`">

        <NavigationToggle />

        <!-- teleport serves to switch the navigation outside the nav for mobile -->
        <Teleport to="#mainHeader" v-if="isMounted && shouldTeleport">
            <NavigationList></NavigationList>
        </Teleport>

        <!-- but the navigation is inside when above md and ignores teleport -->
        <template v-else>
            <NavigationList></NavigationList>
        </template>

        <button class="nav__item font-bold ml-5 sm:ml-7 font-sub" to="">{{ language }}</button>

    </nav>
</template>

<script setup>

const language = ref('FR');

// teleport only works when the app is mounted because the screen size is checked
const shouldTeleport = ref(false);
const checkScreenSize = () => {
    shouldTeleport.value = window.innerWidth <= 768;
}

const isMounted  = ref(false);
onMounted(() => {
    isMounted.value = true;
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
})

</script>

