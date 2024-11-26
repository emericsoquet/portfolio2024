<template>
    <form class="form md:container" @submit.prevent="handleForm">

        <fieldset>
            <ContactInput   v-for="(field, i) in fields" 
                            :key="i" 
                            :label="field.label"
                            :name="field.name"
                            :type="field.type || 'text'"
                            :error="errors[field.name]"
                            v-model="form[field.name]"
            />
        </fieldset>

        <fieldset class="md:flex md:flex-row-reverse md:items-center">
            <button type="submit" 
                    :class="`block w-full px-5 py-5 cursor-pointer
                    font-heading font-bold text-left text-2xl 
                    border-bottom
                    md:border-0 md:text-center
                    md:h-24 md:relative md:-right-0.5 md:px-0 md:w-3/12`">
                Submit
            </button>
            <div    :class="`general-error 
                    px-5 pt-5 font-lg 
                    md:pt-0 md:pl-0  md:h-24
                    md:flex md:items-center md:justify-end md:w-9/12
            `">
                {{ formMessage ? formMessage : 'All these fields are required before sending the form' }}
            </div>
        </fieldset>
        
    </form>
</template>

<script setup>
import { validatorsList } from '~/utils/forms/validators';

const validators = validatorsList();

const formMessage   = ref('');
const isFormValid   = ref(true);

// list of fields present in the form
const fields = [
    { name: 'surname', label: 'Surname', rules: [validators.requiredTest(), validators.charsTest()] },
    { name: 'firstName', label: 'First Name', rules: [validators.requiredTest(), validators.charsTest()] },
    { name: 'email', label: 'Mail address', type: 'email', rules: [validators.requiredTest(), validators.emailTest()] },
    { name: 'object', label: 'Object', rules: [validators.requiredTest(), validators.minTest(3)] },
    { name: 'message', label: 'Message', type: 'textarea', rules: [ validators.requiredTest(), validators.minTest(20)] }
];

// list of associations between every field name and a value (got from v-model) which is empty at the beginning
const form = reactive( Object.fromEntries(fields.map( field => [field.name, '' ] )) );
const errors = reactive( Object.fromEntries(fields.map( field => [field.name, [] ] )) );

const validateField = (fieldName) => {

    // search in the array for field, in order to get its rules
    const field = fields.find(f => f.name === fieldName);
    if (!field || !field.rules) return [];

    // create empty errors array for the field
    const fieldErrors = [];

    // enumerate the field errors that are not respected
    field.rules.forEach( rule => {
        if (!rule.validationTest(form[fieldName])) {
            fieldErrors.push(rule.errorMessage);
        }
    });

    return fieldErrors;
}

const handleForm = () => {

    // reinitialize vars that indicate form is invalid
    isFormValid.value   = true;

    fields.forEach( field => {
        const fieldError = validateField(field.name);
        errors[field.name] = fieldError;
    });

    if( Object.values(errors).some(fieldErrors => fieldErrors.length > 0) ) {
        isFormValid.value  = false;
        formMessage.value = 'Please check the errors in the form before sending it again';
        console.log('Invalide');
        return;
    }

    console.log('Submit');
    formMessage.value = 'Your message has been sent. Thank you!';

}

const onSubmit = (evt, values) => {
    console.log('Submit triggered:', evt);
    console.log('Values:', values);
};

</script>