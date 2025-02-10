<template>
    <NuxtLink   :to="`/project/${ project?.id }`" 
                class="accordion__item py-10 px-4 block z-1" 
    >
        <div class="container flex items-start flex-col pointer-events-none">
            <span class="text-lg lg:text-xl pb-8 tracking-[1px] font-semibold underline underline-offset-8">{{ projectDate }}</span>
            <h3 class="uppercase font-heading font-semibold leading-[0.85] z-[1] w-full block tracking-[-4px]">{{  project.title }}</h3>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});

const projectDate = computed(() => {
    if (!props.project) return null;

    return getDates().getYear(props.project.date);
})
</script>