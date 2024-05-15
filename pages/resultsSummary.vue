<template>
    <div class="min-h-screen flex flex-col  sm:justify-center sm:items-center sm:mx-5 lg:mx-0 ">

        <div class=" grid lg:grid-cols-[350px_400px]  sm:grid-cols-2 sm:shadow-2xl  sm:rounded-3xl sm:h-full">

            <div
            class="  bg-gradient-to-t  from-[#392EEC] to-[#8a75e5] flex flex-col py-1 w-full sm:flex-1 sm:h-full sm:rounded-3xl    px-5 rounded-b-3xl">
            <h1 class="text-gray-300 text-center mt-3 text-lg font-bold"> Your Results</h1>
            <div class="flex  justify-center">
                <div
                    class="flex flex-col   h-[130px] w-[130px] justify-center rounded-full bg-gradient-to-b from-[#5025CD] to-[#705EE7] mt-8">
                    <p class="text-center  text-5xl font-bold text-white">76</p>
                    <p class="text-small mt-4 text-center text-gray-400">of 100</p>
                </div>
            </div>
            <h1 class="text-white text-center text-2xl font-bold mt-8">Great</h1>
            <p class="mt-2 text-white sm:text-lg text-wrap text-center pb-10 px-10">You scored higher than 65% of the people who
                have taken these tests.</p>

            </div>

            <div class="px-5 text-2xl font-bold mt-5 lg:col-span-1  text-gray-950 ">
                <h1 class="px-4">Summary</h1>
                <div class="flex flex-col mt-4 px-4 gap-3">
                    <div class="flex justify-between  p-5 bg-[#FFF2F2] rounded-lg">
                        <div class="flex flex-row gap-2">
                            <Icon class="text-[#dbb3b3] " name="mdi:lightning-bolt"></Icon>
                            <p class="text-sm font-semibold rounded-md">Reactions</p>
                        </div>

                        <h1 class="text-sm font-semibold rounded-md">80/100</h1>
                    </div>
                    <div class="flex justify-between  p-5 bg-[#FFFCF1] rounded-lg">
                        <div class="flex flex-row gap-2">
                            <Icon class="text-[#f1e1a4] " name="memory:coin-platinum"></Icon>
                            <p class="text-sm font-semibold rounded-md">Memory</p>
                        </div>

                        <h1 class="text-sm font-semibold rounded-md">92/100</h1>
                    </div>

                

                    <div class="flex justify-between  p-5 bg-[#F2FBFA] rounded-lg">
                        <div class="flex flex-row gap-2">
                            <Icon class="text-[#b9e3df] " name="memory:chat-processing"></Icon>
                            <p class="text-sm font-semibold rounded-md">Verbal</p>
                        </div>

                        <h1 class="text-sm font-semibold rounded-md">61/100</h1>
                    </div>

                    <div class="flex justify-between  p-5 bg-[#F3F3FF] rounded-lg">
                        <div class="flex flex-row gap-2">
                            <Icon class="text-[#9898e8] " name="memory:eye"></Icon>
                            <p class="text-sm font-semibold rounded-md">Visual</p>
                        </div>

                        <h1 class="text-sm font-semibold rounded-md">72/100</h1>
                    </div>

                    <button class="bg-[#303B5A] rounded-full text-white pt-3 pb-3 mt-3 mb-5">Continue</button>
                </div>
            </div>
        </div>

      


    </div>
</template>
<script setup>
</script>