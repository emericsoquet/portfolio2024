<template>
    <header :class="`header md:border-bottom ${ isMenuOpen ? 'is-open' : '' }`" id="mainHeader" ref="header">
        <div class="container grid grid-flow-col justify-between items-center py-7">
            <HeaderLogo></HeaderLogo>
            <HeaderNavigation></HeaderNavigation>
        </div>
    </header>
</template>

<script setup>
import { useHeaderStore } from '~/stores/headerStore';

const header = ref(null);

const headerStore = useHeaderStore();
const isMenuOpen =  computed( () => headerStore.isMenuOpen );

onMounted( () => {
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach( entry => {
                headerStore.setHeaderVisibility(entry.isIntersecting);
            })
        }, { threshold: 0 }
    );

    if(header.value)
        obs.observe(header.value);
})
</script>