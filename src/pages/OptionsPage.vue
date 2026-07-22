<script lang="ts" setup>
import {motion} from 'motion-v'
import {useThemeComposable} from '../Composables/useComposables'
import {dash_animation} from '../animations_config/anime_def'
</script>

<template>
    <motion.section
     class="flex w-full overflow-hidden justify-center items-center"
     :class="useThemeComposable() ? ''
     :''"
    >
        <motion.div 
         :initial="dash_animation.initial"
         :animate="dash_animation.animate"
         :transition="dash_animation.transition"
         :exit="dash_animation.exist"
         class="flex flex-col space-y-1 p-1.5 rounded-2xl border h-full w-full"
         :class="useThemeComposable() ? 'bg-Dark border-teal-900'
         :'bg-white border-teal-300'"
        >
         
        </motion.div>
    </motion.section>
</template>