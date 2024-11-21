<template>
    <div :class="`input-group flex flex-col md:grid md:border-0`">

        <label  :for="name"
                :class="`uppercase font-bold px-5 flex items-center
                border-bottom md:border-b-0
                h-12 md:h-20 md:px-0`"
        >
            {{ label }}
        </label>

        <span :class="`${error && 'input-error'}`">
            <template v-if="type === 'textarea'">
                <Field  :as="type"
                        :name="name"
                        :id="name"
                        :validate-on-blur="true"
                        :class="`h-52 w-full block px-5 py-4 bg-border/20 md:px-8 md:border-left font-body text-lg resize-none ${error && 'text-error'}`" 
                />
            </template>
            <template v-else>
                <Field  :type="type" 
                        :name="name"
                        :id="name"
                        :validate-on-blur="true"
                        :class="`h-12 w-full px-5 bg-border/20 md:h-full md:px-8 md:border-left font-body text-lg ${error && 'text-error'}`"
                />
            </template>
        </span>

        <div    :class="`border-top
                md:border-t-0 md:border-left md:border-right
                flex items-center`">
            <ErrorMessage :name="name" class="px-5 py-3 border-bottom block w-full md:border-0 text-sm" />
        </div>


    </div>
</template>

<script setup>
import { Field, ErrorMessage, useFieldError } from 'vee-validate';

const props = defineProps({
    label: {
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const error = useFieldError(props.name);

</script>