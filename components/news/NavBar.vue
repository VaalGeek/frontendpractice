<template>
    
    <div class="flex flex-row justify-between">
        <img class=" max-h-8"src="/assets/news/logo.svg" alt="logo">
       
        <div class="flex">
           
            <div class="z-50 transition-all duration-500 lg:hidden md:flex flex">
                <img v-if="!openSideBar" @click="sideNavToggle"  src="/assets/news/icon-menu.svg" alt="open-icon">
                <img  v-if="openSideBar" @click="sideNavToggle"  src="/assets/news/icon-menu-close.svg" alt="close-icon">
            </div>
           
            
            <ul class="lg:flex hidden md:hidden  lg:gap-9  text-sm text-gray-600 cursor-pointer">
                <li class="hover:text-orange-600">Home</li>
                <li class="hover:text-orange-600">New</li>
                <li class="hover:text-orange-600">Popular</li>
                <li class="hover:text-orange-600">Trending</li>
                <li class="hover:text-orange-600">Categories</li>
            </ul>
           
        </div>
    </div>
</template>
<script setup lang="ts">
    
    const emit = defineEmits(['sideNavToggled']);

    function sideNavToggle(){
        openSideBar.value = !openSideBar.value;
      
        emit('sideNavToggled')
    }
    const openSideBar = ref(false);

</script>