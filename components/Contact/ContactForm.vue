<template>
    <form class="form md:container">

        <fieldset>
            <ContactInput>
                <template #label>First name</template>
                <template #error></template>
            </ContactInput>
            <ContactInput>
                <template #label>Surname</template>
                <template #error></template>
            </ContactInput>
            <ContactInput>
                <template #label>Mail address</template>
                <template #error></template>
            </ContactInput>
            <ContactInput>
                <template #label>Object</template>
                <template #error></template>
            </ContactInput>
            <ContactInput>
                <template #label>Message</template>
                <template #error></template>
            </ContactInput>
        </fieldset>

        <fieldset class="md:flex md:flex-row-reverse md:items-center">
            <button type="submit" 
                    :class="`block w-full px-5 py-5 cursor-pointer
                    font-heading font-bold text-left text-2xl 
                    border-bottom
                    md:border-0 md:text-center
                    md:h-24 md:relative md:-right-0.5 md:px-0 md:w-3/12`">
                Submit
            </button>
            <div    :class="`general-error 
                    px-5 pt-5 font-lg 
                    md:pt-0 md:pl-0  md:h-24
                    md:flex md:items-center md:justify-end md:w-9/12
            `">
                Please check the fields marked as an error before trying sending your mail
            </div>
        </fieldset>
    </form>
</template>

<script setup>

</script>