<template>
    <div class="nav__list flex flex-col border-bottom md:border-none" ref="navList" >
        <ul class="flex flex-col md:flex-row container md:w-full md:px-0">
            <li v-if="route.path !== '/'" class="nav__item">
                <a @click="goHome"
                   class="md:px-2 py-1 block md:mx-2 text-lg font-heading cursor-pointer">
                    {{ homeLabel }}
                </a>
            </li>
            <template v-else>
                <li v-for="(link, i) in newNavigation"
                    :key="i"
                    class="nav__item">
                    <a @click="scrollToSection(link.url)"
                       class="md:px-2 py-1 block md:mx-2 text-lg font-heading cursor-pointer">
                        {{ link.label }}
                    </a>
                </li>
            </template>
        </ul>
    
    </div>
</template>

<script setup>
const contentStore = useContentStore();
const navigation = computed(() => contentStore.getChoosenGeneral.navigation);
const lang = computed(() => contentStore.lang );

const route  = useRoute();
const router = useRouter();

const homeLabel = computed(() => {
    if (lang.value == 'fr') return 'Accueil';
    return 'Home';
})

const newNavigation = computed(() => {
    return navigation.value
        ? navigation.value.map(item => {
            const anchor = `#${convertFunctions()?.convertStringToURL(item)}`;
            return {
                label: item,
                url: anchor
            };
        })
        : [];
});

const goHome = () => {
    router.push("/");
};

const scrollToSection = (url) => {
    const sectionId = url.replace("#", "");
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
        console.warn(`Élément avec l'ID "${sectionId}" introuvable.`);
    }
};

</script>