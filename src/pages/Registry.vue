<script setup lang="ts">
 import { motion } from 'motion-v';
 import {ref} from "vue"
 import {useAuthencationStore} from "../store/useAuthencationStore"
 import {useAlertModalComposable} from "../Composables/useComposables"

 const authStore = useAuthencationStore()

 let email = ref<string>("")
 let password = ref<string>("")
 let re_password = ref<string>("")

 function Register(){
    if(email.value === "" || password.value === "" || re_password.value === ""){
            useAlertModalComposable("empty")
    }else{
        if(password.value != re_password.value){
            useAlertModalComposable("password does not match!!")
        }else{
            authStore.registerUserWithEmail(email.value,password.value)
        }
    }
 }
</script>

<template>
   <section
     class="flex w-full h-screen space-x-2 p-1 overflow-hidden justify-center items-center"
    >
        <motion.div
         class="p-4 rounded-2xl bg-off_white shadow-2xl flex flex-col space-y-4 justify-center items-center w-1/2"
        >
            <svg 
             xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24" 
             fill="currentColor" 
             class="size-16"
            >
             <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clip-rule="evenodd" />
            </svg>

            <div class="p-0.5 flex flex-col space-y-2 justify-center items-start w-full">
                <label for="_user_name">
                    Email Address
                </label>
                <input 
                 id="_user_name"
                 v-model="email"
                 class="w-full rounded-md border-2 px-2.5 py-2 transtion-all ease-in duration-500 outline-none focus:border-2 
                 border-gray-300 focus:border-green-500 focus:shadow-gre"
                 type="email"
                 required
                >
            </div>

            <div class="p-0.5 flex flex-col space-y-2 justify-center items-start w-full">
                <label for="password">
                    Password
                </label>
                <input 
                 id="password"
                 v-model="password"
                 class="w-full rounded-md border-2 px-2.5 py-2 transtion-all ease-in duration-500 outline-none focus:border-2 
                 border-gray-300 focus:border-green-500 focus:shadow-gre"
                 type="password"
                 required
                >
            </div>

            <div class="p-0.5 flex flex-col space-y-2 justify-center items-start w-full">
                <label for="re_password">
                    Retype Password
                </label>
                <input 
                 id="re_password"
                 v-model="re_password"
                 class="w-full rounded-md border-2 px-2.5 py-2 transtion-all ease-in duration-500 outline-none focus:border-2 
                 border-gray-300 focus:border-green-500 focus:shadow-gre"
                 type="password"
                 required
                >
            </div>

            <div class="flex justify-center items-center w-full">
                <motion.button 
                 @click="Register()"
                 class="rounded-2xl py-1 px-8 border-2 border-teal-200 font-semibold cursor-pointer
                 hover:text-green-500 hover:border-green-500 w-1/2"
                 :whileHover="{ scale: 1.1 }"
                 :while-press="{ scale: 0.9 }" 
                 :transition="{ duration: 0.25,ease: 'easeInOut'}"
                >
                    <h1>Register</h1>
                </motion.button>
            </div>

        </motion.div>
    </section>
</template>