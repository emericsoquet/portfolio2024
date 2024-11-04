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
    
                <NetworksList extraClasses="hero__networks"></NetworksList>
    
            </div>
        </div>

    </section>
</template>

<script setup>

</script>