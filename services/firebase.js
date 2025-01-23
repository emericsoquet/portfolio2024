export const fetchCollection = async (collectionName) => {

    const { $firestore } = useNuxtApp();

    const { collection, getDocs } = await import('firebase/firestore');
    const data = [];

    try {
        const querySnapshot = await getDocs(collection($firestore, collectionName));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        return data;
    } catch (error) {
        console.error(`Impossible de récupérer la collection ${collectionName} :`, error);
        throw error;
    }

}