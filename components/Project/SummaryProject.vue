<template>
    <section class="project__summary">

        <div class="container">
            <div class="grid">
                <figure class="project__cover">
                    <img src="~/assets/media/projects/bpp/bpp-cover.png" alt="">
                </figure>
        
                <article class="summary mt-10 pt-8 pb-8">
                    <h2 class="text-3xl font-light uppercase font-body mb-5 md:text-5xl">Summary</h2>
                    <div class="summary__content content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus, nostrum animi modi cumque neque eum odio? Facere, corporis eaque consequuntur officia iste, dolorum quis soluta minus mollitia, molestiae laboriosam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt quidem obcaecati quisquam, optio quae.</p>
                    </div>
                </article>
            </div>
        </div>

        <ul class="project__skills">
            <li :key="i" v-for="(skill, i) in skills"
                class="flex w-full items-center px-5 py-5 border-bottom">
                <span class="font-sub font-semibold text-2xl uppercase">
                    {{ skill }}
                </span>
            </li>
        </ul>

    </section>
</template>

<script setup>
const skills = reactive([
    'WordPress', 
    'Javascript', 
    'SCSS',
    'GSAP'
])
</script>