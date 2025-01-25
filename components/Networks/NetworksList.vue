<!-- is used for differents components but classes may be different so props are retrieved -->

<template>
    <div :class="`${extraClasses} networks pl-5 pr-4 py-3 w-max flex items-center`">
        <p class="font-heading font-semibold tracking-wider mr-10 md:text-lg">{{ networksLabel  }}</p>
        <div class="networks__list flex gap-2">
            <a  v-for="(network, i) in networksList"
                :key="i"
                :class="`network cursor-pointer bg-base bg-opacity-20 aspect-square w-8 rounded-md flex items-center justify-center ${ network.label === 'GitHub' ? 'p-1.5' : 'p-2' }`"
                :href="network.url">
                <img :src="network.logo" :alt="network.logoAlt" class="cursor-pointer">
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

const networksLabel  = computed( () => useContentStore().getChoosenGeneral?.networks?.label );
const networks = computed( () => useContentStore().getSharedGeneral.networks );

const networksList = computed( () => {

    if(!networks.value)
        return [];

    return networks.value.map( network => {

        let alt = 'Logo de ' + network.label;
        if(useContentStore().lang === 'en')
            alt = 'Logo of ';

        return {
            logoAlt: alt,
            ...network
        }
    });

});

</script>