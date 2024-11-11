<template>
    <section    class="works__list my-10" 
                ref="worksList"
                @mouseenter="pauseScroll"
                @mouseleave="playScroll">
        <WorkItem :key="n" v-for="n in 10"></WorkItem>
    </section>
</template>

<script setup>
import { horizontalLoop } from '~/utils/gsap/horizontalLoop';

const worksList = ref(null);
let   tl = null;

const props = defineProps({
    reversed: {
        type: Boolean,
        required: false
    }
});

const pauseScroll = () => {
    if(tl)
        tl.pause();
}
const playScroll = () => {
    if(tl) {
        tl.timeScale(props.reversed ? -0.75 : 0.75);
        tl.resume();
    }
}

onMounted( async() => {
    await nextTick();

    const items = worksList.value.querySelectorAll('.work');
    
    tl = horizontalLoop(items, {
        repeat: -1,
        speed: props.speed || 0.75,
        reversed: props.reversed,
    }); 

})
</script>