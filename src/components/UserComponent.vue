<template>
<div id="UserComponent">
<img @click="openMenu = !openMenu"
     src="https://placehold.co/40"
     data-tooltip-target="tooltip-no-arrow-user"
     data-tooltip-placement="bottom"
     class="
     rounded-full cursor-pointer w-8
     "/>
     <div 
     v-show="!openMenu"
     id="tooltip-no-arrow-user"
     role="tooltip"
     class="
     inline-block 
        absolute 
        invisible 
        text-xs 
        z-10 
        py-1 
        px-2 
        font-medium 
        text-white 
        rounded-sm 
        shadow-sm 
        opacity-0 
        tooltip 
        bg-gray-600
        delay-150
     ">
    <div>Google Account</div>
    <div class="text-gray-300">
        Ronels Walker
    </div>
    <div class="text-gray-300">ronel.walker@gmail.com</div>
     </div>
     <div 
     v-show="openMenu"
     class="
     absolute
     z-10
     w-80
     right-2
     bg-white
     top-14
     rounded-lg
     ">
     <div class="w-full flex justify-center">
        <img src="https://placehold.co/70"
            class="rounded-full w-20 mt-4
            "/>
     </div>
     <div v-show="!openMenu" class="text-gray-700 w-full flex justify-center mt-2 text-lg">
        Ronel Walker
     </div>
     <div class="text-gray-700 w-full flex justify-center mt-2 text-sm pb-4 border-b">
        ronel.walker@gmail.com
     </div>
     <div class="text-gray-700 w-full flex justify-center mt-2 text-sm pb-4 border-b">
        <button class="
        bg-transparent
        text-xs
        hover:bg-gray-100
        text-gray-600
        font-semibold
        py-2
        px-4
        border
        border-gray-300
        rounded
        ">
        Sign Out Of Gmail
        </button>
     </div>
    
    </div>
</div>
</template>
<script setup>
import {ref} from 'vue'
let openMenu = ref(false)
</script>