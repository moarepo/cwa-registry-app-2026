<script lang="ts" setup>
import {motion} from 'motion-v'
import {useThemeComposable} from '../composables/useComposables'
import {dash_animation} from '../animations_config/anime_def'
</script>

<template>
    <motion.section
     class="flex w-full overflow-hidden justify-center items-center"
     :class="useThemeComposable() ? '':''"
    >

        <motion.div 
         :initial="dash_animation.initial"
         :animate="dash_animation.animate"
         :transition="dash_animation.transition"
         :exit="dash_animation.exist"
         class="flex flex-col justify-center items-center space-y-4 p-2 rounded-2xl border h-full w-full"
         :class="useThemeComposable() ? 'bg-Dark border-teal-900'
         :'bg-white border-teal-300'"
        >

            <motion.img 
             :initial="{y:-175,opacity:0.1}"
             :animate="{ y:0,opacity:1}"
             :transition="{ duration: 0.6, ease: 'easeInOut', type:'spring', stiffness: 125 }"
             src="/conformation.svg" alt="conformation of signup"
             class="h-64"
            />

            <motion.div
             :initial="{ y:100,opacity:0.1}"
             :animate="{ y:0,opacity:1}"
             :transition="{ duration: 1, ease: 'easeInOut', type:'spring', stiffness: 75 }"
             class=" p-2.5 border rounded-md lg:w-1/2 flex justify-center items-center flex-col space-y-4"
             :class="useThemeComposable() ? ''
             :'bg-off_white border-teal-200'"
            >   
                    <motion.img 
                     :initial="{ y:-100,opacity:0.1 }"
                     :animate="{ y:0,opacity:1 }"
                     :transition="{ duration: 1.2, ease:'easeInOut', type:'spring', stiffness: 75 }"
                     class="h-20 w-20"
                     src="/registered-icon.png" alt="icon"
                    />

                    <p class="py-2 px-4 leading-2">
                      You're all set! A confirmation email has been sent to your inbox to complete your CWA Dashboard registration.
                    </p>
            </motion.div>

         
        </motion.div>

    </motion.section>
</template>