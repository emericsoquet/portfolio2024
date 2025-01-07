<template>
    <main>
        <HeroIntro></HeroIntro>
        <PaletteSelect></PaletteSelect>
        <AboutSection></AboutSection>
        <ResumeSection></ResumeSection>
        <SkillsList></SkillsList>
        <WorksSection></WorksSection>
        <ContactSection></ContactSection>
    </main>
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: 'home-page'
    }
})
</script>