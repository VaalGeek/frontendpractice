<template>
    <div class="min-h-screen bg-[#1F2632] flex justify-center items-center px-5">

        <div
            class="bg-[#323A49] rounded-xl relative pb-10 py-5 h-auto max-w-xl flex flex-col justify-center items-center md:max-w-lg">



            <h1 class="text-[#52FFA8] text-lg font-semibold uppercase">Advice #{{ advice.slip.id }}</h1>
            <div class="rounded-full h-[3px] text-left bg-[#323A49] w-20 top-40">
                <div class="progress" :style="`width:${progress}%;`"></div>
            </div>
           
            <h5
                class="text-white lg:text-2xl px-5 text-wrap text-center font-bold lg:mx-20 py-3 transition-all ease-in duration-100 delay-200">

                "{{ advice.slip.advice }}"

            </h5>
            <img class="hidden md:flex lg:flex mb-3" alt="desktop divider"
                src="/assets/advice/pattern-divider-desktop.svg" />
            <img class="mb-3 lg:hidden md:hidden" alt="mobile divider"
                src="/assets/advice/pattern-divider-mobile.svg" />
            <div @click="fetchAdvice"
                class="rounded-full absolute -bottom-5 p-3  bg-[#52FFA8] cursor-pointer hover:shadow-inner-[#52FFA8]   hover:shadow-[#52FFA8] hover:shadow-2xl animate-pulse hover:animate-none">
                <img class="" src="/assets/advice/icon-dice.svg" alt="dice icon">
            </div>



        </div>


    </div>
</template>

<script setup lang="ts">

const progress = ref(0);

const { data, pending }: any = await useFetch("https://api.adviceslip.com/advice", {
    method: 'GET',
    watch: false,

});
let advice = ref(JSON.parse(data.value))

onMounted(() => {
    let interval = setInterval(async () => {
        progress.value += 5;
        if (progress.value >= 100) {
            //clearInterval(interval);
            await fetchAdvice()
        }
    }, 1000)
});



async function fetchAdvice() {

    const adviceVal = await fetch("https://api.adviceslip.com/advice", {
        method: 'GET',


    });
    advice.value = await adviceVal.json();
    progress.value = 0

}


</script>

<style scoped>
@keyframes progress {
    0% {
        @apply bg-gray-600;
    }

    50% {
        @apply bg-gray-600;
    }

    75% {
        @apply bg-gray-600;
    }

    100% {
        @apply bg-gray-600;
    }
}

.progress {
    @apply h-[3px] rounded-full transition-all ease-in-out duration-150;
    animation: progress 1s infinite linear
}
</style>