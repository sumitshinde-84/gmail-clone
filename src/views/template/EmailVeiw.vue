<template>
<div id="EmailVeiw" class="bg-gray-50 h-screen">
    <div class="flex items-center p-2">
        <div class="logo-section flex justify-start items-center px-3.5">
            <IconComponent iconString="menu" iconColor="#636363" iconSize="19" text="Main menu" hoverColor="hover:bg-gray-200" class="-ml-2 mr-2" />
            <img width="106" src="../../../public/img/GmailLogo.png" />
        </div>

        <div class="flex w-full justify-between">
            <div class="input-width w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg">
                <IconComponent iconString="magnify" iconColor="#636363" iconSize="19" text="Search" hoverColor="hover:bg-gray-200" />
                <input placeholder="Search mail" class="
                w-full
                h-10
                border-none
                focus-ring-0
                border-transparent
                outline-none
                bg-gray-200
                placeholder-gray-900
            "/>
                <IconComponent iconString="tune" iconColor="#636363" iconSize="19" text="Show search options" hoverColor="hover:bg-gray-200" />
            </div>
            <div class="flex w-32 justify-between items-center ml-6">
                <IconComponent iconString="cog" iconColor="#636363" iconSize="19" text="Settings" hoverColor="hover:bg-gray-200" />
                <IconComponent iconString="apps" iconColor="#636363" iconSize="19" text="Google apps" hoverColor="hover:bg-gray-200" />
                <UserCompnent />
            </div>

        </div>
    </div>
    <div class="flex w-full justify-between">
        <div id="SideMenu" class="side-menu">
            <div class="
            flex
            items-center
            justify-center
            bg-sky-200
            w-36
            h-8
            mt-2
            rounded-2xl
            p-7
            cursor-pointer">

                <PencilOutlineIcon :size="25" class="mr-4" />
                <span class="text-sm">Compose</span>
            </div>
            <div class="my-5">
                <div class="
                bg-blue-100
                side-menu-item
                flex
                justify-between
                px-6
                py-1.5
                rounded-r-full
                ">
                    <div class="flex items-center">
                        <InboxIcon :size="17" />
                        <div class="text-sm pl-4 font-semibold">
                            Inbox
                        </div>
                    </div>
                    <div class="text-xs font-semibold">
                        26
                    </div>
                </div>
                <div class="flex justify-between px-6 py-1.5">
                    <div class="flex items-center">
                        <StarOutlineIcon :size="17" />
                        <div class="text-sm pl-4 ">Starred</div>
                    </div>
                </div>

                <div class="flex justify-between px-6 py-1.5">
                    <div class="flex items-center">
                        <ClockOutlineIcon :size="17" />
                        <div class="text-sm pl-4 ">Snoozed</div>
                    </div>
                </div>

                <div class="flex justify-between px-6 py-1.5">
                    <div class="flex items-center">
                        <SendOutlineIcon :size="17" />
                        <div class="text-sm pl-4 ">Sent</div>
                    </div>
                </div>
                <div class="flex justify-between px-6 py-1.5">
                    <div class="flex items-center">
                        <FileOutlineIcon :size="17" />
                        <div class="text-sm pl-4 ">Drafts</div>
                    </div>
                </div>
            </div>
            <!-- this is where the page changes -->
            <router-view/>
             <!-- this is where the page changes -->

        </div>
       
    </div>
</div>
</template>

<script setup>
import UserCompnent from '@/components/UserComponent.vue';
import IconComponent from '@/components/IconComponent.vue';
import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue';
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue';
import FileOutlineIcon from 'vue-material-design-icons/FileOutline.vue';
import SendOutlineIcon from 'vue-material-design-icons/SendOutline.vue';
import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue';
import PluseIcon from 'vue-material-design-icons/Plus.vue';

</script>

<style lang="scss">
#EmailVeiw {
    .logo-section {
        min-width: 250px;
    }

    .input-width {
        max-width: 700px;
    }

    .side-menu-item {
        width: 250px;

    }

    .side-menu {
        width: 300px;
    }
}
</style>
