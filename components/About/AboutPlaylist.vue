<template>
    <article class="about__playlist px-5 md:flex-1 md:border-0 md:border-left">
        <p v-if="!accessStore.accessToken">Authentification en cours...</p>
        <div v-else>
            <div>
                <!-- <ul>
                    <li v-for="track in favorites" :key="track.track.id">
                        {{ track.track.name }} - {{ track.track.artists[0].name }}
                    </li>
                </ul> -->
            </div>
        </div>
    </article>
</template>

<script setup>
import { useAccessStore } from '~/stores/accessStore';

const accessStore = useAccessStore();
const favorites = ref([]);

onMounted(async () => {
    try {
        // Vérifiez si un access token est déjà présent dans le store ou localStorage
        if (!accessStore.accessToken) {
            const storedToken = window.localStorage.getItem('spotify_access_token');
            if (storedToken) {
                // Si un token est trouvé, l'utiliser
                accessStore.accessToken = storedToken;
            } else {
                // Si aucun token, vérifiez si un code est présent dans l'URL
                const params = new URLSearchParams(window.location.search);
                const code = params.get('code');

                if (code) {
                    // Utilisez le code pour récupérer l'access token
                    await accessStore.fetchAccessToken(code);

                    // Nettoyez l'URL pour supprimer le code
                    window.history.replaceState({}, document.title, window.location.pathname);
                } else {
                    // Si aucun token ni code, redirigez pour autorisation
                    await accessStore.authorizeAccess();
                }
            }

            favorites.value = await accessStore.fetchFavorites();
            console.log(favorites.value);

        }
    } catch (error) {
        console.error('Erreur dans le processus d\'authentification :', error);
    }
});
</script>

<style scoped>
article {
    position: relative;
    left: -.5px;
}
</style>
