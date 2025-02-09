<template>
    <form class="form md:container" @submit.prevent="handleForm" :key="lang">

        <fieldset>
            <ContactInput
                v-for="(field, i) in fields"
                :key="i"
                :label="field.label"
                :name="field.name"
                :type="field.type || 'text'"
                :error="errors[field.name]"
                :validate="validateField"
                v-model="form[field.name]"
            />
            <input type="text" name="_gotcha" style="display: none;">
        </fieldset>

        <fieldset class="md:flex md:flex-row-reverse md:items-center">
            <button type="submit"
                    :class="`block w-full px-5 py-5 cursor-pointer
                    font-heading font-bold text-left text-2xl 
                    border-bottom
                    md:border-0 md:text-center
                    md:h-24 md:relative md:-right-0.5 md:px-0 md:w-3/12`">
                {{ content?.form?.submitLabel || 'Submit'}}
            </button>
            <div :class="`general-error 
                    px-5 pt-5 font-lg 
                    md:pt-0 md:pl-0 md:h-24
                    md:flex md:items-center md:justify-end md:w-9/12
            `">
                {{ formMessage || (content?.form?.alertMessage || 'All fields are required') }}
            </div>
        </fieldset>
    </form>

    
</template>

<script setup>
import { validatorsList } from '~/utils/forms/validators';
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { useReCaptcha } from 'vue-recaptcha-v3';

const { executeRecaptcha } = useReCaptcha();

const formMessage = ref('');
const isFormValid = ref(true);
const content = computed(() => useContentStore().getChoosenHome.contact);

// empty list for validation rules
const validators = ref(null);
// empty list for fields
const fieldsList = ref([]);

// dynamic fields which will be supplied when content is loaded
const fields = computed(() => {
    if (!content.value) return fieldsList.value;

    return fieldsList.value.map(field => ({
        ...field,
        label: content.value.form.fields[field.name] || field.label,
    }));
});

// empty arrays for errors and form values
const form = reactive({});
const errors = reactive({});

const lang = computed( () => useContentStore().lang );

// change data when content is loaded or if language is changed
watch(
    [content],
    async ([newContent]) => {
        if (newContent) {
            
            // initialize rules and send content for translated rules
            validators.value = validatorsList(newContent?.form?.rules);

            // initialize fields after dyanmic rules are loaded
            fieldsList.value = [
                { name: 'surname', label: 'Surname', rules: [validators.value.requiredTest(), validators.value.charsTest()] },
                { name: 'firstName', label: 'First Name', rules: [validators.value.requiredTest(), validators.value.charsTest()] },
                { name: 'email', label: 'Mail address', type: 'email', rules: [validators.value.requiredTest(), validators.value.emailTest()] },
                { name: 'object', label: 'Object', rules: [validators.value.requiredTest(), validators.value.minTest(3)] },
                { name: 'message', label: 'Message', type: 'textarea', rules: [validators.value.requiredTest(), validators.value.minTest(20)] },
            ];

            // initialize data of the form and errors
            fields.value.forEach(field => {
                if (!(field.name in form)) form[field.name] = '';
                if (!(field.name in errors)) errors[field.name] = [];
            });

        }
    },
    { immediate: true }
);

watch(
    lang, 
    (newLang) => {
        // Reinitialize validators with the new language's content
        validators.value = validatorsList(content.value?.form?.rules);

        // Clear all errors
        Object.keys(errors).forEach(key => {
            errors[key] = [];
        });

        // Clear all form values
        Object.keys(form).forEach(key => {
            form[key] = '';
        });

        formMessage.value = '';
    }
)

// validate field when typing or at validation
const validateField = (fieldName) => {
    const field = fields.value.find(f => f.name === fieldName);
    if (!field || !field.rules) return [];

    const fieldErrors = [];
    field.rules.forEach(rule => {
        if (!rule.validationTest(form[fieldName])) {
            if (rule.errorMessage) { // Vérifie que le message d'erreur est valide
                fieldErrors.push(rule.errorMessage);
            }
        }
    });

    return fieldErrors;
};

// submission of the form when submit button is clicked
const handleForm = async () => {
    isFormValid.value = true;

    fields.value.forEach(field => {
        const fieldError = validateField(field.name);
        errors[field.name] = fieldError;
    });

    if (Object.values(errors).some(fieldErrors => fieldErrors.length > 0)) {
        isFormValid.value = false;
        formMessage.value = content?.value?.form?.generalFormError || 'Please check the errors in the form';
        return;
    }

    await sendEmail();

    /* formMessage.value = content?.value?.form?.successMessage || 'Your message has been sent. Thank you!'; */
};

const sendEmail = async () => {

    console.log('sending...');
    console.log(form);

    try {

        const recaptchaToken = await executeRecaptcha('contact_form');
        console.log("reCAPTCHA Token:", recaptchaToken); // Vérification dans la console

        const honeypot = document.querySelector('input[name="_gotcha"]').value;
        if (honeypot !== "") {
            console.warn("Spam bot détecté ! Envoi bloqué.");
            formMessage.value = "Spam détecté. Envoi bloqué.";
            return;
        }

        const response = await fetch("https://formspree.io/f/xwpvqylj", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...form,
                "_gotcha": honeypot
                /* "_recaptcha": recaptchaToken,
                "_custom_key": '6Lek1tEqAAAAAExq2mscH-6AyE-LC2TZH0_SAgTL' */
            }),
        });

        console.log(response.body)

        if (!response.ok) {
            const errorResponse = await response.json();
            console.error('FormSpree error:', errorResponse);
            throw new Error("Failed to send email");
        }

        formMessage.value = content?.value?.form?.successMessage || "Your message has been sent. Thank you!";
        
        // Réinitialiser le formulaire après envoi
        Object.keys(form).forEach(key => {
            form[key] = "";
        });

    } catch (error) {
        formMessage.value = content?.value?.form?.networkError || 'A network error has occured. Please retry later.';
        console.error("Email sending error:", error);
    }
};
</script>