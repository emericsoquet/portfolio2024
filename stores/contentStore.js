import { defineStore } from "pinia";
import { fetchCollection } from "~/services/firebase";

export const useContentStore = defineStore('content', () => {

    const general = ref([]);
    const home = ref([]);
    const projects = ref([]);
    const content = ref([]);
    const project = ref({});

    const lang = ref('en');

    onMounted(() => {
        if (typeof localStorage !== 'undefined') {
            const storedLang = localStorage.getItem('lang');
            if (storedLang)
                lang.value = storedLang;
        }
    })

    const switchLanguage = () => {
        lang.value = lang.value === 'en' ? 'fr' : 'en';
        localStorage.setItem('lang', lang.value);
    }

    const fetchGeneralContent = async () => {
        try {
            const response = await fetchCollection('general');
            general.value = response;
        } catch (error) {
            console.error('Impossible de récupérer le contenu général :', error);
            throw error;
        }
    };

    const fetchHomeContent = async () => {
        try {
            const response = await fetchCollection('home');
            home.value = response;
        } catch (error) {
            console.error('Impossible de récupérer le contenu de la page d\'accueil :', error);
            throw error;
        }
    };

    const fetchAllProjects = async () => {
        try {
            const response = await fetchCollection('projects');
            projects.value = response;
        } catch (error) {
            console.error('Impossible de récupérer les projets :', error);
            throw error;
        }
    };

    const fetchProjectByName = (projectName) => {
        const foundProject = projects.value.find(item => item.id === projectName);

        if (!foundProject) {
            useRouter().push('/');
            return null;
        }

        project.value = foundProject;
        return foundProject;
    };

    const projectContent = computed(() => {
        if (!project.value) return null;
        return project.value[lang.value] || {};
    });

    const fetchAllContent = async () => {
        try {
            const response = await Promise.all([fetchGeneralContent(), fetchHomeContent(), fetchAllProjects()]);
            content.value = response;
        } catch (error) {
            console.error('Impossible de récupérer le contenu :', error);
            throw error;
        }
    }

    const getChoosenGeneral = computed( () => {
        return general.value.find( item => item.id === lang.value ) || {};
    });
    const getSharedGeneral = computed( () => { 
        return general.value.find( item => item.id === 'shared' ) || {};
    });

    const getChoosenHome = computed( () => {
        return home.value.find( item => item.id === lang.value ) || {};
    });

    return {
        fetchAllContent,
        getChoosenGeneral,
        getSharedGeneral,
        getChoosenHome,
        switchLanguage,
        fetchProjectByName,
        fetchAllProjects,
        projects,
        project,
        projectContent,
        lang,
    }

});