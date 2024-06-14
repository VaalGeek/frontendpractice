<template>
    <div class="flex justify-items-center gap-4">

        <h5 class="lg:py-2 font-bold text-lg text-gray-400">Annual</h5>

        <div @click="toggleVal = !toggleVal" :class="` bg-gradient-to-r from-[#C7C9F5] to-[#696FDD] w-14 h-8 lg:w-20 lg:h-10 rounded-full flex px-1    `">

            <div @click.stop="toggleVal = !toggleVal"
                :class="`${toggleVal ? 'translate-x-0' : 'lg:translate-x-9 translate-x-6'} transition-all duration-200 text-center bg-white mt-1 size-6 lg:size-8  cursor-pointer rounded-full`" />
        </div>

        <h5 :class="`lg:py-2 font-bold text-lg text-gray-400`">Monthly</h5>

    </div>

</template>
<script setup lang="ts">

const emit = defineEmits(['toggled'])
let toggleVal = ref(false);


watch(toggleVal, (newVal) => {
   emit('toggled',newVal)
});


</script>