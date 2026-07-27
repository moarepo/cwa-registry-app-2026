<script setup lang="ts">
 import { computed } from "vue"
 import { motion,AnimatePresence } from "motion-v";
 import {defineAsyncComponent} from "vue"
 import {useThemeComposable} from "./composables/useComposables.ts"
 import {side_nav_animation} from "./animations_config/anime_def"
 import {useDisplayStore} from "./store/useDisplayStore"
 import sideNav from "./components/sideNav.vue";

 const alerModal = defineAsyncComponent(()=> ( import("./components/aleretMoadal.vue")  ) )
 const succesModal = defineAsyncComponent(()=>( import("./components/successModal.vue")  ))
 const Showstore = useDisplayStore()

 let show = computed<boolean>(()=>{ return Showstore.show_side_nav})
</script>

<template>
  <AnimatePresence>
    <motion.div
     class="flex flex-col w-screen h-screen p-1 space-y-1 font-Rubik overflow-hidden bg-cover transition-all ease-in-out duration-700"
     :class="useThemeComposable() ? 'bg-innerDark text-white'
     :'text-stone-800 bg-teal-100'"
    >

      <motion.header
       v-if="show"
       class="lg:hidden md:flex flex justify-between items-center w-full border rounded-md p-1"
       :class="useThemeComposable() ? ''
       :'bg-white border-teal-300 '"
      >
        <div
         class="flex justify-center items-center p-1 space-x-2"
        >
          <img 
           class="rounded-sm h-10"
           src="/logo.jpg" 
           alt="MOAF-LOGO"
          >
          <button>

          </button>
        </div>
      </motion.header>

      <motion.section
       class="flex flex-1 w-full p-0 space-x-1 overflow-hidden relative"
      >

        <motion.aside
          v-if="show"
          :initial="side_nav_animation.initial"
          :animate="side_nav_animation.animate"
          :transition="side_nav_animation.transition"
          :exit="side_nav_animation.exist"
          class="lg:flex hidden flex-col justify-between items-center p-1.5 text-center rounded-2xl border min-h-full w-1/6 overflow-hidden
          flex-none overflow-y-auto select-none"
          :class="useThemeComposable() ? 'bg-Dark border-teal-900'
          :'bg-white border-teal-300 '" 
        >
          <sideNav/>
        </motion.aside>

        <motion.main
          class="flex-1 overflow-y-auto w-full h-full"
        >
          <router-view/>
        </motion.main>
    
      </motion.section>

      <!--- Modals -->
      <alerModal/>
      <succesModal/>
  
    </motion.div>
  </AnimatePresence>
</template>
