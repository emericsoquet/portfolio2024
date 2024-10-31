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
const toggleMenu  = headerStore.toggleMenu;
</script>