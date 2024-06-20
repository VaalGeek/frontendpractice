<template>
    <div
        class="min-h-screen overscroll-contain    lg:flex lg:justify-center  lg:mx-[300px]  md:flex  lg:flex-col  md:flex-col  md:justify-center md:mx-[20px] mx-[20px] pb-5 ">

        <NavBar @sideNavToggled="openSideBar = !openSideBar" class="flex bg-white py-5 mt-10 sticky top-0 " />
        <SideNav
            :class="`${openSideBar ? 'translate-x-0 ' : 'translate-x-[750px]'}    md:flex  lg:hidden right-0 top-0  fixed transition-all duration-500`" />
        <BgOverlay
            :class="`${openSideBar ? 'translate-x-0 ' : 'translate-x-[790px]'} z-30   md:flex  lg:hidden right-0 top-0  fixed transition-all duration-0`" />
        <main class="  mt-10 lg:flex lg:gap-5 md:gap-5">
            <MainContent class="lg:mb-0 md:mb-10 mb-10" />
            <SideContent class="lg:mb-0 md:mb-10 mb-10" />
        </main>

        <Footer class="lg:mt-10" />
    </div>
</template>
<script setup>

const openSideBar = ref(false);

watch(openSideBar, (newSideBar) => {
    if (newSideBar) {
        document.body.classList.add("overflow-y-hidden")
    } else {
        document.body.classList.remove("overflow-y-hidden")
    }
})

import NavBar from '~/components/news/NavBar.vue';
import MainContent from '~/components/news/MainContent.vue';
import SideContent from '~/components/news/SideContent.vue';
import Footer from '~/components/news/Footer.vue';
import SideNav from '~/components/news/SideNav.vue';
import BgOverlay from '~/components/snap/BgOverlay.vue';

</script>
