import axios from 'axios';
import { defineStore } from "pinia";
import { generateCodeChallenge, generateCodeVerifier } from "~/utils/api/pkce";

export const useAccessStore = defineStore('access', () => {
    const accessToken = ref('');
    const refreshToken = ref('');
    const expiresIn = ref(0);

    const clientID = '44d8a434cc1142b2b6da5eba84a994d1';
    const config = useRuntimeConfig();

    const generateCodes = async () => {
        try {
            const verifier = generateCodeVerifier();
            const challenge = await generateCodeChallenge(verifier);
            window.localStorage.setItem('code_verifier', verifier);
            return challenge;
        } catch (error) {
            console.error('Impossible de générer le code challenge :', error);
        }
    };

    const authorizeAccess = async () => {
        try {
            const challenge = await generateCodes();
            const redirectURI = `${config.public.baseURL}`;
            const scopes = 'user-read-private user-read-email user-library-read';

            const params = new URLSearchParams({
                response_type: 'code',
                client_id: clientID,
                redirect_uri: redirectURI,
                scope: scopes,
                code_challenge_method: 'S256',
                code_challenge: challenge,
            });

            const authURL = new URL('https://accounts.spotify.com/authorize');
            authURL.search = params.toString();

            // Redirection automatique
            window.location.href = authURL.toString();
        } catch (error) {
            console.error('Erreur lors de l\'autorisation :', error);
        }
    };

    const fetchAccessToken = async (code) => {

        try {
            const verifier = window.localStorage.getItem('code_verifier');

            if (!verifier) {
                console.error('Code verifier introuvable dans le localStorage.');
                return;
            }

            const data = new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: `${config.public.baseURL}`,
                client_id: clientID,
                code_verifier: verifier,
            });

            const response = await axios.post('https://accounts.spotify.com/api/token', data.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            accessToken.value = response.data.access_token;
            refreshToken.value = response.data.refresh_token;
            expiresIn.value = response.data.expires_in;

            // Stockez le token localement
            window.localStorage.setItem('spotify_access_token', accessToken.value);
            console.log('Access token récupéré avec succès :', response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération du token :', error.response?.data || error.message);
        }
    };

    const fetchFavorites = async () => {
        try {
            if (!accessToken.value) {
                console.error('Token d\'accès introuvable.');
                return;
            }
    
            const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
                headers: {
                    Authorization: `Bearer ${accessToken.value}`,
                },
            });
    
            console.log('Profil utilisateur récupéré :', response.data);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération du profil utilisateur :', error.response?.data || error.message);
        }
    };
    

    return { accessToken, authorizeAccess, fetchAccessToken, fetchFavorites };
});
