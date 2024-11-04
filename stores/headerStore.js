import { defineStore } from "pinia";

export const useHeaderStore = defineStore('header', {

    state() {
        return {
            isMenuOpen: false,
            isHeaderVisible: false
        }
    },

    actions: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        setHeaderVisibility(visible) {
            this.isHeaderVisible = visible;
        }
    }

})