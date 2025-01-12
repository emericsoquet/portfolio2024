<template>
    <section class="project__summary md:mt-20">

        <div class="container">
            <div class="grid md:grid-cols-12 md:relative">
                <div class="project__cover md:order-last md:col-span-5 xl:col-span-6 md:px-5 lg:px-8" ref="coverRef">
                    <div class="cover__wrapper max-w-xl relative h-full overflow-y-clip">
                        <img src="/media/img/projects/bpp/bpp-cover.png" alt="" class=" block w-full md:sticky md:top-8" ref="imgRef">
                    </div>
                </div>
        
                <article class="summary md:col-span-7 xl:col-span-6 h-max" ref="articleRef">
                    <div class="summary__wrapper md:border-right mt-10 py-8 md:mt-0 md:pr-12 md:h-max lg:py-16">
                        <h2 class="text-3xl font-light uppercase font-body mb-5 lg:text-5xl">Summary</h2>
                        <div class="summary__content content font-sub lg:text-lg lg:leading-8">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus, nostrum animi modi cumque neque eum odio? Facere, corporis eaque consequuntur officia iste, dolorum quis soluta minus mollitia, molestiae laboriosam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt quidem obcaecati quisquam, optio quae.</p>
                        </div>
                    </div>

                    <template v-if="isDesktop">
                        <SkillsProject :skills="skills" />
                    </template>

                </article>
            </div>
        </div>

        <template v-if="!isDesktop">
            <SkillsProject :skills="skills" />
        </template>

    </section>
</template>

<script setup>

const skills = reactive([
    'WordPress', 
    'Javascript', 
    'SCSS',
    'GSAP'
]);

const isClient = ref(false);
const isDesktop = ref(null);

// references in the DOM for both columns
const articleRef = ref(null);
const imgRef = ref(null);
const coverRef = ref(null);

onMounted(() => {
    const handleResize = async () => {
        isDesktop.value = window.innerWidth >= 768;

        await nextTick();
        
        const coverHeight   = imgRef.value.getBoundingClientRect().height;
        const articleHeight = articleRef.value.getBoundingClientRect().height;

        if(isDesktop.value) {
            if (coverHeight > articleHeight) {
                if (coverRef.value.style.maxHeight !== articleHeight + 'px') {
                    coverRef.value.style.maxHeight = articleHeight + 'px';
                }
            } else {
                if (coverRef.value.style.maxHeight !== 'none') {
                    coverRef.value.style.maxHeight = 'none';
                }
            }
        }

    };

    handleResize();
    window.addEventListener('resize', handleResize);

    isClient.value = true;
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

</script>