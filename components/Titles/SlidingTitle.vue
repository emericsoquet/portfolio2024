<template>
    <div class="title__container title--sliding border-top border-bottom relative" ref="titleSection" :id="sectionID">
        <div class="title__wrapper" ref="titleSlider">
                <h2 class="title">{{ title }}</h2>
                <span class="title" v-for="n in 10" :key="n">{{ title }}</span>
        </div>
    </div>
</template>

<script setup>
import { horizontalLoop } from '~/utils/gsap/horizontalLoop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const title = computed( () => useContentStore().getChoosenGeneral.navigation?.[1]);

const sectionID = computed( () => {
    if(!title.value)
        return null

    return convertFunctions().convertStringToURL(title.value);
});

/* const title = ref('Works'); */
const titleSlider = ref(null);
const titleSection = ref(null);

onMounted( async () => {
    // wait for DOM elements to load
    await nextTick();

    // get all items with title 
    const items = titleSlider.value.querySelectorAll('.title');

    // call horizontalLoop function inside utils/gsap
    const tl = horizontalLoop(items, {
        repeat: -1,
        speed: 0.1
    }); 

    // set parameters for direction
    let direction = 1;
    let t;

    ScrollTrigger.create({
        trigger: titleSection.value,
        start: 'top bottom',
        end: 'bottom top',

        // when start/end is crossed, function update is executed
        onUpdate: (self) => {
            if (self.direction !== direction) {

                direction = self.direction; // change current direction with scrolling direction
                t && t.kill(); // stop the current animation

                // create new animation
                t = gsap.to(tl, {
                    duration: 0.3,
                    timeScale: self.direction
                });

            }
        }
    })

});
</script>
