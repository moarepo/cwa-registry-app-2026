<script setup lang="ts">
    import { motion, AnimatePresence } from 'motion-v';
    import {log_box1,log_box2,button_animation} from '../animations_config/anime_def'
    import {ref} from 'vue'
    import {useAuthencationStore} from "../store/useAuthencationStore"
    import {useAlertModalComposable, useThemeComposable} from "../composables/useComposables"

    const authStore = useAuthencationStore()

    let username = ref<string>("")
    let password = ref<string>("")

    function login(){
        if(username.value === "" || password.value === ""){
            useAlertModalComposable("Please ensure username or password are enterd.")
        }else{
            authStore.signInWithEmail(username.value,password.value)
        }
    }
</script>

<template>
    <AnimatePresence>
        <motion.section
         class="flex w-full min-h-full space-x-2 p-1 overflow-hidden"
        >
            <motion.div
             :initial="log_box1.initial"
             :animate="log_box1.animate"
             :transition="log_box1.transition"
             :exit="log_box1.exist"
             class="rounded-md border w-full flex flex-col justify-center items-center space-y-8 shadow-md"
              :class="useThemeComposable() ? 'text-white border-teal-950 bg-Dark'
             :'border-gray-100 w-full bg-off_white shadow-md'"
            >
                <h2> CWA Registration PORTAL 2026</h2>
    
                <img src="/undraw_spreadsheet_uj8z.svg" class="w-96" alt="portal">
    
                <p>© Copyright 2026 Ministry of Agriculture, Fisheries & Mining ICT Branch</p>
    
            </motion.div>
    
            <motion.div
             :initial="log_box2.initial"
             :animate="log_box2.animate"
             :transition="log_box2.transition"
             :exit="log_box1.exist"
             class="rounded-md border flex flex-col justify-center items-start p-2 w-full"
             :class="useThemeComposable() ? 'text-white border-teal-950 bg-Dark'
             :'border-gray-100 w-full bg-off_white shadow-md'"
            >
    
                <div class="w-full p-1.5 flex justify-center items-center">
                    <img class="h-28" src="/Caribbean-Week-of-Agriculture-2026.png" alt="logo">
                </div>
    
                <div class="w-full flex flex-col space-y-8 py-2 px-12">
    
                    <div class="flex flex-col space-y-2 p-0.5 max-w-full">
                        <label for="_username_">
                            Username
                        </label>
                        <input
                         id="_username_"
                         v-model="username"
                         class="w-full rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2" 
                         :class="useThemeComposable() ? 'bg-teal-950 border-teal-900 focus:border-indigo-500'
                         :'bg-white border-gray-300 focus:border-green-500 focus:shadow-gre'"
                         type="email"
                         required
                        >
                    </div>
    
                    <div class="flex flex-col space-y-2 p-0.5 max-w-full">
                        <label for="_password_">
                            Password
                        </label>
                        <input
                        id="_password_"
                         v-model="password"
                         class="w-full rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2" 
                         :class="useThemeComposable() ? 'bg-teal-950 border-teal-900 focus:border-indigo-500'
                         :'bg-white border-gray-300 focus:border-green-500 focus:shadow-gre'"
                         type="password"
                         required
                        >
                        <router-link
                          to="/forgot"
                          class="transition-all ease-in-out duration-700 underline text-sm font-semibold"
                          :class="useThemeComposable() ? ''
                          :'hover:text-indigo-500 text-teal-700'"
                        >
                         Forget Password?
                        </router-link>
                    </div>
    
                    <div class="flex justify-center items-center w-full">
                        <motion.button 
                         @click="login()"
                         :initial="button_animation.initial"
                         class="rounded-md w-1/2 py-1 px-8 border-2  font-semibold cursor-pointer
                         duration-500 ease-in-out "
                         :class="useThemeComposable() ? ''
                         :' bg-white border-teal-200 hover:text-green-500 hover:border-green-500'"
                         :whileHover="button_animation.hover"
                         :while-press="button_animation.pressed" 
                         :transition="button_animation.transition"
                        >
                            <h1>LOGIN</h1>
                        </motion.button>
                    </div>

                    <motion.div
                     class="flex w-full p-1.5 justify-center items-center"
                     :class="useThemeComposable() ? ''
                     :''"
                    >
                        <router-link
                          to="/registry"
                          class="flex justify-center items-center space-x-2 transition-all ease-in-out duration-700 underline font-medium hover:text-green-500"
                        >
                          <span>Don't have an account?</span> 
                          <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           viewBox="0 0 20 20" 
                           fill="currentColor" 
                           class="size-5"
                          >
                            <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
                          </svg>
                        </router-link>
                    </motion.div>
    
                </div>
            </motion.div>
            
        </motion.section>
    </AnimatePresence>
</template>
