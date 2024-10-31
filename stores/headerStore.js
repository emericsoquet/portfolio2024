import { defineStore } from "pinia";

export const useHeaderStore = defineStore('header', {

    state() {
        return {
            isMenuOpen: false
        }
    },

    actions: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }

})