<template>
    <article class="resume__column resume__experiences md:order-4 md:col-span-7 md:border-right md:border-left md:border-top lg:col-span-8">
        <h3 class="text-3xl font-bold uppercase font-body mb-5">Expériences</h3>
        <section class="experiences 2xl:grid 2xl:grid-cols-2 2xl:gap-6">
            <ExperienceItem v-for="(item, i) in experiences" :key="i" :experience="item" />
        </section>
    </article>
</template>

<script setup>
const experiences = reactive([
    {
        title: 'Développeur front-end',
        company: 'O\'Communication',
        date: '9.2023 - Présent',
        tasks: [
            'Développement d\'interfaces avec les frameworks Nuxt/Vue', 
            'Implémentation d’APIs optimisées avec le pôle back-end',
            'Intégration complète de thèmes WordPress mobile-first',
            'Création de fonctionnalités dédiées à l’accessibilité',
            'Réalisation d’animations avec GSAP ou Javascript'
        ]
    },
    {
        title: 'Développeur web',
        company: 'O\'Communication, alternance',
        date: '9.2022 - 8.2023',
        tasks: [
            'Création de sites vitrines responsive avec Bootstrap et SCSS',
            'Développement intégral de back-office sous WordPress',
            'Tests de compatibilité cross-browser et cross-platform',
            'Intégration de newsletters pour différentes messageries',
            'Conception de maquettes mobiles avec les designers'
        ]
    },
    {
        title: 'Développeur web',
        company: 'CHU de Lille, stage',
        date: '7.2022 - 8.2022',
        tasks: [
            'Reprise et développement d’une application sous Symfony',
            'Utilisation de frameworks CSS pour une intégration efficace',
            'Déploiement de branches et commits pour l’organisation entre développeurs',
            'Participation aux cérémonies Agile Scrum'
        ]
    }
])
</script>