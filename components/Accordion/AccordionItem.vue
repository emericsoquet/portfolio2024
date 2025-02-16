<template>
    <NuxtLink   :to="`/project/${ project?.id }`" 
                class="accordion__item py-10 px-4 block z-1" 
    >
        <div class="container flex items-start flex-col pointer-events-none">
            <span class="text-lg lg:text-xl pb-8 tracking-[1px] font-semibold underline underline-offset-8">{{ projectDate }}</span>
            <h3 class="uppercase font-body font-semibold leading-[0.85] z-[1] w-full block tracking-[-2px] relative">
                <span class="accordion__title">{{  project.title  }}</span>
                <span class="absolute left-0 top-0 accordion__title accordion__title--outline">{{  project.title  }}</span>
            </h3>
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