<template>
    <Form class="form md:container" @submit="submit" @submit-error="onError" :validation-schema="schema">

        <fieldset>
            <ContactInput label="Surname" name="surname" type="text" />
            <ContactInput label="First name" name="firstName" type="text" />
            <ContactInput label="Mail address" name="email" type="email" />
            <ContactInput label="Object" name="object" type="text" />
            <ContactInput label="Message" name="message" type="textarea" />
        </fieldset>

        {{ errors }}

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
                Please check the fields marked as an error before trying sending your mail
            </div>
        </fieldset>
        
    </Form>
</template>

<script setup>
import { Form, useForm } from 'vee-validate';
import * as yup from 'yup';

const errorMessages = {
  required: 'This field is required',
  email: 'The mail pattern standard must be followed',
  min: 'This field must contain at least ${min} characters',
  max: 'This field can\'t exceed ${max} characters',
};

const schema = yup.object({
    surname: yup.string().required(errorMessages.required),
    firstName: yup.string().required(errorMessages.required),
    email: yup.string().required(errorMessages.required).email(errorMessages.email),
    object: yup.string().required(errorMessages.required).min(3, errorMessages.min),
    message: yup.string().required(errorMessages.required).max(300, errorMessages.max)
});

const submit = (values) => {
    console.log('Form submitted:', values);
};

const onError = (errors) => {
    console.error('Validation errors:', errors);
};

</script>