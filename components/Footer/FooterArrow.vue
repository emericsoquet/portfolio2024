<template>

    <div class="footer__arrow lg:border-border aspect-square h-16 flex justify-center items-center lg:border-l-0">
        <button :class="`bg-border bg-opacity-20 aspect-square h-8 lg:h-10 block rounded-md ${isHeaderVisible ? 'is-top' : ''}`" 
                ref="topArrow" 
                @click="goTopPage">
        </button>
    </div>


</template>

<script setup>
import { useHeaderStore } from '~/stores/headerStore';

const headerStore = useHeaderStore();
const isHeaderVisible = computed(() => headerStore.isHeaderVisible);

const topArrow = ref(null);
defineExpose({ topArrow });

const goTopPage = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

</script>