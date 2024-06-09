<template>
    <div>
       
        <button id="toggle-menu" @click="toggleMenu" class="top-0 z-50 absolute lg:hidden right-1 py-2 px-2 sm:px-4 md:pt-5 md:pr-7">
            <div class="
        h-0.5 
        w-10 
        rounded-full
        bg-black  
        duration-500
        transition-all

        before:absolute
        before:h-0.5
        before:w-10
        before:content-['']
        before:bg-black
        before:rounded-full
        before:translate-y-3
        before:-translate-x-5
        before:duration-500
        before:transition-all

        after:absolute
        after:h-0.5
        after:w-10
        after:content-['']
        after:bg-black
        after:rounded-full
        after:translate-y-6
        after:-translate-x-5
        after:duration-500
        after:transition-all
    ">

            </div>
        </button>
        <SideBar :class="`${!isOpen ? '-right-[257px] md:-right-[297px]' : 'right-0'} z-40`" />
        <BgOverlay :class="`${!isOpen ? '-right-[457px] md:-right-[897px] ' : 'right-0 z-30'}`"/>
       
    </div>
</template>
<script setup>

import SideBar from './SideBar.vue';
import BgOverlay from './BgOverlay.vue';

let isOpen = ref(false);
const patrons = ref(['client-databiz.svg', 'client-audiophile.svg', 'client-meet.svg', 'client-maker.svg'])


function toggleMenu() {

    const menuToggle = document.querySelector('#toggle-menu');
    menuToggle.classList.toggle("menu-toggle");
    isOpen.value = !isOpen.value

}
</script>

<style scoped>
.menu-toggle {
    @apply [&>div::before]:translate-y-3 [&>div::before]:rotate-45 [&>div::after]:translate-y-3 [&>div::after]:-rotate-45 [&>div]:bg-transparent [&>div]:rotate-[720deg]
}
</style>