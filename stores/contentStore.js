import { defineStore } from "pinia";
import { fetchCollection } from "~/services/firebase";

export const useContentStore = defineStore( 'content', () => { 

    const general   = ref([]);
    const home      = ref([]);
    const projects  = ref([]);
    const content   = ref([]);

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

    const fetchAllContent = async () => {
        try {
            const response = await Promise.all([fetchGeneralContent(), fetchHomeContent(), fetchAllProjects()]);
            content.value = response;
        } catch (error) {
            console.error('Impossible de récupérer le contenu :', error);
            throw error;
        }
    }

    return {
        fetchAllProjects,
        fetchHomeContent,
        fetchGeneralContent,
        fetchAllContent
    }

});