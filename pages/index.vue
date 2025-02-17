<template>
    <main>
        <HeroIntro></HeroIntro>
        <PaletteSelect></PaletteSelect>
        <AboutSection></AboutSection>
        <ResumeSection></ResumeSection>
        <SkillsList></SkillsList>
        <WorksSection></WorksSection>
        <AccordionSection></AccordionSection>
        <ContactSection></ContactSection>
    </main>
</template>

<script setup>
useHead({
    title: "Emeric Soquet - Développeur front-end",
    bodyAttrs: {
        class: 'home-page'
    }
});
</script>