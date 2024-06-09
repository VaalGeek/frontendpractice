<template>
    <aside
        class="px-2 flex-col justify-between md:overflow-auto pt-16 fixed top-0 bg-white w-[239px] md:w-[280px] h-screen   ease-out delay-150 duration-300 rounded-tl-[15px]  rounded-bl-[15px]">
        <div class="flex-col pl-5">
            <MenuItem class="mb-5"v-for="item in menuItems" :item="item" />
        </div>
        
        <div class="py-36 flex flex-col justify-center">
            <h5 class="text-lg text-gray-500 text-center">Login</h5>
            <div class="border-2 border-gray-400 mt-5 bg-white rounded-xl py-2 text-center w-full">Register</div>
        </div>

    </aside>

</template>


<script setup>
import MenuItem from './MenuItem.vue';
let menuItems = ref([
    {
        name:'Features',
        children:[
            {
                name:'Todo List',
                icon:{name:'fa6-solid:list',color:`text-[#726CEE]`},
            },
            {
                name:'Calendar',
                icon:{name:'fa6-solid:calendar-day',color:'text-[#4BB1DA]'},
            },
            {
                name:'Reminders',
                icon:{name:'fa6-solid:bell',color:`text-[#EDD556]`},
            },
            {
                name:'Planning',
                icon:{name:'fa6-solid:clock',color:`text-[#8E4CB6]`},
            },
        ]
    },

    {
        name:'Company',
        children:[
            {
                name:'History'
            },
            {
                name:'Our Team'
            },
            {
                name:'Blog'
            },
          
        ]
    },
    {
        name:'Careers',
    },
    {
        name:'About',
    }

])
</script>
