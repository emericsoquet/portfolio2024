<template>
    <section class="hero">

        <div class="container grid auto-rows-max content-center my-20 md:my-48">
            <h1>
                <span class="main-suptitle uppercase font-sub block">{{ content?.name }}</span>
                <span class="main-title font-heading font-bold block">{{ content?.role }}</span>
            </h1>
    
            <p class="text-2xl xs:text-3xl md:text-4xl font-sub my-8 md:my-10 md:mt-16 font-light lg:max-w-4xl">
                {{ content?.introduction }}
            </p>
    
            <div class="hero__infos grid gap-6 sm:grid-flow-col sm:gap-10 sm:justify-start md:gap-20">
                <p class="hero__status uppercase leading-5 md:leading-5 md:text-lg font-heading pl-14">
                    {{ content?.location }}<br />
                    {{ content?.situation }}
                </p>
    
                <NetworksList extraClasses="hero__networks" :label="networksLabel" :networksList="networksList"></NetworksList>
    
            </div>
        </div>

    </section>
</template>

<script setup>
const content = computed(() => useContentStore().getChoosenHome.hero);

const networksLabel  = computed( () => useContentStore().getChoosenGeneral?.networks?.label );
const networks = computed( () => useContentStore().getSharedGeneral.networks );

const networksList = computed( () => {

    if(!networks.value)
        return [];

    return networks.value.map( network => {

        let alt = 'Logo de ' + network.label;
        if(useContentStore().lang === 'en')
            alt = 'Logo of ';

        return {
            logoAlt: alt,
            ...network
        }
    });

});
</script>