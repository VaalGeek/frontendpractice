<template>
    <div class="lg:flex lg:gap-10">
        <div v-for="item in menuItems">
            <MenuItem  :item="item"/>
        </div>
       
    </div>

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
