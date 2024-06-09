<template>
    <div class="bg-[#FAFAFA] min-h-screen">
        <div class=" lg:py-8 mx-0 md:mx-10 md:py-8   lg:mx-22">
            
            <NavBar class="mx-2 lg:mx-0 py-2 lg:mt-0 lg:sticky  lg:top-0 lg:py-2"/>
            <Hero class="lg:ml-36 md:mx-2"/>
            <Sponsors class="hidden lg:hidden md:flex md:mt-4"/>
            
        </div>
    </div>


</template>

<script setup>
import NavBar from '../components/snap/NavBar.vue';
import Hero from '../components/snap/Hero.vue';
import Sponsors from '../components/snap/Sponsors.vue';


</script>

<style scoped>
.menu-toggle {
    @apply [&>div::before]:translate-y-3 [&>div::before]:rotate-45 [&>div::after]:translate-y-3 [&>div::after]:-rotate-45 [&>div]:bg-transparent [&>div]:rotate-[720deg]
}
</style>