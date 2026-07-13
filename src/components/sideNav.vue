<script lang="ts" setup>
 import { motion } from "motion-v";
 import {staggered_animation,button_animation_normal} from "../animations_config/anime_def.ts"
 import {useThemeComposable} from "../Composables/useComposables.ts"
 import {useAuthencationStore} from "../store/useAuthencationStore.ts"
 import {useThemeStore} from "../store/useThemeStore.ts"

 const auth = useAuthencationStore()
 const theme =  useThemeStore()

 let userInfo = auth.get_user_info

 type Links ={name:string,path:string}
 let navigationLinks:Links[] = [
   {
    name:"Home",
    path:"/dashborad"
   },
   {
    name:"Exhibitor",
    path:"/exhibitor"
   },
  {
    name:"Media",
    path:"/media"
   }
 ]

 function logout(){auth.signOutUser()}
 function changeTheme(){ theme.changeTheme() }
</script>

<template>
   <motion.div
    class="flex flex-col justify-between items-center space-y-1 w-full h-full"
    :class="useThemeComposable() ? '':'bg-white'"
   >    
      <div 
       class="flex flex-col space-y-1 p-1.5 rounded-2xl w-full border"
       :class="useThemeComposable() ? 'bg-innerDark border-teal-900'
       :'bg-off_white border-gray-100'"
      >
        <motion.div class="flex w-full h-16 justify-center items-center">
          <img class="h-12 rounded-md" src="/logo.jpg" alt="logo">
        </motion.div>
  
        <motion.div
             :initial="staggered_animation(0.4,2,0,-10).initial"
             :animate="staggered_animation(0.4,2,0,-10).animate"
             :exit="staggered_animation(0.6,2,0,-10).exit"
              class="flex w-full space-x-2 px-4 py-2 justify-center items-center rounded-md"
              :class="useThemeComposable() ? 'bg-Dark'
             :'bg-white'"
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
             class="flex py-1 px-4 justify-between items-center w-full rounded-md"
             :class="useThemeComposable() ? 'bg-Dark'
             :'bg-white'"
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
      </div>

      <motion.div
       class="flex justify-center items-center p-1.5 flex-col space-y-2 w-full"
       :class="useThemeComposable() ? ''
       :''"
      >
        <router-link
        v-for="nav in navigationLinks"
         :key="nav.name"
         :to="nav.path"
         class="w-full border flex justify-center items-center rounded-md p-1 cursor-pointer mt-2
         transition-all ease-in-out duration-500 hover:-translate-y-1 hover:scale-100 text-center space-x-2.5"
         :class="useThemeComposable() ? 'bg-innerDark border-teal-900 hover:text-green-500 hover:border-green-500 hover:shadow-gre'
         :'bg-white border-teal-300 hover:shadow-grel hover:border-indigo-500 hover:text-indigo-500'"
        >
          <svg  
            v-if="nav.name === 'Home'"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
            <path d="M14.916 2.404a.75.75 0 0 1-.32 1.011l-.596.31V17a1 1 0 0 1-1 1h-2.26a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H2V9.957a.75.75 0 0 1-.596-1.372L2 8.275V5.75a.75.75 0 0 1 1.5 0v1.745l10.404-5.41a.75.75 0 0 1 1.012.319ZM15.861 8.57a.75.75 0 0 1 .736-.025l1.999 1.04A.75.75 0 0 1 18 10.957V16.5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75V9.21a.75.75 0 0 1 .361-.64Z" />
          </svg>

          <svg 
           v-if="nav.name === 'Exhibitor'"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"
          >
            <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
            <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
          </svg>

          <svg 
           v-if="nav.name === 'Media'"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"
          >
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
          </svg>

          <h2>{{ nav.name }}</h2>
        </router-link>
      </motion.div>

      <div 
        class="w-full p-2.5 flex flex-col space-y-1 justify-center items-center rounded-2xl"
        :class="useThemeComposable() ? 'bg-innerDark/85 border-teal-950 text-white'
        :'bg-off_white'"
      >
        <p class="text-center font-semibold text-xs">
          © Copyright 2026 Ministry of Agriculture, Fisheries & Mining ICT Branch
        </p>
      </div>

    </motion.div>
</template>