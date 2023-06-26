<template>
<div id="MessageRow">
    <div class="
              border-b
              hover:border-gray-200
              hover:border-y-2
              hover-border-x-2
              cursor-pointer">
        <div class="flex items-center px-4 py-2">
            <div class="flex items-center">
                <component :is="CheckboxBlankOutline" :size="19" filcolor="#636363" />

                <StarOutlineIcon :size="19" filcolor="#636363" class="ml-4" />
            </div>
            <div class="flex items-center w-full">
                <router-link to="email/message" class="w-full">
                    <div class="flex items-center justify-between">
                        <div class="
                              flex 
                              items-centers
                              w-full
                            ">
                            <div class="text-sm ml-4 font-semibold truncate-from">
                                {{from}}
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="text-sm mr-1.5 font-semibold  truncate-subject">
                                        {{subject}}
                                    </div>
                                    <div class="text-sm mr-1.5 text-gray-500 font-semibold truncate-body">
                                       - {{body}}...
                                    </div>
                            </div>
                        </div>
                        <div class="text-right truncate w-full mr-4 text-xs font-semibold">{{ time }}</div>
                    </div>

                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import {
    toRefs,
    defineProps
} from 'vue';
import CheckboxBlankOutline from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue'

const props = defineProps({
    from: String,
    subject: String,
    body: String,
    time:String,
})
// let icon = null

const {
    from,
    subject,
    body
} = toRefs(props)
</script>
<style lang="scss">

.truncate-from{
    width:170px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
}

.truncate-subject{
    max-width:200px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
}

.truncate-body{
    max-width:400px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
}
</style>
