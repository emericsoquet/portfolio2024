<template>
    <div class="skills border-top">
        <div class="skills__container md:container">
            <ul class="skills__grid md:flex">
                <li v-for="(skill, i) in skills" 
                    :class="`flex w-full items-center px-5 py-5 md:flex-1 
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
])
</script>