<template>
    <div class="title__container title--sliding border-top border-bottom relative">
        <div class="title__wrapper" ref="titleSlider">
                <h2 class="title">{{ title }}</h2>
                <span class="title" v-for="n in 10" :key="n">{{ title }}</span>
        </div>
    </div>
</template>

<script setup>
import { horizontalLoop } from '~/utils/gsap/horizontalLoop';
import { gsap } from 'gsap';

const title = ref('Works');
const titleSlider = ref(null);

onMounted( async () => {
    // wait for DOM elements to load
    await nextTick();

    // get all items with title 
    const items = titleSlider.value.querySelectorAll('.title');

    // call horizontalLoop function inside utils/gsap
    const tl = horizontalLoop(items, {
        repeat: -1,
        speed: 1.5
    }); 

});
</script>
