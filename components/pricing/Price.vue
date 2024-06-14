<template>
   
        <div
            :class="` ${item.pColor == 'black' ? 'bg-white py-6 mt-8 rounded-xl lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-md lg:rounded-br-md' : 'bg-gradient-to-b from-[#A2A8F0] to-[#6B70DD] mt-8 md:mt-0 lg:mt-0 py-14 rounded-xl'}  w-auto px-5   shadow-xl`">


            <h1 :class="`${item.pColor == 'black' ? 'text-gray-500' : 'text-white'} text-lg font-bold  text-center`">
                {{ item.name }}
            </h1>

            <div :class="`${item.pColor == 'black'?'text-gray-800 ':'text-white'} mt-2 text-center flex justify-center`">
                <h5 class="text-3xl font-bold pt-2">$</h5>
                <h5 class=" text-5xl font-bold">
                    <span class="transition-all duration-1000" v-if="toggle">
                        {{ item.price.yearly }}
                    </span>
                    <span class="transition-all duration-1000" v-if="!toggle">
                        {{ item.price.monthly }}
                    </span>
                   
                </h5>
            </div>

            <ul :class="`font-bold ${item.pColor === 'black' ? 'text-gray-500' : 'text-white'} w-64 text-center  space-y-4 divide-y`">
                <li class="pt-2"></li>
                <li class="pt-2">{{ item.storage }}</li>
                <li class="pt-2">{{ item.users }}</li>
                <li class="pt-2">{{ item.speed }}</li>
                <li class="pt-2"></li>
            </ul>


         

            <button
                :class="`${item.pColor == 'black' ? 'text-gray-500 font-semibold bg-gradient-to-r from-[#A1A6EF] to-[#6D73DF] hover:ring-1 hover:ring-[#6D73DF] hover:from-white hover:to-white hover:text-[#6D73DF] ' : ' bg-white hover:transition-all hover:ring-1 hover:ring-white hover:bg-[#6E73DE] hover:text-white  text-gray-600'} mt-5 py-2 uppercase rounded-md w-full`">Learn
                More</button>



        </div>


</template>

<script setup lang="ts">
import type { IPrice } from '~/Interface/IPrice';
const props = defineProps<{ item: IPrice,toggle:boolean }>()

</script>