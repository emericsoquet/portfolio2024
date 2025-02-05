<!-- is used for differents components but classes may be different so props are retrieved -->

<template>
    <div :class="`${extraClasses} networks pl-5 pr-4 py-3 w-max flex items-center`">
        <p class="font-heading font-semibold tracking-wider mr-10 md:text-lg">{{ label }}</p>
        <div class="networks__list flex gap-2">
            <a  v-for="(network, i) in networksList"
                :key="i"
                :class="`network cursor-pointer bg-base bg-opacity-20 aspect-square w-8 rounded-md flex items-center justify-center ${ network.label === 'GitHub' ? 'p-1.5' : 'p-2' }`"
                :href="network.url">
                <img :src="network?.logoSrc" :alt="network?.logoAlt" class="cursor-pointer">
            </a>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    extraClasses: {
        type: String,
        required: false
    },
    networksList: {
        type: Object,
        required: true
    },
    label: {
        type: String,
        required: true,
        default: ''
    }
});

</script>