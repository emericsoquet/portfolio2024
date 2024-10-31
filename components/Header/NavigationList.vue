<template>
    <div class="nav__list flex flex-col border-bottom md:border-none" ref="navList" >
        <ul class="flex flex-col md:flex-row container md:w-full md:px-0">
            <li v-for="(link, i) in navLinks"
                :key="i"
                class="nav__item">
                    <NuxtLink   :to="link.url"
                                class="md:px-2 py-1 block md:mx-2 text-lg font-heading">
                        {{ link.label }}
                    </NuxtLink>
            </li>
        </ul>
    
    </div>
</template>

<script setup>

const navLinks = reactive([
    { label: 'About me', url: '#'},
    { label: 'Works', url: '#'},
    { label: 'Contact', url: '#'},
]);

</script>