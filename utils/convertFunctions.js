export const convertFunctions = () => {

    const convertStringToURL = (string) => {
        return string
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '');
    };

    return { convertStringToURL };

}