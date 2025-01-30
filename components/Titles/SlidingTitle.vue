<template>
    <div class="title__container title--sliding border-top border-bottom relative" ref="titleSection" :id="sectionID" v-if="isInitialized">
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

const titleSlider = ref(null);
const titleSection = ref(null);
let scrollTriggerInstance = null;
let tl = null;

// wait for content and animation to load because the conflict between the two will cause an extreme speed for the animation
const isInitialized = ref(false);

const initAnimation = () => {
    if (!title.value || tl || !titleSlider.value || !titleSection.value) 
        return;

    // get all items with title 
    const items = titleSlider.value.querySelectorAll('.title');
    if (!items || items.length === 0)
        return;

    if (tl) {
        tl.clear();
        tl.kill();
        tl = null;
    }
    if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
    }

    // call horizontalLoop function inside utils/gsap
    tl = horizontalLoop(items, {
        repeat: -1,
        speed: 1
    }); 

    tl.timeScale(1);

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
                    duration: 0.6,
                    timeScale: self.direction
                });

            }
        }
    });
}

onMounted( async () => {
    // wait for DOM elements to load
    await nextTick();

    watchEffect(() => {
        if (title.value) {
            initAnimation();
            isInitialized.value = true;
        } 
    });

});

onBeforeUnmount(() => {
    if (tl && tl.isActive()) {
        tl.clear();
        tl.kill();
        tl = null;
    };

    ScrollTrigger.getAll().forEach((st) => st.kill());

    if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
    };
});
</script>
