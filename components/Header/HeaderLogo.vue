<template>
    <div class="header__logo flex items-center">
        <figure class="header__icon w-14 md:w-16 rounded">
            <img    src="~/assets/media/logo/emeric-soquet.webp" 
                    :alt="altLogo"
                    class="aspect-square">
        </figure>
        <div class="ml-6 font-heading text-xl">Emeric</div>
    </div>
</template>

<script setup>
const altLogo = ref('Photo d\'Emeric Soquet');
</script>