<template>
    <div class="md:flex-col ">

        <div  class="flex md:gap-1 gap-3 mx-2 relative">
            <h5 class="text-center text-xl md:text-sm text-gray-600 focus-within:text-black cursor-pointer">{{ item.name }}</h5>
            <Icon v-if="item.children"  @click="expand = !expand" :class="`${!expand ? 'rotate-0' : 'rotate-180'} text-black mt-2 md:mt-1 cursor-pointer`" name="ep:arrow-down-bold"></Icon>
        </div>

        <div v-if="expand && item.children.length>0" :class="`cursor-pointer md:shadow-2xl md:flex-col md:ml-5   md:rounded-2xl md:absolute  md:px-10 md:py-2 md:mt-5  ease-out delay-150 duration-300`">
            <div v-for="i in item.children" class="flex group mb-5  md:group-hover:3    gap-3">
                <Icon v-if="i.icon" :class="`${i.icon.color} transition ease-in-out   group-hover:text-xl group-hover:-translate-y-1 group-hover:scale-150 group-hover:duration-150 md:text-sm text-xl  mt-1`" :name="i.icon.name"></Icon>
                <h5 class="text-xl md:text-sm text-gray-600 group-hover:text-black">{{ i.name }}</h5>
            </div>
        </div>

    </div>

</template>
<script setup>
    let expand = ref(false);
    const props = defineProps(['item']);
</script>