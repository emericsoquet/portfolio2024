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

watchEffect(async () => {
    if (props.list.length > 0 && worksList.value) {
        await nextTick(); // Attendre que le DOM soit mis à jour

        const items = worksList.value.querySelectorAll('.work');
        if (items.length > 0) {
            if (tl) tl.kill(); // Nettoyer l'ancienne animation si elle existe

            tl = horizontalLoop(items, {
                repeat: -1,
                speed: props.speed,
                reversed: props.reversed,
            });
        }
    }
});
</script>