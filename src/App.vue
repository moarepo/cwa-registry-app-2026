<script setup lang="ts">
 import { computed } from "vue"
 import { motion,AnimatePresence } from "motion-v";
 import {defineAsyncComponent} from "vue"
 import {useThemeComposable} from "./Composables/useComposables.ts"
 import {side_nav_animation} from "./animations_config/anime_def.ts"
 import {useDisplayStore} from "./store/useDisplayStore.ts"
 import sideNav from "./components/sideNav.vue";

 const alerModal = defineAsyncComponent(()=> ( import("./components/aleretMoadal.vue")  ) )
 const Showstore = useDisplayStore()

 let show = computed<boolean>(()=>{ return Showstore.show_side_nav})
</script>

<template>
  <AnimatePresence>
    <motion.section 
     class="flex space-x-1 w-full min-h-screen p-1 font-Rubik overflow-hidden bg-cover transition-all ease-in-out duration-700"
     :class="useThemeComposable() ? 'bg-innerDark text-white'
     :'text-stone-800 bg-[url(https://images.unsplash.com/photo-1686061593213-98dad7c599b9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'"
    >

      <motion.div 
        v-if="show"
        :initial="side_nav_animation.initial"
        :animate="side_nav_animation.animate"
        :transition="side_nav_animation.transition"
        :exit="side_nav_animation.exist"
        class="flex flex-col justify-between items-center p-1.5 text-center rounded-2xl border min-h-full w-1/5 overflow-hidden"
        :class="useThemeComposable() ? 'bg-Dark border-teal-900'
        :'bg-white border-teal-300 '" 
      >
        <sideNav/>
      </motion.div>
  
      <router-view/>
  
      <!--- Modals -->
      <alerModal/>
  
    </motion.section>
  </AnimatePresence>
</template>
