<template>
    <section class="project__summary md:mt-20">

        <div class="container">
            <div class="grid md:grid-cols-12 gap-6 md:relative">
                <figure class="project__cover max-w-md md:order-last md:col-span-5 overflow-auto md:sticky md:top-0 md:h-max">
                    <img src="~/assets/media/projects/bpp/bpp-cover.png" alt="" class="">
                </figure>
        
                <article class="summary md:col-span-7">
                    <div class="summary__wrapper md:border-right mt-10 pt-8 pb-8  md:mt-0 md:pr-12 md:h-max">
                        <h2 class="text-3xl font-light uppercase font-body mb-5 lg:text-5xl">Summary</h2>
                        <div class="summary__content content">
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

onMounted(() => {
    const handleResize = () => {
        isDesktop.value = window.innerWidth >= 768;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    isClient.value = true;
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

</script>