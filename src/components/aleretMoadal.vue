<script setup lang="ts">
 import { motion, AnimatePresence } from "motion-v";
 import { useDisplayStore } from "../store/useDisplayStore"
 import {modal_movement} from "../animations_config/anime_def"
 import { useThemeComposable } from "../composables/useComposables"
 import { computed } from "vue"

 const store = useDisplayStore()

 let status = computed<boolean>(()=>{ return store.get_status })
 let message = computed<string>(()=>{ return store.get_message})

 function closeOnOutsideClick(event: MouseEvent) {
    const modalContent = document.getElementById("alert-modal-content");

    if (modalContent && !modalContent.contains(event.target as Node)) {
      store.change_status("")
    }
 }

 function Close(){ store.change_status("") }
</script>

<template>
  <AnimatePresence :initial="false">
    <motion.div
      v-if="status"
      :initial="modal_movement.initial"
      :animate="modal_movement.animate"
      :transition="modal_movement.transition"
      :exit="modal_movement.exist"
      class="fixed inset-0 flex flex-col space-y-4 p-2 justify-center items-center overflow-hidden z-20"
      :class="useThemeComposable() ? 'bg-innerDark/50 ' : 'bg-Dark/10'"
      @click="closeOnOutsideClick"
    >

      <motion.section
        id="alert-modal-content"
        class="lg:w-1/4 rounded-lg py-2 px-4 flex flex-col space-y-4 border "
        :class="useThemeComposable() ? 'bg-Dark border-indigo-500 text-indigo-500'
        :'bg-white shadow-6xl text-indigo-500'"
      >
        <div class="flex w-full space-x-2 justify-center items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="size-8"
          >
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clip-rule="evenodd" />
          </svg>
          <h2 class="text-xl">Alert</h2>
        </div>

        <div class="flex justify-center items-center text-lg w-full">
         <p class="antialiased leading-6 text-center">
            {{ message }}
          </p>
        </div>

        <div class=" p-1 w-full flex justify-center items-center">
          <button
            @click="Close()"
            class="p-1 rounded-md flex space-x-0.5 justify-center items-center cursor-pointer transition-all ease-in-out
            duration-500 hover:-translate-y-0.5 hover:font-semibold hover:bg-indigo-50-50"
            :class="useThemeComposable() ? 'hover:border-red-500':'hover:bg-red-50'"
          >    
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <h2 class="font-medium">Close</h2>
          </button>
        </div>
      </motion.section>

    </motion.div>
  </AnimatePresence>
</template>