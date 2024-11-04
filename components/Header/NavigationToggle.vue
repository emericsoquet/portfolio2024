<template>
    <button class="nav__toggle flex flex-col gap-y-1.5 p-3 md:hidden"
            @click="toggleMenu"
    >
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>

<script setup>
import { useHeaderStore } from '~/stores/headerStore';

const headerStore = useHeaderStore();
// when clicked on the button, the is-open status is toggle on mobile
const toggleMenu  = headerStore.toggleMenu;
</script>