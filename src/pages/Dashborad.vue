<script lang="ts" setup>
import { useThemeComposable } from '../Composables/useComposables'
import { motion, AnimatePresence } from 'motion-v';
import { dash_animation } from "../animations_config/anime_def"

</script>

<template>
    <section
     class="flex w-full h-full overflow-hidden justify-center items-center"
     :class="useThemeComposable() ? ''
     :''"
    >   <AnimatePresence> 

            <motion.div 
             :initial="dash_animation.initial"
             :animate="dash_animation.animate"
             :transition="dash_animation.transition"
             :exit="dash_animation.exist"
             class="flex p-1.5 text-center rounded-2xl border h-full w-full"
             :class="useThemeComposable() ? ''
             :'bg-white'"
            >

            </motion.div>

            
        </AnimatePresence>
    </section>
</template>