<script lang="ts" setup>
import {ref} from 'vue'
import {motion,AnimatePresence} from 'motion-v'
import {useThemeComposable,useAlertModalComposable} from '../composables/useComposables'
import {dash_animation,button_animation} from '../animations_config/anime_def'
import {useAuthencationStore} from '../store/useAuthencationStore'


  const auth = useAuthencationStore()

  let show_password_reset = ref<boolean>(false)
  let show_user_profile = ref<boolean>(false)
  let new_password = ref<string>("")
  let retyped_new_password = ref<string>("")

  function showOptions(options:string){
    switch(options){
      case "password_reset":
        show_password_reset.value = !show_password_reset.value
        show_user_profile.value = false
        break;
      case "user_profile":
        show_password_reset.value = false
        show_user_profile.value = !show_user_profile.value
        break;
      default:
        show_password_reset.value = false
        show_user_profile.value = false
    }
  }

  function PasswordRest(){
    if(new_password.value != retyped_new_password.value){
      useAlertModalComposable("Please ensure that password match.")
    }else{
      auth.reset_password(new_password.value)
    }
  }
</script>

<template>
    <motion.section
     class="flex w-full overflow-hidden justify-center items-center"
     :class="useThemeComposable() ? ''
     :''"
    >
        <motion.div 
         :initial="dash_animation.initial"
         :animate="dash_animation.animate"
         :transition="dash_animation.transition"
         :exit="dash_animation.exist"
         class="flex flex-col space-y-1 p-1.5 rounded-2xl border h-full w-full"
         :class="useThemeComposable() ? 'bg-Dark border-teal-900'
         :'bg-white border-teal-300'"
        >

            <motion.div
              class="border w-full flex flex-col space-y-2 justify-start items-center py-1.5 px-4 rounded-2xl"
              :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
              :'bg-off_white border-teal-100'"
            >
             <div class="flex space-x-1 w-full justify-start items-center lg:text-2xl text-lg font-medium p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                 <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
                 <path fill-rule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z" clip-rule="evenodd" />
                </svg>

                <h1>Settings</h1>
              </div>

                <p 
                 class="px-4 py-2 leading-6 subpixel-antialiased text-start rounded-2xl"
                 :class="useThemeComposable() ? ''
                 :'bg-white'"
                >
                    The Settings page provides administrative tools for managing key aspects of the system. It allows authorized users to manage 
                    user accounts, including creating new users, assigning or changing roles, and disabling accounts when necessary. Additionally, 
                    the page offers configuration options for managing project workflows through customizable lists.
                </p>
            </motion.div>

            <motion.div
              class="flex flex-col space-y-2 w-full rounded-2xl border h-full"
              :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
              :'bg-off_white border-teal-100'"
            >
              <div
                class="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 rounded-2xl p-1.5"
                :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                :'bg-off_white'"
              >
                  <div 
                    class="w-full lg:col-span-2 md:col-span-2 col-span-1 flex justify-center items-center p-2 rounded-2xl border text-lg"
                    :class="useThemeComposable() ? 'bg-innerDark border-teal-900 border-dashed'
                    :'bg-white border-gray-100'"
                  >
                    <h2>Options:</h2>
                  </div>

                  <motion.button
                    @click="showOptions('user_profile')"
                    :whilePress="{ scale: 0.6 }"
                    :transition="{ type:'spring',duration: 0.1, ease:'easeInOut' }"
                    class="w-full border flex justify-center items-center rounded-2xl py-2 cursor-pointer transition-all ease-in-out duration-500"
                    :class="useThemeComposable() ? 'bg-innerDark text-teal-500 hover:text-white border-teal-900 hover:border-teal-500 hover:shadow-9xl'
                    :'bg-white hover:shadow-green hover:border-green-500 hover:shadow-gre hover:text-green-500 border-teal-300'"
                  > 
                    <div class="w-full flex flex-col justify-center items-center space-y-2">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                       </svg>

                        <h1 class="text-lg text-center">
                            User Profile
                        </h1>
                    </div>
                  </motion.button>

                  <motion.button
                     @click="showOptions('password_reset')"
                     :whilePress="{ scale: 0.6 }"
                     :transition="{ type:'spring',duration: 0.1, ease:'easeInOut' }"
                     class="w-full border flex justify-center items-center rounded-2xl py-2 cursor-pointer transition-all ease-in-out duration-500"
                     :class="useThemeComposable() ? 'bg-innerDark text-teal-500 hover:text-white border-teal-900 hover:border-teal-500 hover:shadow-9xl'
                     :'bg-white hover:shadow-green hover:border-green-500 hover:shadow-gre hover:text-green-500 border-teal-300'"
                   > 
                    <div class="w-full flex flex-col justify-center items-center space-y-2">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                         <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                       </svg>

                        <h1 class="text-lg text-center">
                            Password Reset
                        </h1>
                    </div>
                  </motion.button>
              </div>

              <AnimatePresence>
                <!-- Password Reset -->
                <motion.div
                  v-if="show_password_reset"
                  :initial="{ y:-100, opacity:0.2}"
                  :animate="{ y:0, opacity:1 }"
                  :transition="{ duration: 0.4, ease:'easeInOut',}"
                  :exit="{y:-100, opacity:0}"
                  class="w-full h-full flex p-1 rounded-2xl border flex-col justify-center items-center"
                  :class="useThemeComposable() ? 'border-teal-950 bg-Dark'
                  :'border-teal-200 bg-white'"
                >
                  <form
                    @submit.prevent="PasswordRest()"
                    class="p-2.5 flex flex-col space-y-4 w-full h-full rounded-2xl"
                    :class="useThemeComposable() ? 'bg-innerDark'
                    :'bg-off_white'"
                  >

                    <img class="w-full lg:h-64 md:h-56" src="/scure_password.svg" alt="scure_password">

                    <motion.div class="flex flex-col space-y-2 px-4">
                      <label for="_new_password">
                        New Password
                      </label>

                      <input 
                       id="_new_password"
                       v-model="new_password"
                       class="w-full rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2" 
                       :class="useThemeComposable() ? 'bg-teal-950 border-teal-900 focus:border-indigo-500'
                       :'bg-white border-gray-300 focus:border-green-500 focus:shadow-gre'"
                       autocomplete="current-password"
                       placeholder="Plese type your new password"
                       type="password"
                       required
                      >

                    </motion.div>

                    <motion.div class="flex flex-col space-y-2 px-4">
                      <label for="_retyped_new_password">
                        Retype Password
                      </label>

                      <input 
                       id="_retyped_new_password"
                       v-model="retyped_new_password"
                       class="w-full rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2" 
                       :class="useThemeComposable() ? 'bg-teal-950 border-teal-900 focus:border-indigo-500'
                       :'bg-white border-gray-300 focus:border-green-500 focus:shadow-gre'"
                       autocomplete="retyped-current-password"
                       placeholder="Plese retype your password"
                       type="password"
                       required
                      >
                    </motion.div>

                    <motion.div class="w-full p-2 flex justify-center items-center">
                      <motion.button
                        type="submit" 
                        :initial="button_animation.initial"
                        class="rounded-md w-1/4 py-1 px-8 border-2  font-semibold cursor-pointer
                        duration-500 ease-in-out "
                        :class="useThemeComposable() ? ''
                        :' bg-white border-teal-200 hover:text-green-500 hover:border-green-500'"
                        :whileHover="button_animation.hover"
                        :while-press="button_animation.pressed" 
                        :transition="button_animation.transition"
                      >
                        <span>Reset Password</span>
                      </motion.button>
                    </motion.div>
                  </form>
                </motion.div>
  
                <!-- User Profile -->
                <motion.div
                  v-if="show_user_profile"
                  :initial="{ y:-100, opacity:0.2}"
                  :animate="{ y:0, opacity:1 }"
                  :transition="{ duration: 0.4, delay:0.1, ease:'easeInOut',}"
                  :exit="{y:-100, opacity:0}"
                  class="w-full h-full flex p-2 rounded-2xl border"
                  :class="useThemeComposable() ? 'border-teal-950 bg-Dark'
                  :'border-teal-200 bg-white'"
                >
  
                </motion.div>
              </AnimatePresence>

            </motion.div>
         
        </motion.div>
    </motion.section>
</template>