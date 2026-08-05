<script setup lang="ts">
 import { computed,ref } from "vue"
 import { motion,AnimatePresence } from "motion-v";
 import {defineAsyncComponent} from "vue"
 import {useThemeComposable} from "./composables/useComposables.ts"
 import {side_nav_animation,drop_down_animation} from "./animations_config/anime_def"
 import {useDisplayStore} from "./store/useDisplayStore"
 import sideNav from "./components/sideNav.vue";

 const alerModal = defineAsyncComponent(()=> ( import("./components/aleretMoadal.vue")  ) )
 const succesModal = defineAsyncComponent(()=>( import("./components/successModal.vue")  ))
 const Showstore = useDisplayStore()

 let show = computed<boolean>(()=>{ return Showstore.show_side_nav})
 let show_drop_down = ref<boolean>(false)

 type Links ={name:string,path:string}
 let navigationLinks:Links[] = [
   {
    name:"Home",
    path:"/dashborad"
   },
   {
    name:"Registration",
    path:'/delegates'
   },
   {
    name:"Exhibitor",
    path:"/exhibitor"
   },
  {
    name:"Media",
    path:"/media"
  },
  {
    name:"Settings",
    path:"/options"
  }
 ]
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
       class="lg:hidden md:flex-col flex-col space-y-2 justify-center items-center w-full p-0.5"
       :class="useThemeComposable() ? 'bg-off_white':''"
      >
        <motion.div
         class="flex justify-between items-center py-1 px-2 rounded-md border"
         :class="useThemeComposable() ? '':'bg-white border-teal-300 '"
        >
          <img 
           class="rounded-sm h-10"
           src="/logo.jpg" 
           alt="MOAF-LOGO"
          />
          <motion.button
            @click="show_drop_down = !show_drop_down"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
              <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
          <motion.div
          v-if="show_drop_down"
          :initial="drop_down_animation.initial"
          :exit="drop_down_animation.exist"
          :animate="drop_down_animation.animate"
          :transition="drop_down_animation.transition"
          class="flex flex-col justify-center items-center p-1.5 space-y-2 rounded-md border"
          :class="useThemeComposable() ? '':'bg-white border-teal-300 '"
          >
              <router-link
              v-for="nav in navigationLinks"
              :key="nav.name"
              :to="nav.path"
              class="w-full border flex justify-center items-center rounded-md lx:p-1 lg:p-0.5 cursor-pointer xl:mt-2 lg:mt-1
              transition-all ease-in-out duration-500 hover:-translate-y-1 hover:scale-100 text-center space-x-2.5"
              :class="useThemeComposable() ? 'bg-Dark border-teal-900 hover:text-green-500 hover:border-green-500 hover:shadow-gre'
              :'bg-white border-teal-300 hover:shadow-grel hover:border-indigo-500 hover:text-indigo-500'"
              >
                <h2 class="xl:text-lg lg:text-md">{{ nav.name }}</h2>
              </router-link>
          </motion.div>
        <AnimatePresence>

        </AnimatePresence>
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
