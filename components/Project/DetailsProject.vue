<template>
    <section class="container">
        <!-- {{ chapters }} -->
        <ChapterProject v-for="(item, i) in chapters" :chapter="item" :key="i" />
    </section>
</template>

<script setup>
const chapters = computed(() => useContentStore().projectContent.content );
/* 
const chapters = reactive({
    'Difficulties': {
        content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid minus cum nostrum qui libero quibusdam eligendi asperiores vitae vero facilis, minima doloremque ad in optio dolore officia animi corrupti!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, explicabo!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis ipsa, nobis, suscipit tenetur nam, dolore eaque adipisci veritatis quas placeat quibusdam accusamus dolores veniam repudiandae. Placeat voluptas tenetur vero consectetur blanditiis veritatis? Ipsum asperiores, nam voluptatem id quos mollitia illo doloribus vel harum modi quod maiores tempora, commodi enim tempore ex rem nostrum vero tenetur nesciunt necessitatibus? A minima recusandae perferendis aliquam quae fuga magnam consectetur placeat eligendi praesentium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum at distinctio non vero dicta illum molestias consequuntur assumenda commodi unde rem, facilis itaque corrupti, veritatis nulla inventore sunt ad? Perferendis non hic autem rerum, ratione sapiente reiciendis? Alias pariatur, natus a iure ipsa maxime repellat quas ratione magni voluptate eligendi?</p>
        `,
        img: '/media/img/projects/bpp/bpp-cover.png',
        alt: 'Texte alternatif',
    },
    'Background': {
        content: `
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid minus cum nostrum qui libero quibusdam eligendi asperiores vitae vero facilis, minima doloremque ad in optio dolore officia animi corrupti!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, explicabo!</p>
        `,
    }
}) */
</script>