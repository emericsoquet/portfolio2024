<template>
    <div class="about__margin hidden md:block" ref="container">
        <span class="uppercase block" ref="text"><slot></slot></span>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
    orientation: {
        type: Boolean,
        required: false,
        default: false,
    }
});

const container = ref(null);
const text      = ref(null);

onMounted( async () => {

    await nextTick();

    let direction = props.orientation ? 1 : -1;
    let speed = 50;

    gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 5,
        }
    })
    .fromTo(text.value, {
        yPercent: -speed * direction,
        ease: 'none'
    }, {
        yPercent: speed * direction,
        ease: 'none'
    }); 

})


</script>