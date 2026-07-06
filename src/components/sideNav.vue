<script lang="ts" setup>
 import { motion } from "motion-v";
 import {staggered_animation,button_animation_normal} from "../animations_config/anime_def.ts"
 import {useThemeComposable} from "../Composables/useComposables.ts"
 import {useAuthencationStore} from "../store/useAuthencationStore.ts"
 import {useThemeStore} from "../store/useThemeStore.ts"

 const auth = useAuthencationStore()
 const theme =  useThemeStore()

 let userInfo = auth.get_user_info

 function logout(){auth.signOutUser()}
 function changeTheme(){ theme.changeTheme() }
</script>

<template>
   <motion.div
    class="flex flex-col justify-center items-center space-y-1 p-1 w-full"
    :class="useThemeComposable() ? '':'bg-white'"
   >
        <motion.div
           :initial="staggered_animation(0.4,2,0,-10).initial"
           :animate="staggered_animation(0.4,2,0,-10).animate"
           :exit="staggered_animation(0.6,2,0,-10).exit"
            class="flex w-full space-x-2 p-1 justify-center items-center rounded-2xl"
            :class="useThemeComposable() ? 'bg-innerDark'
           :'bg-off_white'"
          >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" fill="currentColor" class="size-8">
              <path 
              fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" 
              clip-rule="evenodd" 
              />
            </svg>

            <h2 class="font-medium overline">{{ userInfo.email_address }}</h2>
    
        </motion.div>

        <motion.div
           :initial="staggered_animation(0.8,1,0,-10).initial"
           :animate="staggered_animation(0.8,1,0,-10).animate"
           :exit="staggered_animation(0.8,1,0,-10).exit"
           class="flex py-2 px-6 justify-between items-center w-full rounded-2xl"
           :class="useThemeComposable() ? 'bg-innerDark'
           :'bg-off_white'"
          >
            <motion.button
             @click="changeTheme()"
             :initial="button_animation_normal.initial"
             :whileHover="button_animation_normal.hover"
             :while-press="button_animation_normal.pressed" 
             :transition="button_animation_normal.transition"
             class="border-2 p-1 rounded-md cursor-pointer transition-all ease-in-out duration-1000"
             :class="useThemeComposable() ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500 hover:shadow-yel'
             :'bg-innerDark/10 border-innerDark text-Dark hover:shadow-dar'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            </motion.button>

            <motion.button
             @click="logout()"
             :initial="button_animation_normal.initial"
             :whileHover="button_animation_normal.hover"
             :while-press="button_animation_normal.pressed" 
             :transition="button_animation_normal.transition"
             class="border-2 p-1 rounded-md cursor-pointer border-indigo-500 text-indigo-500 bg-indigo-500/10 transition-all ease-in-out
             duration-1000 hover:shadow-ind"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
              </svg>
            </motion.button>
        </motion.div>
    </motion.div>
</template>