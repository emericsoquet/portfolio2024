<template>
    <header :class="`header md:border-bottom ${ isMenuOpen ? 'is-open' : '' }`" id="mainHeader" ref="header">
        <div class="container grid grid-flow-col justify-between items-center py-7">
            <HeaderLogo></HeaderLogo>
            <HeaderNavigation></HeaderNavigation>
        </div>
        {{ content }}
    </header>
</template>

<script setup>
import { useHeaderStore } from '~/stores/headerStore';

const header = ref(null);

// an action is used on NavigationToggle and will change the state : isMenuOpen is toggle
const headerStore = useHeaderStore();
const isMenuOpen =  computed( () => headerStore.isMenuOpen );

// detects if header is in the screen part and change the state of isHeaderVisible via an IntersectionObserver
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
});

</script>