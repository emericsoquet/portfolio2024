<template>
    <header :class="`header md:border-bottom ${ isMenuOpen ? 'is-open' : '' }`" id="mainHeader">
        <div class="container grid grid-flow-col justify-between items-center py-7">
            <HeaderLogo></HeaderLogo>
            <HeaderNavigation></HeaderNavigation>
        </div>
    </header>
</template>

<script setup>
import { useHeaderStore } from '~/stores/headerStore';

const headerStore = useHeaderStore();
const isMenuOpen =  computed( () => headerStore.isMenuOpen );
</script>