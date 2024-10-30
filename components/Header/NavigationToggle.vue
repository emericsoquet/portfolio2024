<template>
    <button class="nav__toggle flex flex-col gap-y-1.5 p-3 md:hidden"
            @click="toggleMenu"
    >
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>

<script setup>

const props = defineProps({
    isMenuOpen: {
        type: Boolean,
        required: true
    }
})

// emit toggle-menu to parent when clicked
const emit = defineEmits(['toggle-menu']);
const toggleMenu = () => {
    emit('toggle-menu');
}

</script>