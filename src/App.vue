<script setup lang="ts">
 import { computed } from "vue"
 import { motion,AnimatePresence } from "motion-v";
 import {defineAsyncComponent} from "vue"
 import {useThemeComposable} from "./Composables/useComposables.ts"
 import {side_nav_animation} from "./animations_config/anime_def.ts"
 import {useDisplayStore} from "./store/useDisplayStore.ts"
 import {useAuthencationStore} from "./store/useAuthencationStore.ts"
 import {staggered_animation} from "./animations_config/anime_def.ts"

 const alerModal = defineAsyncComponent(()=> ( import("./components/aleretMoadal.vue")  ) )
 const Showstore = useDisplayStore()
 const auth = useAuthencationStore()

 let show = computed<boolean>(()=>{ return Showstore.show_side_nav})
 let userInfo = auth.get_user_info
</script>

<template>
  <AnimatePresence>
    <motion.section 
     class="flex space-x-2 w-full h-screen p-1 font-Rubik overflow-hidden bg-cover"
     :class="useThemeComposable() ? ''
     :'bg-[url(https://images.unsplash.com/photo-1686061593213-98dad7c599b9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'"
    >

      <motion.div 
        v-if="show"
        :initial="side_nav_animation.initial"
        :animate="side_nav_animation.animate"
        :transition="side_nav_animation.transition"
        :exit="side_nav_animation.exist"
        class="flex flex-col justify-between items-center p-1.5 text-center rounded-2xl border h-full w-1/5"
        :class="useThemeComposable() ? ''
        :'bg-white'"
      >
        
        <motion.div
         class="flex flex-col justify-center items-center space-y-4 p-0.5 w-full"
         :class="useThemeComposable() ? '':''"
        >
         
          <!-- <motion.div
            class="bg-[url(/Caribbean-Week-of-Agriculture-2026.png)] w-full h-20 bg-cover"
          /> -->

          <motion.div
            class="flex w-full space-x-2 py-2 px-4 justify-center items-center"
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
           :initial="staggered_animation(1,1,0,-5).initial"
           :animate="staggered_animation(1,1,0,-5).animate"
           :exit="staggered_animation(1,1,0,-5).exit"
           class="flex p-1"
          >
            <button>
              change theme
            </button>
          </motion.div>
          
        </motion.div>

      </motion.div>
  
      <router-view/>
  
      <!--- Modals -->
      <alerModal/>
  
    </motion.section>
  </AnimatePresence>
</template>
