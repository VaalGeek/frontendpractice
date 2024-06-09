<template>
    <div class="md:flex-col">

        <ul class="list-none lg:relative md:static">
            <li class="flex md:gap-1  text-xl md:text-lg text-gray-600 gap-3 cursor-pointer mx-2 relative">
                {{ item.name }}
                <Icon v-if="item.children" @click="expand = !expand"
                :class="`${!expand ? 'rotate-0' : 'rotate-180'} text-black mt-2 md:mt-1 cursor-pointer`"
                name="ep:arrow-down-bold"></Icon>
            </li>
           
            <ul v-if="expand && item.children.length > 0"
                class="list-none cursor-pointer mt-5 lg:mt-0 pl-5 lg:shadow-2xl md:flex-col md:ml-5 lg:right-0    lg:rounded-2xl lg:absolute  md:px-10 md:py-2 md:mt-5  ease-out delay-150 duration-300">
                <li v-for="i in item.children" class="flex group  mb-5  md:group-hover:3 gap-3">
                    <Icon v-if="i.icon"
                    :class="`${i.icon.color} transition ease-in-out   group-hover:text-xl group-hover:-translate-y-1 group-hover:scale-150 group-hover:duration-150 lg:text-sm md:text-2xl  mt-1`"
                    :name="i.icon.name"/>
                    <h5 class="text-xl md:w-full lg:text-sm md:text-lg text-gray-600 group-hover:text-black">{{ i.name }}</h5>
                </li>
            </ul>

        </ul>

    </div>

</template>
<script setup>
let expand = ref(false);
const props = defineProps(['item']);
</script>