<template>
    <div class="min-h-screen bg-[#141414] sm:flex sm:justify-center py-7 sm:py-12">

        <div class="rounded-xl bg-[#1F1F1F] flex flex-col items-center pb-5 mx-3 px-3  sm:px-12">

            <img class="rounded-full size-[88px] sm:size-[100px] text-center mt-10 mb-5 "
                src="/assets/avatar-jessica.jpeg" alt="profile Image">
            <h1 class="text-white text-center font-semibold text-2xl mb-2">{{ data.name }}</h1>
            <h2 class="text-[#C5F82A] text-sm  text-center font-semibold">{{ data.location }}</h2>
            <h3 class="text-white font-light mt-5 text-center mb-6">"{{ data.position }}."</h3>
            <div class="flex flex-col space-y-4  justify-center">
                <a v-for="social in data.socialLinks" :href='social.link' target="_blank" 
                    class="text-white focus:bg-[#C5F82A] focus:text-black active:bg-[#C5F82A] hover:delay-100 hover:bg-[#C5F82A] hover:text-black text-center py-3 cursor-pointer   rounded-lg bg-[#333333] w-[304px] h-[45px]">{{
                    social.name }}
                </a>
            </div>


        </div>
    </div>
</template>
<script setup>

const data = {
    name: 'Jessica Randall',
    location: 'London, United Kingdom',
    position: 'Front-end developer and avid reader',
    socialLinks: [
        {
            name: 'GitHub',
            link: 'https://github.com/VaalGeek'
        },
        {
            name: 'Frontend Mentor',
            link: 'https://www.frontendmentor.io/profile/VaalGeek'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/marvin-ranyaole-b65aa729'
        },
        {
            name: 'Twitter',
            link: 'https://www.linkedin.com/in/marvin-ranyaole-b65aa729'
        },
        {
            name: 'Instagram',
            link: 'https://www.linkedin.com/in/marvin-ranyaole-b65aa729'
        }
    ]



}
</script>