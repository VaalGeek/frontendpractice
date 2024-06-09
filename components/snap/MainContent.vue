<template>
    <div class="flex justify-center sm:justify-start sm:px-10 mt-5 sm:mt-10">
        <button
            class=" text-center font-semibold text-white mb-5 bg-black py-3 px-10 text-lg rounded-lg  hover:text-black hover:bg-white hover:ring-1 hover:ring-black">Learn
            more</button>
    </div>
    <div
        class="grid grid-cols-4 lg:justify-start justify-center lg:text-xl sm:items-start text-xs items-center py-10 gap-1 mx-5 transition ease-in-out   ">
        <img class="sm:px-6 hover:text-sm hover:px-2 hover:-translate-y-1 hover:scale-150 hover:duration-150"
            v-for="image in patrons" :src="`/assets/snap/${image}`" alt="">
    </div>
</template>