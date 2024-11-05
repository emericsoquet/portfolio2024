import { defineStore } from "pinia";

export const useGeneralStore = defineStore('general', {
    state() {
        return {
            theme: 'emerald'
        }
    },
    actions: {
        changeTheme(theme) {
            this.theme = theme;
        }
    }
})