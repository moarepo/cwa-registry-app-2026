<script lang="ts" setup>
 import {ref} from 'vue'
 import { motion } from 'motion-v';
 import { useThemeComposable, useAlertModalComposable } from '../Composables/useComposables'
 import {button_animation} from '../animations_config/anime_def'
 import {useAuthencationStore} from '../store/useAuthencationStore'

 let email_address = ref<string>("")
 let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 const auth = useAuthencationStore()

 function sendEmail(){
    if(email_address.value === ""){
        useAlertModalComposable("Please add an email address")
    }else{
        if(emailRegex.test(email_address.value)){
            auth.reset_email(email_address.value)
        }else{
            useAlertModalComposable("Please enter a valid email address")
        }
    }
 }
</script>

<template>
    <motion.section
     class="flex justify-center items-center min-h-full w-full p-1.5"
     :class="useThemeComposable() ? ''
     :''"
    >
        <motion.div
         class="rounded-md p-2.5 flex justify-center items-center space-x-4 w-1/2"
         :class="useThemeComposable() ? ''
         :'bg-white'"
        >
            <img class="h-96" src="/undraw_forgot-password_nttj.png" alt="forgot-password">

            <motion.div
             class="flex flex-col justify-center items-center space-y-4  min-h-full w-full"
            >

                <div class="flex w-full flex-col space-y-1">
                    <label for="_reset_link">Email Address</label>
                    <input
                      v-model="email_address"
                      id="_reset_link"
                      class="w-full rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2" 
                      :class="useThemeComposable() ? 'bg-teal-950 border-teal-900 focus:border-indigo-500'
                      :'bg-white border-gray-300 focus:border-green-500 focus:shadow-gre'"
                      placeholder="Please type your email address"
                      required
                      type="email" 
                    >
                </div>

                <button
                 @click="sendEmail()"
                 :initial="button_animation.initial"
                 class="rounded-md w-1/2 py-1 px-8 border-2  font-semibold cursor-pointer duration-500 ease-in-out "
                 :class="useThemeComposable() ? ''
                 :' bg-white border-teal-200 hover:text-green-500 hover:border-green-500'"
                 :whileHover="button_animation.hover"
                 :while-press="button_animation.pressed" 
                 :transition="button_animation.transition"
                >
                    <span>send reset link</span>
                </button>

            </motion.div>
        </motion.div>
    </motion.section>
</template>