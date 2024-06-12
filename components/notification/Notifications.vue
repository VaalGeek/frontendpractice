<template>
    <div class="bg-white lg:rounded-2xl lg:shadow-lg  lg:max-w-3xl lg:my-16 px-3  lg:mx-10 lg:px-7 pt-4">

        <div class="flex flex-row justify-between lg:pt-5">
            <div class="flex gap-0 lg:gap-2">
                <h1 class="lg:font-semibold font-bold lg:text-2xl lg:text-start">
                    Notifications
                </h1>
                <span class="bg-[#092A69] lg:mb-5  scale-75  -translate-y-1   text-white px-4 lg:px-3 py-1 lg:text-lg font-bold text-center rounded-lg">{{
                    unread.length }}</span>
            </div>
            <h1 @click="markAllAsRead"
                :class="`lg:text-xl text-md text-gray-500 font-medium lg:font-light ${unread.length !== 0 ? 'cursor-pointer' : 'cursor-not-allowed'} `">
                Mark all as read</h1>
        </div>

        <div class="mt-5 z-30">
            <Notification @toggleOpenMsg="toggleOpenMsg" :key="item.id" :item="item" v-for="item in items" />
        </div>
    </div>
</template>

<script setup lang="ts">

import type { INotification } from '~/Interface/INotification';
import { Status } from '~/Interface/INotification';
import Notification from './Notification.vue';

const items = ref<INotification[]>([
    {
        id: '0',
        action: 'reacted',
        post: 'My first tournament today!',
        status: Status.Unread,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde exercitationem vel voluptatibus natus itaque maiores ducimus aliquam? Sed in ipsam eaque aperiam laudantium.',
        time: '1m',
        user: {
            name: 'Mark Webber',
            avator: '/assets/notification/avatar-mark-webber.webp'
        },
        openMsg: false,
    },

    {
        id: '1',
        action: 'followed',
        status: Status.Unread,
        time: '5m',
        user: {
            name: 'Angela Gray',
            avator: '/assets/notification/avatar-angela-gray.webp'
        },
        openMsg: false,
    },

    {
        id: '2',
        action: 'joined',
        status: Status.Unread,
        group: 'Chess Club',
        user: {
            name: 'Jacob Thompson',
            avator: '/assets/notification/avatar-jacob-thompson.webp'
        },
        time: '1 day',
        openMsg: false,
    },


    {
        id: '3',
        action: 'sent',
        status: Status.Read,
        message: 'Hello Marvin, thanks for taking part in this insightfull challenge, you will really learn a lot!',
        user: {
            name: 'Rizky Hasanuddin',
            avator: '/assets/notification/avatar-rizky-hasanuddin.webp'
        },
        time: '5 days',
        openMsg: false,
    },

    {
        id: '4',
        action: 'commented',
        status: Status.Read,
        image: '/assets/notification/image-chess.webp',
        user: {
            name: 'Kimberly Smith',
            avator: '/assets/notification/avatar-kimberly-smith.webp'
        },
        time: '1 week',
        openMsg: false,
    },

    {
        id: '5',
        action: 'reacted',
        status: Status.Read,
        post: '5 end-game strategies to increase your win rate',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde exercitationem vel voluptatibus natus itaque maiores ducimus aliquam? Sed in ipsam eaque aperiam laudantium.',
        user: {
            name: 'Nathan Peterson',
            avator: '/assets/notification/avatar-nathan-peterson.webp'
        },
        time: '2 weeks',
        openMsg: false,
    },

    {
        id: '6',
        action: 'left',
        status: Status.Read,
        group: 'Chess Club',
        user: {
            name: 'Anna Kim',
            avator: '/assets/notification/avatar-anna-kim.webp'
        },
        time: '2 weeks',
        openMsg: false,
    },

]);

const unread = computed(() => {
    return items.value.filter(item => {
        return item.status === Status.Unread
    });
});

function toggleOpenMsg(itemId: INotification['id']) {
    for (let i = 0; i < items.value.length; i++) {
        if (items.value[i].id !== itemId) {
            items.value[i].openMsg = false;
        }
    }
}

function markAllAsRead() {

    if (unread.value.length !== 0) {
        for (let i = 0; i < items.value.length; i++) {
            items.value[i].status = Status.Read
        }
    }

}
</script>