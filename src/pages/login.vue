<script setup lang="ts">
    import { motion } from 'motion-v';
    import {log_box1,log_box2} from '../animations_config/anime_def'
    import {ref} from 'vue'
    import {useAuthencationStore} from "../store/useAuthencationStore"
    import {useAlertModalComposable} from "../Composables/useComposables"

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
    <section
     class="flex w-full h-screen space-x-2 p-1 overflow-hidden"
    >
        <motion.div
         :initial="log_box1.initial"
         :animate="log_box1.animate"
         :transition="log_box1.transition"
         :exit="log_box1.exist"
         class="rounded-md border border-gray-100 w-full flex flex-col justify-center items-center space-y-8 bg-off_white shadow-md"
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
         class="rounded-md border border-gray-100 w-full bg-off_white shadow-md flex flex-col justify-center items-start p-2"
        >

            <div class="w-full p-1.5 flex justify-center items-center">
                <img class="h-28" src="/Caribbean-Week-of-Agriculture-2026.png" alt="logo">
            </div>

            <div class="w-full flex flex-col space-y-8 py-2 px-12">

                <div class="flex flex-col space-y-1.5 p-0.5 max-w-full">
                    <label for="_username_">
                        Username
                    </label>
                    <input
                     id="_username_"
                     v-model="username"
                     class="w-full rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2 
                     border-gray-300 focus:border-green-500 focus:shadow-gre" 
                     type="text"
                     required
                    >
                </div>

                <div class="flex flex-col space-y-1.5 p-0.5 max-w-full">
                    <label for="_password_">
                        Password
                    </label>
                    <input
                    id="_password_"
                     v-model="password"
                     class="w-full rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2 
                     border-gray-300 focus:border-green-500 focus:shadow-gre"
                     type="password"
                     required
                    >
                </div>

                <div class="flex justify-center items-center">
                    <motion.button 
                     @click="login()"
                     class="rounded-full py-1 px-8 border-2 border-teal-200 font-semibold cursor-pointer
                     hover:text-green-500 hover:border-green-500"
                     :whileHover="{ scale: 1.1 }"
                     :while-press="{ scale: 0.9 }" 
                     :transition="{ duration: 0.25,ease: 'easeInOut'}"
                    >
                        <h1>LOGIN</h1>
                    </motion.button>
                </div>

            </div>
        </motion.div>
    </section>
</template>
