<template>
    <div :class="`${extraClasses} networks pl-5 pr-4 py-3 w-max flex items-center`">
        <p class="font-heading font-semibold tracking-wider mr-10 md:text-lg">Follow me</p>
        <div class="networks__list flex gap-2">
            <a  v-for="(network, i) in networks"
                :key="i"
                :class="`network cursor-pointer bg-base bg-opacity-20 aspect-square w-8 rounded-md flex items-center justify-center ${ network.label === 'GitHub' ? 'p-1.5' : 'p-2' }`"
                :href="network.link">
                <img :src="network.img" :alt="network.label" class="cursor-pointer">
            </a>
        </div>
    </div>
</template>

<script setup>
import LinkedInLogo from '~/assets/media/logo/linkedin-logo.svg';
import GitHubLogo   from '~/assets/media/logo/github-logo.svg';

const props = defineProps({
    extraClasses: {
        type: String,
        required: false
    }
});

const networks = reactive([
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/emeric-soquet/', img: LinkedInLogo },
    { label: 'GitHub', link: 'https://github.com/emericsoquet', img: GitHubLogo }
]);
</script>