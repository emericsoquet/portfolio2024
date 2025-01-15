<template>
    <section class="palette md:container">
        <p class="uppercase text-right text-xs mb-2 mr-2 md:mr-0 md:mb-5 md:text-sm">Pick your favorite gem</p>

        <div class="palette__list md:flex">
            <button    :class="`palette__item flex w-full items-center px-4 py-5 md:flex-1 md:w-auto border-bottom ${ i === 0 ? 'border-top md:border-left' : '' } md:border-top md:border-right ${generalStore.theme === theme.name ? 'is-active' : ''}`" 
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
import SapphireIcon   from '~/assets/media/icons/icon-emerald.svg';
import AmethystIcon from '~/assets/media/icons/icon-amethyst.svg';
import GarnetIcon   from '~/assets/media/icons/icon-garnet.svg';

const generalStore = useGeneralStore();

const palette = reactive([
    { 'name' : 'sapphire',     label : 'Sapphire',  'icon' : SapphireIcon },
    { 'name' : 'amethyst',     label : 'Amethyst',  'icon' : AmethystIcon },
    { 'name' : 'garnet',       label : 'Garnet',    'icon' : GarnetIcon },
]);

// associate hexas for every theme
const themes = {
    sapphire: [[45, 93, 191], [44, 117, 235], [73, 164, 249]],
    amethyst: [[142, 122, 185], [113, 106, 196], [53, 82, 158]],
    garnet: [[215, 78, 108], [229, 124, 131], [223, 106, 124]],
};

// declare the theme at init, stored in the localStorage
const currentTheme = computed(() => ( themes[generalStore.theme] || themes.amethyst ));

const changeTheme = (themeName) => {
    const newTheme = themes[themeName];

    interpolateGradient(
        currentTheme.value, // current theme
        newTheme, // selected theme
        200 // duration of the transition
    );

    // store the selected theme in localStorage
    generalStore.changeTheme(themeName);
};

// transition for theme
const interpolateGradient = (startColors, endColors, duration) => {

    const steps = 20;
    const stepDuration = duration / steps;
    let currentStep = 0; // counter, first step

    // calculate intermediate value between two colors
    const interpolate = (start, end, factor) => {
        return start + (end - start) * factor;
    }

    const animate = () => {
        // when the colors desired are reached, make the animation stop
        if (currentStep > steps) return;

        // current step : serves as progression
        const factor = currentStep / steps;

        const color1 = `rgba(${Math.round(interpolate(startColors[0][0], endColors[0][0], factor))}, ${Math.round(interpolate(startColors[0][1], endColors[0][1], factor))}, ${Math.round(interpolate(startColors[0][2], endColors[0][2], factor))}, 1)`;
        const color2 = `rgba(${Math.round(interpolate(startColors[1][0], endColors[1][0], factor))}, ${Math.round(interpolate(startColors[1][1], endColors[1][1], factor))}, ${Math.round(interpolate(startColors[1][2], endColors[1][2], factor))}, 1)`;
        const color3 = `rgba(${Math.round(interpolate(startColors[2][0], endColors[2][0], factor))}, ${Math.round(interpolate(startColors[2][1], endColors[2][1], factor))}, ${Math.round(interpolate(startColors[2][2], endColors[2][2], factor))}, 1)`;

        // applicate calculated colors to the body background 
        document.body.style.background = `linear-gradient(90deg, ${color1} 7%, ${color2} 60%, ${color3} 99%)`;

        // go to next step
        currentStep++;
        setTimeout(animate, stepDuration);
    }

    animate();
};

// when document is loaded, switch theme loading state : this state authorize the app to be shown
onMounted(() => {

    // get colors for active thme
    const colors = currentTheme.value;

    const color1 = `rgba(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]}, 1)`;
    const color2 = `rgba(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]}, 1)`;
    const color3 = `rgba(${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]}, 1)`;

    // apply colors as style property on body, in order to avoid the white fade with other vues
    document.body.style.background = `linear-gradient(90deg, ${color1} 7%, ${color2} 60%, ${color3} 99%)`;

    generalStore.initTheme();
});

</script>