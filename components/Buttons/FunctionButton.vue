<template>
<button @click="action"
        class="cta border-2 rounded-md px-6 py-3 font-heading font-semibold text-lg">
    <slot></slot>
</button>
</template>

<script setup>
const props = defineProps({
    'action': {
        required: true,
        type: Function
    }
})
</script>