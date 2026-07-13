<script lang="ts" setup>
import {useThemeComposable} from '../Composables/useComposables'
import { motion, AnimatePresence } from 'motion-v';
import {dash_animation} from '../animations_config/anime_def'

</script>

<template>
    <section
     class="flex w-full min-h-full overflow-hidden justify-center items-center"
     :class="useThemeComposable() ? ''
     :''"
    >   
        <AnimatePresence> 
            <motion.div 
             :initial="dash_animation.initial"
             :animate="dash_animation.animate"
             :transition="dash_animation.transition"
             :exit="dash_animation.exist"
             class="flex flex-col space-y-1 p-1.5 rounded-2xl border h-full w-full"
             :class="useThemeComposable() ? 'bg-Dark border-teal-900'
             :'bg-white border-teal-300'"
            >

                <motion.div
                  class="border w-full flex p-1.5 rounded-md"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-off_white border-teal-100'"
                >
                </motion.div>

                <motion.div
                 class="flex flex-col space-y-4 w-full p-2 rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                > 
                </motion.div> 

            </motion.div>
        </AnimatePresence>
    </section>
</template>