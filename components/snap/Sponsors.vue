<template>
    <div
            class="grid grid-cols-4 text-sm gap-3  cursor-pointer md:justify-between   lg:text-2xl   lg:gap-4 transition ease-in-out   ">
            <img class=" sm:px-6 object-contain hover:text-sm hover:px-2 hover:-translate-y-1 hover:scale-150 hover:duration-150"
                v-for="image in sponsors" :src="`/assets/snap/${image}`" alt="">
        </div>
</template>

<script setup>

const sponsors = ref(['client-databiz.svg', 'client-audiophile.svg', 'client-meet.svg', 'client-maker.svg'])

</script>