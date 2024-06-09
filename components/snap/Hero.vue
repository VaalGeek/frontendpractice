<template>
    <div  class="grid gap-14 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 md:gap-14 ">
        <div class=" order-last md:order-first lg:order-first z-10 lg:flex md:flex-col md:flex lg:flex-col md:pt-28 lg:pt-44  lg:gap-10 md:gap-10">
            <h1 class="text-center text-4xl mx-5 md:mx-0 lg:mx-0 font-bold md:text-left lg:text-7xl md:text-5xl md:font-bold lg:font-bold lg:pr-2 ">
                Make <br class="hidden lg:block md:block ">remote work
            </h1>
            <p class="mx-5 md:mx-0 lg:mx-0  mt-5 text-lg text-center md:text-left lg:text-left md:mt-0 lg:mt-0 lg:max-w-md md:max-w-sm lg:text-xl md:text-lg text-gray-800 ">
                Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
                productivity soar.
            </p>
            <div class=" mt-8 lg:mt-0 md:mt-0 flex justify-center md:justify-start lg:justify-start">
                <button
                class=" md:w-fit text-center font-semibold text-white  bg-black py-3 px-10 text-lg rounded-xl  hover:text-black hover:bg-white hover:ring-1 hover:ring-black">Learn
                more</button>
            </div>
           
            <Sponsors class=" lg:pt-20 lg:py-0 py-14 mx-3 lg:mx-0 lg:justify-start md:hidden lg:flex"/>
        </div>
        <div class="z-10">
            <img class="hidden md:flex lg:flex lg:pl-10 md:pl-5    lg:py-10 md:py-14 lg:w-[520px] object-cover" src="/assets/snap/image-hero-desktop.png" alt="">
            <img class="md:hidden mt-7 lg:hidden object-cover" src="/assets/snap/image-hero-mobile.png" alt="">
        </div>
    </div>
</template>

<script setup>
    import Sponsors from './Sponsors.vue';
</script>