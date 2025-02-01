<template>
    <section    class="works__list my-10" 
                ref="worksList"
                @mouseenter="pauseScroll"
                @mouseleave="playScroll">
        <WorkItem :key="i" v-for="(item, i) in list" :work="item"></WorkItem>
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
    },
    list: {
        type: Array,
        required: true
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

watch(
    () => props.list,
    (newList) => {
        if (newList.length > 0) {
            nextTick(() => {
                const items = worksList.value.querySelectorAll('.work');
                if (items.length > 0) {
                    tl = horizontalLoop(items, {
                        repeat: -1,
                        speed: props.speed || 0.75,
                        reversed: props.reversed,
                    });
                }
            });
        }
    },
    { immediate: true }
);
</script>