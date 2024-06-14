<template>
    <div class="relative  overflow-x-hidden   min-h-screen flex flex-col md:px-5 lg:gap-8 items-center  w-auto  bg-[#F7F7F9]  pb-8 lg:pb-0">
       
        <h1 class="z-10 font-bold text-3xl text-center mt-14 lg:mt-10 text-gray-500">Our Pricing</h1>

        <Switch class="z-10 lg:mt-0 mt-5" @toggled="toggledSwitch"/>
        <div class="z-10 mt-5  grid md:grid-cols-3  lg:grid-cols-3 lg:items-start md:items-start">
            <Price class="transition-all lg:hover:duration-500  duration-1000 lg:hover:-translate-y-7"  v-for="item in priceList" :toggle="toggle" :key="item.id"  :item="item"/>
        </div>
        <img class=" z-0 lg:right-32 absolute -right-[165px] -top-8   " src="/assets/pricing/bg-top.svg" alt="top background">
        <img class="hidden lg:flex absolute bottom-0 left-28 " src="/assets/pricing/bg-bottom.svg"
            alt="bottom background">
       


    </div>
</template>
<script setup lang="ts">

import Switch from '~/components/pricing/Switch.vue';
import Price from '~/components/pricing/Price.vue';


import {  type IPrice } from '~/Interface/IPrice';

let toggle = ref(false);

const setToggled = computed({
  // getter
  get() {
    return toggle.value
  },
  // setter
  set(newValue) {
    toggle.value = newValue
  }
});

function toggledSwitch(val:boolean){
    setToggled.value = val
}
const priceList = ref<IPrice[]>([
    {
        id: 0,
        name: 'Basic',
        price: {monthly:19.99,yearly:199.99},
        storage: '500 GB Storage',
        users: '2 Users Allowed',
        speed: 'Send up to 3 GB',
        pColor: 'black'
    },
    {
        id: 1,
        name: 'Professional',
        price: {monthly:24.99,yearly:249.99},
        storage: '1 TB Storage',
        users: '5 Users Allowed',
        speed: 'Send up to 10 GB',
        pColor: 'white'
    },

    {
        id: 2,
        name: 'Master',
        price: {monthly:39.99,yearly:399.99},
        storage: '2 TB Storage',
        users: '10 Users Allowed',
        speed: 'Send up to 20 GB',
        pColor: 'black'
    }

])


</script>