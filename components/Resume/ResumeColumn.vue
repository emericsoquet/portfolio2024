<template>
    <article class="resume__column md:order-3 md:col-span-5 md:border-left md:border-top lg:col-span-4 lg:pb-16">
        <section class="resume__education">
            <h3 class="text-3xl font-bold uppercase font-body mb-5">Formations</h3>
            <div class="education__list">
                <EducationItem v-for="(item, i) in educationItems" :key="i" :education="item" />
            </div>
        </section>
        <section class="resume__skills mt-8 pt-8 md:pt-0 md:mt-10">
            <h3 class="text-3xl font-bold uppercase font-body mb-5">Compétences</h3>
            <div class="2xl:grid 2xl:grid-cols-2 2xl:gap-6">
                <ul>
                    <li v-for="(skill, i) in hardSkills" :key="i" class="mb-2">
                        {{ skill }}
                    </li>
                </ul>
                <ul class="mt-6 2xl:mt-0">
                    <li v-for="(skill, i) in softSkills" :key="i" class="mb-2">
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </section>
    </article>
</template>

<script setup>
const hardSkills = reactive([
    'Nuxt, Vue',
    'Javascript',
    'Wordpress',
    'GSAP',
    'Git, Github',
    'Tailwind, Bootstrap',
    'Figma, Photoshop'
]);
const softSkills = reactive([
    'Sensibilité UX/UI',
    'Attention aux détails',
    'Proactivité',
    'Méthodologie agile',
    'Gestion des priorités',
    'Culture d’apprentissage'
]);

const educationItems = reactive([
    {
        title: 'Bachelor développeur front-end',
        school: 'L\'école Multimédia',
        startingYear: 2022,
        endingYear: 2023
    },
    {
        title: 'BUT MMI - Métiers du Multimédia et de l’Internet',
        school: 'IUT de Troyes',
        startingYear: 2019,
        endingYear: 2021
    },
]);

</script>