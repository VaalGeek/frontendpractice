<template>
    <div @click="checkItem"
        :class="`flex relative   mb-2 lg:ml-4  lg:px-5 px-3 py-5 cursor-pointer ${item.status === Status.Unread ? 'bg-[#F6FAFE] rounded-lg' : 'bg-white '} `">
        <img class="lg:size-12 size-8 mr-2" :src="`${item.user.avator}`" :alt="`${item.user.name} image`">


        <h1 class="lg:text-md text-sm ">


            <span class="font-bold "> {{ item.user.name }} </span>



            <span class="text-gray-500" v-if="item.action == 'joined' || item.action == 'commented'"> has
            </span> <span class="text-gray-500"> {{ item.action }} </span>



            <span class="text-gray-500" v-if="item.action == 'reacted'"> 
                 to your recent post 
                <span class="font-bold relative">
                    {{item.post }}
                    <div v-if="item.status == Status.Unread" class="absolute -right-3  bottom-1 rounded-full size-2 bg-[#F65351]"/>
                   
                </span> 
            </span>


            <span class="text-gray-500 relative" v-if="item.action == 'followed'"> 
                
                you
                <div v-if="item.status == Status.Unread" class="absolute -right-3  bottom-1 rounded-full size-2 bg-[#F65351]"/>
            </span>

            <span class="text-gray-500" v-if="item.action == 'joined'"> your group 
                <span class="font-bold relative">
                    {{item.group }}
                    <div v-if="item.status == Status.Unread" class="absolute -right-3  bottom-1 rounded-full size-2 bg-[#F65351]"/>
                </span> 
                
            </span>
            <span class="text-gray-500 relative" v-if="item.action == 'sent'"> 
                you a private message
                <div v-if="item.status == Status.Unread" class="absolute -right-3  bottom-1 rounded-full size-2 bg-[#F65351]"/>
            </span>
            <span class="text-gray-500 " v-if="item.action == 'commented'"> 
                on your picture
                <div v-if="item.status == Status.Unread" class="absolute -right-3  bottom-1 rounded-full size-2 bg-[#F65351]"/>
                <img  class="absolute lg:size-12 size-8 bottom-7 lg:top-0 right-2" :src="`${item.image}`" alt="">
            </span>
            <span class="text-gray-500" v-if="item.action == 'left'"> the group 
                <span class="font-bold text-gray-500 relative">
                    {{item.group }}
                    <div v-if="item.status == Status.Unread" class="absolute -right-3  bottom-1 rounded-full size-2 bg-[#F65351]"/>
            </span> 
                
            </span>
           
            <h5 class=" text-gray-500">{{ item.time }} ago</h5>
            
            <div v-if="item.openMsg && item.message"
                :class="`ring-1 px-3 ring-gray-400 rounded-sm py-3 mt-2  hover:delay-200 hover:bg-[#DDE7EE] ${item.openMsg === true ? 'transition ease-in delay-1000 duration-1000 translate-x-0' : '-translate-x-28'}`">
                {{ item.message }}
            </div>
           
        </h1>



        

    </div>

</template>

<script setup lang="ts">

import { Status, type INotification } from '~/Interface/INotification';
const props = defineProps<{ item: INotification }>();
let openMsg = ref(false);
const emit = defineEmits(['toggleOpenMsg'])
function checkItem() {
    props.item.openMsg = true;
    if (props.item.status === Status.Unread) {
        props.item.status = Status.Read
    }
    emit('toggleOpenMsg', props.item.id);
}
</script>