export const validatorsList = (content = null) => {

    const requiredTest = () => ({
        validationTest: (value) => value.trim() !== '',
        errorMessage: content?.required || 'This field is required',
    });

    const charsTest = () => ({
        validationTest: (value) => /^[\p{L}\s-]+$/u.test(value),
        errorMessage: content?.chars || 'This field must only contain letters and spaces',
    });
    
    const emailTest = () => ({
        validationTest: (value) => /\S+@\S+\.\S+/.test(value),
        errorMessage: content?.email || 'This field must be a valid email address',
    });

    const minTest = (min) => ({
        validationTest: (value) => value.trim().length >= min,
        errorMessage: `${content?.min[0]} ${min} ${content?.min[1]}` || `This field must contain ${min} characters at least`,
    });

    return { charsTest, requiredTest, emailTest, minTest };

}