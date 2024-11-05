<template>
    <section class="palette md:container">
        <p class="uppercase text-right text-xs mb-2 mr-2 md:mr-0 md:mb-5 md:text-sm">Pick your favorite gem</p>

        <div class="palette__list md:flex">
            <button    :class="`palette__item flex w-full items-center px-4 py-5 md:flex-1 md:w-auto border-bottom ${ i === 0 ? 'border-top md:border-left' : '' } md:border-top md:border-right ${generalStore.theme === theme.name ? 'is-active' : ''}md:`" 
                    v-for="(theme, i) in palette" 
                    :key="i"
                    @click="changeTheme(theme.name)">
                <img    :src="theme.icon" 
                        :alt="`Gem icon for ${theme.label.toLowerCase()} theme`"
                        class="aspect-square h-10 mr-4">
                <p class="palette__name font-sub font-semibold text-2xl uppercase">{{ theme.label }}</p>
            </button>
        </div>
    </section>
</template>

<script setup>
import EmeraldIcon   from '~/assets/media/icons/icon-emerald.svg';
import AmethystIcon from '~/assets/media/icons/icon-amethyst.svg';
import GarnetIcon   from '~/assets/media/icons/icon-garnet.svg';

const generalStore = useGeneralStore();

const palette = reactive([
    { 'name' : 'emerald',    label : 'Emerald',   'icon' : EmeraldIcon },
    { 'name' : 'amethyst',   label : 'Amethyst',  'icon' : AmethystIcon },
    { 'name' : 'garnet',     label : 'Garnet',    'icon' : GarnetIcon },
]);

// use the action inside generalStore and gives the name as parameter : it's the class name theme for body
const changeTheme = (theme) => {
    generalStore.changeTheme(theme);
};
</script>