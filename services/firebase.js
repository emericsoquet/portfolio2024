import { collection, getDocs } from "firebase/firestore";

export const fetchCollection = async (collectionName) => {
    const { $firestore } = useNuxtApp();

    if (!process.client || !$firestore) {
        console.error("Firestore n'est pas accessible côté serveur !");
        return [];
    }

    try {
        const querySnapshot = await getDocs(collection($firestore, collectionName));
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error(`Erreur lors de la récupération de la collection ${collectionName} :`, error);
        throw error;
    }
};