export const getDates = () => {

    const convertDate = ({ seconds, nanoseconds }) => {
        return new Date(seconds * 1000 + nanoseconds / 1_000_000);
    };
    
    const getYear = date => {
        const convertedDate = convertDate(date);
        return convertedDate.getFullYear();
    }

    return {
        convertDate, getYear
    }
}