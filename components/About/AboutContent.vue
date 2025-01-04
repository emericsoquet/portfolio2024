<template>
<article class="about__content py-10 md:px-5 md:pb-32 md:pt-16 md:col-span-2 lg:px-8">
    <h2 class="title lowercase mb-5">About me</h2>
    <p class="font-sub text-lg leading-relaxed mb-10">For three years, I’ve been working in a web agency as a integrator and front end developer. This role has always appealed most. Thus, I’m able to ally code and UX design. When building,  i’m thinking about what’s important for visitors : creative but still accessible and responsive web experiences. That’s what I love about my job!
    </p>

    <FunctionButton :action="openResume">Learn More</FunctionButton>

</article>
</template>

<script setup>
const openResume = () => {
    console.log('cv');
}
</script>