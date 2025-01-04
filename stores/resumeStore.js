import { defineStore } from "pinia";

export const useResumeStore = defineStore('resume', () => {

    const isOpen = ref(false);

    const toggleResume = () => {
        isOpen.value = !isOpen.value;
    };

    return {
        isOpen,
        toggleResume
    }
    
});