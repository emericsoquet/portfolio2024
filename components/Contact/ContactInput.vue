<template>
    <div :class="`input-group flex flex-col md:grid md:border-0`">

        <label  :for="name"
                :class="`uppercase font-bold px-5 flex items-center
                border-bottom md:border-b-0
                h-12 md:h-20 md:px-0`"
        >
            {{ label }}
        </label>

        <span :class="`${error.length > 0 && 'input-error'}`">
            <template v-if="type === 'textarea'">
                <textarea
                        :name="name"
                        :id="name"
                        v-model="model"
                        :class="`h-52 w-full block px-5 py-4 bg-border/20 md:px-8 md:border-left font-body text-lg resize-none ${error.length > 0 && 'text-error'}`" 
                />
            </template>
            <template v-else>
                <input  :type="type" 
                        :name="name"
                        :id="name"
                        v-model="model"
                        :class="`h-12 w-full px-5 bg-border/20 md:h-full md:px-8 md:border-left font-body text-lg ${error.length > 0 && 'text-error'}`"
                />
            </template>
        </span>

        <div    :class="`border-top
                md:border-t-0 md:border-left md:border-right
                flex items-center`">
            <span class="px-5 py-3 border-bottom block w-full md:border-0 text-sm">{{ error }}</span>
        </div>

        <!-- ${error && 'input-error'} -->
        <!-- ${error && 'text-error'} -->


    </div>

</template>

<script setup>

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
        default: 'text',
    },
    error: {
        type: Object
    }
});

const model = defineModel();

</script>