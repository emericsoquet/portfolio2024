<template>
    <div class="input-group flex flex-col md:grid md:border-0">

        <label  for=""
                :class="`uppercase font-bold px-5 flex items-center
                border-bottom md:border-b-0 md:border-right
                h-12 md:h-20 md:px-0`"
        >
            <slot name="label">{{ label }}</slot>
        </label>
        <input  type="text" 
                :class="`h-12 px-5 bg-border/20 md:h-20 md:px-8`" 
        />
        <div    :class="`input-error border-top 
                md:border-t-0 md:border-left md:border-right`"
        >
            <slot name="error" v-if="error"></slot>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String, 
        required: true
    }
})
</script>