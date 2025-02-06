<template>
    <footer class="footer mt-20 pb-10 container flex flex-wrap justify-end" ref="footer">

        <NetworksList extraClasses="footer__cell lg:flex-1 lg:border-r-0" :networksList="networksList" :label="networksLabel" />

        <div class="footer__cell xs:flex-1 xs:border-r-0 lg:justify-center">
            <p class="font-heading uppercase" v-html="iconsCredits"></p>
        </div>
        <div class="footer__cell xs:flex-1 lg:justify-center">
            <p class="font-heading uppercase">{{ content?.credits?.website }}</p>
        </div>

        <FooterArrow ref="footerArrow"></FooterArrow>

    </footer>
</template>

<script setup>
import LinkedInLogo from '~/assets/media/logo/linkedin-logo.svg';
import GitHubLogo from '~/assets/media/logo/github-logo.svg';
import LinkIcon from '~/assets/media/icons/icon-link.svg';

const footer = ref(null);
const footerArrow = ref(null);

const content = computed( () => useContentStore().getChoosenGeneral.footer );
const iconsLink = computed( () => {
    if(content.value)
        return content.value.credits.iconsLink;
} );
const iconsCredits = computed( () => {
    if(content.value && iconsLink.value) {
        const string = content.value.credits.icons;
        return string.replace('@Maxim Kulikov', `<a href="${iconsLink.value}" target="_blank">@Maxim Kulikov</a>`);
    }
});

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

const networksLabel  = computed( () => useContentStore().getChoosenGeneral?.networks?.label );
const networks = computed( () => useContentStore().getSharedGeneral.networks );

const networksList = computed( () => {

    if(!networks.value)
        return [];

    return networks.value.map(network => {

        let imgSrc;
        switch (network?.label) {
            case 'LinkedIn':
                imgSrc = LinkedInLogo;
                break;
            case 'GitHub':
                imgSrc = GitHubLogo;
                break;
            default:
                imgSrc = LinkIcon;
        }

        let alt = 'Logo de '
        if(useContentStore().lang === 'en')
            alt = 'Logo of ';

        return {
            logoAlt: alt + network.label,
            logoSrc: imgSrc,
            ...network
        }
    });

});
</script>