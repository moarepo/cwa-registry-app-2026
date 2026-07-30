<script lang="ts" setup>
 import { motion, AnimatePresence } from 'motion-v';
 import {useThemeComposable}  from "../composables/useComposables"
 import {dash_animation} from "../animations_config/anime_def"
 import {useExhibitorStore} from "../store/useExhibitorStore"
 import { computed } from 'vue';

 const store = useExhibitorStore()
 let exhibitor = computed(()=>{ return store.get_exhibitor})
</script>

<template>
    <AnimatePresence>
        <motion.section
         class="flex w-full overflow-y-auto justify-center items-center lg:h-full"
         :class="useThemeComposable() ? ''
         :''"
        >
            <motion.div 
                :initial="dash_animation.initial"
                :animate="dash_animation.animate"
                :transition="dash_animation.transition"
                :exit="dash_animation.exist"
                class="flex flex-col space-y-1 p-1 lg:rounded-2xl rounded-2xl rounded-t-md border h-full w-full"
                :class="useThemeComposable() ? 'bg-Dark border-teal-900'
                :'bg-white border-teal-300'"
            >

                <motion.div
                  class="flex justify-center items-center p-0.5 w-full rounded-t-2xl rounded-b-md"
                  :class="useThemeComposable() ? 'bg-innerDark'
                  :'bg-off_white border-teal-100'"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-16">
                     <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                     <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
                    </svg>

                </motion.div>

                <motion.div
                 class="p-1.5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 w-full rounded-t-md rounded-b-2xl"
                 :class="useThemeComposable() ? 'bg-innerDark'
                 :'bg-off_white border-teal-100'"
                >
                   
                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Job Title:   <span class="font-semibold">{{ exhibitor.exhibitor_job_title }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Organization:   <span class="font-semibold">{{ exhibitor.exhibitor_organization_name }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Organization Country:  <span class="font-semibold">{{ exhibitor.exhibitor_country }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Email Address:   <span class="font-semibold">{{ exhibitor.email_address }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Address:   <span class="font-semibold">{{ exhibitor.exhibitor_company_address }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Phone Number 📱:   <span class="font-semibold">{{ exhibitor.exhibitor_phone_number }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Demonstration Options:   <span class="font-semibold">{{ exhibitor.demonstration_options }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Booth Selection: <span class="font-semibold">Option #{{ exhibitor.booth_option }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-4 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Category Options: <span class="font-semibold">{{ exhibitor.exhibitor_category_options ? exhibitor.exhibitor_category_options:'N/A' }}</span></p>
                    </div>

                    <div
                     class="p-4 flex justify-center items-center sapce-x-4 w-full rounded-md  lg:col-span-2"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Product: <span class="font-semibold">{{ exhibitor.exhibitor_product }}</span></p>
                    </div>

                
                </motion.div>
            </motion.div>
        </motion.section> 
    </AnimatePresence>
</template>