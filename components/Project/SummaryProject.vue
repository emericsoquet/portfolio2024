<template>
    <section class="project__summary md:mt-20">

        <div class="container">
            <div class="grid md:grid-cols-12 md:relative">
                <div class="project__cover md:order-last md:col-span-5 xl:col-span-6 md:px-5 lg:px-8" ref="coverRef">
                    <div class="cover__wrapper max-w-xl relative h-full overflow-y-clip" v-if="isReady">
                        <img :src="`/media/img/projects/${project?.id}/featured.webp`" :alt="alt" class=" block w-full md:sticky md:top-8" ref="imgRef" @load="handleResize">
                    </div>
                </div>
        
                <article class="summary md:col-span-7 xl:col-span-6 h-max" ref="articleRef">
                    <div class="summary__wrapper md:border-right mt-10 py-8 md:mt-0 md:pr-12 md:h-max lg:py-16">
                        <h2 class="text-3xl font-light uppercase font-body mb-10 lg:text-5xl">{{ title }}</h2>
                        <div class="summary__content content font-sub text-lg lg:text-xl lg:leading-8">
                            {{ content?.summary }}
                        </div>

                        <NetworksList :label="linksLabel" extraClasses="hero__networks summary__networks mt-16 py-0" :networksList="networksList" />
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
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import LinkedInLogo from '~/assets/media/logo/linkedin-logo.svg';
import GitHubLogo from '~/assets/media/logo/github-logo.svg';
import LinkIcon from '~/assets/media/icons/icon-link.svg';

gsap.registerPlugin(ScrollTrigger);

const lang    = computed(() => useContentStore().lang);
const content = computed(() => useContentStore().projectContent);
const project = computed(() => useContentStore().project);

const title = computed(() => {
    if (!lang.value || lang.value == 'en') return 'Summary';
    return 'Résumé';
});
const linksLabel = computed(() => {
    if (!lang.value || lang.value == 'en') return 'See project';
    return 'Voir le projet';
});
const alt = computed(() => {
    if (!lang.value || lang.value == 'en') return `Brief navigation on the project`;
    return 'Navigation rapide sur le projet';
})

const skills = reactive([
    'WordPress', 
    'Javascript', 
    'SCSS',
    'GSAP'
]);

const isClient = ref(false);
const isDesktop = ref(null);
const isReady = computed(() => {
    return (!project.value || !content.value) ? false : true;
})

// references in the DOM for both columns
const articleRef = ref(null);
const imgRef = ref(null);
const coverRef = ref(null);

const handleResize = async () => {
    isDesktop.value = window.innerWidth >= 768;

    await nextTick();

    requestAnimationFrame(() => {

        if (!imgRef.value || !articleRef.value || !coverRef.value) return;

        const coverHeight   = imgRef.value.getBoundingClientRect().height;
        const articleHeight = articleRef.value.getBoundingClientRect().height;

        if(isDesktop.value && isReady.value) {
            if (coverHeight > articleHeight) {
                if (coverRef.value.style.maxHeight !== articleHeight + 'px') {
                    coverRef.value.style.maxHeight = articleHeight + 'px';
                }
                initParallaxEffect(coverRef.value, imgRef.value, articleHeight);
            } else {
                if (coverRef.value.style.maxHeight !== 'none') {
                    coverRef.value.style.maxHeight = 'none';
                }
            }
        }

    });

};

const initParallaxEffect = (cover, image, maxHeight) => {
    const imageHeight = image.getBoundingClientRect().height;
    const scrollDistance = maxHeight - imageHeight;
    
    if (scrollDistance < 0) {
        gsap.fromTo(
            image,
            { y: 0 },
            {
                y: scrollDistance,
                ease: 'none',
                scrollTrigger: {
                    trigger: cover,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    }
};

onMounted(async () => {
    handleResize();
    window.addEventListener('resize', handleResize);

    isClient.value = true;
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});


const networks = computed(() => {
    if (project.value)
        return project.value.networksList;
} );

const networksList = computed( () => {

    if(!networks.value)
        return [];

    return networks.value.map(network => {

        let imgSrc;
        switch (network?.label) {
            case 'LinkedIn':
                imgSrc = LinkedInLogo;
                break;
            case 'GitHub':
                imgSrc = GitHubLogo;
                break;
            default:
                imgSrc = LinkIcon;
        }

        let alt = 'Logo de '
        if(useContentStore().lang === 'en')
            alt = 'Logo of ';

        return {
            logoAlt: alt + network.label,
            logoSrc: imgSrc,
            ...network
        }
    });

});

</script>