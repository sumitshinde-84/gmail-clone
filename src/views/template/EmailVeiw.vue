<template>
   <div id="EmailVeiw" class="bg-gray-50 h-screen">
    <div class="flex items-center p-2">
        <div class="logo-section flex justify-start items-center px-3.5">
            <IconComponent
            iconString="menu"
            iconColor="#636363"
            iconSize="19"
            text="Main menu"
            hoverColor="hover:bg-gray-200"
            class="-ml-2 mr-2"
            />
            <img width="106" src="../../../public/img/GmailLogo.png"/>
        </div>
        <div class="flex w-full justify-between">
            <div class="input-width w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg">
                <IconComponent
                    iconString="magnify"
                    iconColor="#636363"
                    iconSize="19"
                    text="Search"
                    hoverColor="hover:bg-gray-200"
            />
            <input placeholder="Search mail"
             class="
                w-full
                h-10
                border-none
                focus-ring-0
                border-transparent
                outline-none
                bg-gray-200
                placeholder-gray-900
            "/>
            <IconComponent
                    iconString="tune"
                    iconColor="#636363"
                    iconSize="19"
                    text="Show search options"
                    hoverColor="hover:bg-gray-200"
            />
            </div>
            <div class="flex w-32 justify-between items-center ml-6">
                <IconComponent
                    iconString="cog"
                    iconColor="#636363"
                    iconSize="19"
                    text="Settings"
                    hoverColor="hover:bg-gray-200"
            />
                <IconComponent
                    iconString="apps"
                    iconColor="#636363"
                    iconSize="19"
                    text="Google apps"
                    hoverColor="hover:bg-gray-200"
                />
                <UserCompnent/>
            </div>
        </div>
    </div>
    
   </div>
</template>
<script setup>
import UserCompnent from '@/components/UserComponent.vue'
import IconComponent from '@/components/IconComponent.vue';
</script>
<style lang="scss">
#EmailVeiw{
    .logo-section{
        min-width:250px;
    }
    
    .input-width{
        max-width:700px;
    }
}
</style>