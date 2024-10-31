<template>
    <section class="hero">

        <div class="container grid auto-rows-max content-center my-20 md:my-48">
            <h1>
                <span class="hero__suptitle uppercase font-sub block">Emeric Soquet</span>
                <span class="hero__title font-heading font-bold block">Frontend developer</span>
            </h1>
    
            <p class="text-2xl xs:text-3xl md:text-4xl font-sub my-8 md:my-10 md:mt-16 font-light lg:max-w-4xl">With a taste for design and interaction. It’s crystal clear, my pursuit is to make your websites as polished as a diamond.</p>
    
            <div class="hero__infos grid gap-6 sm:grid-flow-col sm:gap-10 sm:justify-start md:gap-20">
                <p class="hero__status uppercase leading-5 md:leading-5 md:text-lg font-heading pl-14">
                    Based in Paris<br />
                    Open for new opportunities
                </p>
    
                <div class="hero__networks pl-5 pr-4 py-3 rounded-md w-max flex items-center">
                    <p class="font-heading font-semibold tracking-wider mr-10 md:text-lg">Follow me</p>
                    <div class="hero__networks-list flex gap-2">
                        <a  v-for="(network, i) in networks"
                            :key="i"
                            :class="`hero__network cursor-pointer bg-base bg-opacity-20 aspect-square w-8 rounded-md flex items-center justify-center ${ network.label === 'GitHub' ? 'p-1.5' : 'p-2' }`"
                            :href="network.link">
                            <img :src="network.img" :alt="network.label" class="cursor-pointer">
                        </a>
                    </div>
                </div>
    
            </div>
        </div>

    </section>
</template>

<script setup>
import LinkedInLogo from '~/assets/media/logo/linkedin-logo.svg';
import GitHubLogo   from '~/assets/media/logo/github-logo.svg';


const networks = reactive([
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/emeric-soquet/', img: LinkedInLogo },
    { label: 'GitHub', link: 'https://github.com/emericsoquet', img: GitHubLogo }
])
</script>