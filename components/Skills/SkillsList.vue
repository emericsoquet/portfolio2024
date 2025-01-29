<template>
    <div class="skills border-top">
        <div class="skills__container md:container relative">
            <p class="absolute ml-8 uppercase text-xs -top-6 hidden md:block">{{ label }}</p>
            <ul class="skills__grid md:flex">
                <li v-for="(skill, i) in skills" 
                    :class="`flex w-full items-center px-5 py-5 md:flex-1 md:px-8
                    border-bottom 
                    md:border-right
                    ${ i === 0 ? 'md:border-left' : ''}
                    `"
                    :key="i">
                    <span class="font-sub font-semibold text-2xl uppercase">{{ skill }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const skills = reactive([
    'Nuxt',
    'Vue.js',
    'Wordpress',
]);

const label = computed(() => useContentStore().getChoosenHome.skills );
</script>