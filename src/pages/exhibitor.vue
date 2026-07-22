<script lang="ts" setup>
import {computed} from "vue"
import {useThemeComposable} from '../composables/useComposables'
import { motion, AnimatePresence } from 'motion-v';
import {dash_animation} from '../animations_config/anime_def'
import {useExhibitorStore} from '../store/useExhibitorStore'

const store = useExhibitorStore()
store.fetch_all_exhibitors()

let List = computed(()=>{ return store.get_list_Exhibitors})
let Page = computed(()=>{ return store.get_current_page})

const e_table_head = ["Exhibitor Name","Email","Job Title","Organization Name","Address","Country","Exhibitor Product"]
</script>

<template>
    <section
     class="flex w-full min-h-full overflow-hidden justify-center items-center"
     :class="useThemeComposable() ? ''
     :''"
    >   
        <AnimatePresence> 
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
                  class="border w-full flex justify-start items-center py-1.5 px-8 rounded-md"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-off_white border-teal-100'"
                >
                    <motion.div
                     class="p-0.5 flex space-x-2.5 justify-center items-center"
                    >
                        <h2>Search</h2>
                        <input 
                         class="lg:w-80 rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2" 
                         :class="useThemeComposable() ? 'bg-teal-950 border-teal-900 focus:border-indigo-500'
                         :'bg-white border-gray-300 focus:border-green-500 focus:shadow-gre'"
                         type="text"
                         placeholder="Search by Exhibitor Name"
                        >
                    </motion.div>
                </motion.div>

                <motion.div
                 class="flex flex-col space-y-2 w-full p-1.5 rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                > 
                    <motion.div
                      class="flex w-full justify-between items-center py-2 px-8 rounded-lg border"
                      :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                      :'bg-white border-teal-200'"
                    >
                        <button
                         class="flex border justify-center items-center space-x-1 rounded-md py-1.5 px-4 cursor-pointer"
                        >   
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                             <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                            </svg>
                            <h2>Pervious</h2>
                        </button>

                        <h2>Page {{ Page }} of 0</h2>

                        <button
                          class="flex border justify-center items-center space-x-1 rounded-md py-1.5 px-4 cursor-pointer"
                        >
                            <h2>Next</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 rotate-180">
                            <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                            </svg>

                        </button>

                    </motion.div>
                    <div class="lg:flex hidden w-full">
                            <table
                             class="table-auto border-separate border-spacing-1 border-2 rounded-lg w-full text-sm"
                             :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                             : 'bg-white border-gray-100'"
                            >
                                <thead>
                                    <tr>
                                        <th 
                                        v-for="header in e_table_head"
                                        :key="header"
                                        class="border rounded-md p-0.5 text-sm font-semibold"
                                        :class="useThemeComposable() ? 'bg-Dark border-gray-700'
                                        : 'border-light_text_colour bg-white'"
                                        >
                                        {{ header }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(item,index) in List"
                                        :key="index"
                                        :class="useThemeComposable() ? {
                                        'bg-Dark': index%2 === 0,
                                        'bg-teal-950': index%2 === 1
                                        }:{
                                        'bg-primary': index%2 === 0,
                                        'bg-gray-50': index%2 === 1
                                        }"
                                    >
                                        <td class="text-center rounded-md px-2 py-2">{{ item.exhibitor_full_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.email_address }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.exhibitor_job_title }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.exhibitor_organization_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.exhibitor_company_address }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.exhibitor_country }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.exhibitor_product }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                </motion.div> 

            </motion.div>
        </AnimatePresence>
    </section>
</template>