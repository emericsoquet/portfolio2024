<template>
    <div class="header__logo">
        <figure class="header__icon">
            <img    src="~/assets/media/logo/emeric-soquet.webp" 
                    :alt="altLogo"
                    class="rounded aspect-square">
        </figure>
        <figcaption class="ml-6 font-heading">Emeric</figcaption>
    </div>
</template>

<script setup>

const altLogo = ref('Photo d\'Emeric Soquet');

</script>