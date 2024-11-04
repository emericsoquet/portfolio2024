<template>
    <footer class="footer mt-20 pb-10 container flex flex-wrap justify-end" ref="footer">

        <NetworksList extraClasses="footer__cell lg:flex-1 lg:border-r-0"></NetworksList>

        <div class="footer__cell xs:flex-1 xs:border-r-0 lg:justify-center">
            <p class="font-heading uppercase">Icons by <a href="#">@Maxim Kulikov</a></p>
        </div>
        <div class="footer__cell xs:flex-1 lg:justify-center">
            <p class="font-heading uppercase">Design & made with love</p>
        </div>

        <FooterArrow ref="footerArrow"></FooterArrow>

    </footer>
</template>

<script setup>
const footer = ref(null);
const footerArrow = ref(null);

onMounted( () => {

    // get topArrow from child component via refs : FooterArrow
    const topArrow = footerArrow.value.topArrow;

    // when the scroll is above footer, the arrow will be fixed
    const handleScroll = () => {
        const footerTop = footer.value.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if((footerTop) > windowHeight)
            topArrow.classList.add('btn-fixed');
        else
            topArrow.classList.remove('btn-fixed');
    }

    // check scroll at launch but also when user is scrolling the page
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    onUnmounted( () => {
        window.removeEventListener('scroll', handleScroll);
    })

});
</script>