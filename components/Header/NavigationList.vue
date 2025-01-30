<template>
    <div class="nav__list flex flex-col border-bottom md:border-none" ref="navList" >
        <ul class="flex flex-col md:flex-row container md:w-full md:px-0">
            <li v-for="(link, i) in newNavigation"
                :key="i"
                class="nav__item">
                    <a   @click="scrollToSection(link.url)"
                                class="md:px-2 py-1 block md:mx-2 text-lg font-heading cursor-pointer">
                        {{ link.label }}
                    </a>
            </li>
        </ul>
    
    </div>
</template>

<script setup>
const contentStore = useContentStore();
const navigation = computed( () => contentStore.getChoosenGeneral.navigation );

const newNavigation = computed( () => {
    return navigation.value 
        ? navigation.value.map( item => {
            return {
                label: item,
                url: `#${convertFunctions()?.convertStringToURL(item)}`
            }
        })
        : [];
});

const scrollToSection = (url) => {
    const sectionId = url.replace('#', ''); // Retire le # pour obtenir l'id
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with id "${sectionId}" not found.`);
    }
};

</script>