import { defineStore } from "pinia";

// this store is written differently to wait for the reading of the theme stored inside localStorage
export const useGeneralStore = defineStore('general', {

    state: () => {
        return {
            theme: 'amethyst',
            isThemeLoaded: false
        }
    },
    actions: {
        initTheme() {
            if (process.client) {
                const storedTheme = localStorage.getItem('theme');
                this.theme = storedTheme || this.theme;
                this.isThemeLoaded = true;
            }
        },
        changeTheme(newTheme) {
            this.theme = newTheme;
            if (process.client) {
                localStorage.setItem('theme', newTheme);
            }
        }
    }

})