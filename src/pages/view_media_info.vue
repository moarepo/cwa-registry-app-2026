<script lang="ts" setup>
 import {computed} from "vue"
 import { motion, AnimatePresence } from 'motion-v';
 import {useThemeComposable}  from "../composables/useComposables"
 import {dash_animation} from "../animations_config/anime_def"
 import {useMediaStore} from "../store/useMediaStore"

 const store = useMediaStore()
 let media_info = computed(()=>{ return store.get_media})
</script>

<template>
    <AnimatePresence>
        <motion.section
         class="flex w-full overflow-y-auto justify-center items-center lg:h-full"
         :class="useThemeComposable() ? ''
         :''"
        >
            <motion.div 
                :initial="dash_animation.initial"
                :animate="dash_animation.animate"
                :transition="dash_animation.transition"
                :exit="dash_animation.exist"
                class="flex flex-col space-y-1 p-1 lg:rounded-2xl rounded-2xl rounded-t-md border h-full w-full"
                :class="useThemeComposable() ? 'bg-Dark border-teal-900'
                :'bg-white border-teal-300'"
            >
                {{ media_info }}
            </motion.div>
        </motion.section>
    </AnimatePresence>
</template>