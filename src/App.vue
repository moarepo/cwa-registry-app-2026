<script setup lang="ts">
 import { computed } from "vue"
 import { motion,AnimatePresence } from "motion-v";
 import {defineAsyncComponent} from "vue"
 import {useThemeComposable} from "./Composables/useComposables.ts"
 import {side_nav_animation} from "./animations_config/anime_def.ts"
 import {useDisplayStore} from "./store/useDisplayStore.ts"
 import sideNav from "./components/sideNav.vue";

 const alerModal = defineAsyncComponent(()=> ( import("./components/aleretMoadal.vue")  ) )
 const succesModal = defineAsyncComponent(()=>( import("./components/successModal.vue")  ))
 const Showstore = useDisplayStore()

 let show = computed<boolean>(()=>{ return Showstore.show_side_nav})
</script>

<template>
  <AnimatePresence>
    <motion.div
     class="flex space-x-1 w-full min-h-screen p-1 font-Rubik overflow-hidden bg-cover transition-all ease-in-out duration-700"
     :class="useThemeComposable() ? 'bg-innerDark text-white'
     :'text-stone-800 bg-teal-100'"
    >

      <motion.div
        v-if="show"
        :initial="side_nav_animation.initial"
        :animate="side_nav_animation.animate"
        :transition="side_nav_animation.transition"
        :exit="side_nav_animation.exist"
        class="2xl:flex md:hidden flex-col justify-between items-center p-1.5 text-center rounded-2xl border min-h-full w-1/5 overflow-hidden"
        :class="useThemeComposable() ? 'bg-Dark border-teal-900'
        :'bg-white border-teal-300 '" 
      >
        <sideNav/>
      </motion.div>
  
      <router-view/>
  
      <!--- Modals -->
      <alerModal/>
      <succesModal/>
  
    </motion.div>
  </AnimatePresence>
</template>
