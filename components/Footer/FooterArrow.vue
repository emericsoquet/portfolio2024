<template>

    <div class="footer__arrow  aspect-square h-16 flex justify-center items-center lg:border-l-0">
        <button :class="`bg-border bg-opacity-20 aspect-square h-8 lg:h-10 block rounded-md ${isHeaderVisible ? 'is-top' : ''}`" 
                ref="topArrow" 
                @click="goTopPage">
        </button>
    </div>


</template>

<script setup>
import { useHeaderStore } from '~/stores/headerStore';

// get header store to know if header is outside of the visible part screen
const headerStore = useHeaderStore();
// if its inside, will mask the arrow button
const isHeaderVisible = computed(() => headerStore.isHeaderVisible);

// create a ref for MainFooter parent
const topArrow = ref(null);
defineExpose({ topArrow });

// when clicked, this function aims to get back to top page
const goTopPage = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

</script>