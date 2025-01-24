<template>
    <div class="nav__list flex flex-col border-bottom md:border-none" ref="navList" >
        <ul class="flex flex-col md:flex-row container md:w-full md:px-0">
            <li v-for="(link, i) in newNavigation"
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
const contentStore = useContentStore();
const navigation = computed( () => contentStore.getChoosenGeneral.navigation );

const convertStringToURL = (string) => {
    return string
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '');
}

const newNavigation = computed( () => {
    return navigation.value 
        ? navigation.value.map( item => {
            return {
                label: item,
                url: `#${convertStringToURL(item)}`
            }
        })
        : [];
})

const navLinks = reactive([
    { label: 'About me', url: '/aaa'},
    { label: 'Works', url: '#'},
    { label: 'Contact', url: '#'},
]);

</script>