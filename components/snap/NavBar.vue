<template>
    <nav class="lg:flex  lg:justify-between ">
        <div class="lg:flex">
            <img src="/assets/snap/logo.svg"/> 
            <Menu class="lg:ml-5 hidden md:hidden"/>
        </div>
        <div class="lg:flex">
            <UserButtons class="md:hidden hidden lg:flex"/>
        </div>
        <div class="flex lg:hidden">
            <MenuButton/>
        </div>
        
    </nav>
</template>

<script setup>


import Menu from './Menu.vue';
import UserButtons from './UserButtons.vue';
import MenuButton from './MenuButton.vue';
</script>
