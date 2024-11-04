<template>
    <section class="palette md:container">
        <p class="uppercase text-right text-xs mb-2 mr-2">Pick your favorite gem</p>

        <div class="palette__list">
            <button    :class="`palette__item flex w-full items-center px-4 py-5 border-bottom ${ i === 0 ? 'border-top' : '' }`" 
                    v-for="(theme, i) in palette" 
                    :key="i">
                <img    :src="theme.icon" 
                        :alt="`Gem icon for ${theme.name} theme`"
                        class="aspect-square h-10 mr-4">
                <p class="palette__name font-sub font-semibold text-2xl uppercase">{{ theme.name }}</p>
            </button>
        </div>
    </section>
</template>

<script setup>
import EmeraldIcon   from '~/assets/media/icons/icon-emerald.svg';
import AmethystIcon from '~/assets/media/icons/icon-amethyst.svg';
import GarnetIcon   from '~/assets/media/icons/icon-garnet.svg';

const palette = reactive([
    { 'name': 'emerald',   'icon': EmeraldIcon },
    { 'name': 'amethyst',  'icon': AmethystIcon },
    { 'name': 'garnet',    'icon': GarnetIcon },
])
</script>