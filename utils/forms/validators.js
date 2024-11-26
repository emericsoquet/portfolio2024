export const validatorsList = () => {

    const charsTest = () => ({
        validationTest: (value) => /^[a-zA-Z\s]+$/.test(value),
        errorMessage: 'This field must only contain letters and spaces',
    });
      
    const requiredTest = () => ({
        validationTest: (value) => value.trim() !== '',
        errorMessage: 'This field is required',
    });
    
    const emailTest = () => ({
        validationTest: (value) => /\S+@\S+\.\S+/.test(value),
        errorMessage: 'This field must be a valid email address',
    });

    const minTest = (min) => ({
        validationTest: (value) => value.trim().length >= min,
        errorMessage: 'This field must contain ' + min + ' characters at least',
    });

    return { charsTest, requiredTest, emailTest, minTest };

}