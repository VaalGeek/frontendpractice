<template>
    <div class="max-h-full">

        <header class=" top-0  md:flex-row sticky py-3">

            <BgOverlay :class="`${!isOpen ? 'hidden' : 'block'}`" />
            <SideBar :class="`${!isOpen ? '-right-[257px]' : 'right-0'} z-40 md:hidden`" />
            <MenuBar class="hidden md:block"/>
            <img class="absolute md:px-16  px-2 left-0 py-2 sm:px-11 sm:py-5" src="/assets/snap/logo.svg" alt="">
            <button id="toggle-menu" @click="toggleMenu"
                class="z-50 absolute md:hidden right-1 py-2 px-2 sm:px-4 sm:py-5">
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
            <div id="hero" class="flex flex-col mt-20  sm:flex sm:gap-6 sm:flex-row-reverse">
                <img class="h-[241px] z-30  sm:px-10" src="/assets/snap/image-hero-mobile.png" alt="">
                <div class="sm:px-9">
                    <h1 class="text-4xl  text-center sm:text-start   text-wrap font-bold mt-8 px-1">Make <br
                            class="hidden sm:block"> remote work</h1>
                    <p class="text-center text-wrap text-gray-900 sm:text-lg text-md mt-8  px-2  sm:text-start">
                        Get your team in sync, no matter your location. Streamline processes, create team rituals, and
                        watch
                        productivity soar.
                    </p>
                </div>

            </div>
        </header>



        <div class="flex justify-center sm:justify-start sm:px-10 mt-5 sm:mt-10">
            <button
                class=" text-center font-semibold text-white mb-5 bg-black py-3 px-10 text-lg rounded-lg  hover:text-black hover:bg-white hover:ring-1 hover:ring-black">Learn
                more</button>
        </div>
        <div
            class="grid grid-cols-4 lg:justify-start justify-center lg:text-xl sm:items-start text-xs items-center py-10 gap-1 mx-5 transition ease-in-out   ">
            <img class="sm:px-6 hover:text-sm hover:px-2 hover:-translate-y-1 hover:scale-150 hover:duration-150"
                v-for="image in patrons" :src="`/assets/snap/${image}`" alt="">
        </div>





    </div>

</template>

<script setup>
import SideBar from '../components/snap/SideBar.vue';
import BgOverlay from '../components/snap/BgOverlay.vue';
import MenuBar from '../components/snap/Menu.vue'

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