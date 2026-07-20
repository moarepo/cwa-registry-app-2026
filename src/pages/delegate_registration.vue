<script lang="ts" setup>
 import { computed } from "vue"
 import { useDelegateStore } from "../store/useDelegateStore"
 import { motion, AnimatePresence } from "motion-v";
 import { useThemeComposable } from "../Composables/useComposables"
 import { dash_animation, staggered_animation } from '../animations_config/anime_def'

 const store = useDelegateStore()
 store.fetch_all_delegates()

 const table_head:string[] = ["Title","First Name","Last Name","Email","Work Phone Number","Nationality","Country Of Residence","Organization Name","Organization Type"]
 let Delegates = computed(()=>{ return store.getDelegates})
 let Page = computed(()=>{ return store.get_current_page})
 let TotalPages = computed(()=>{ return store.get_total_pages})

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
             class="flex flex-col space-y-0.5 p-1 rounded-2xl border h-full w-full"
             :class="useThemeComposable() ? 'bg-Dark border-teal-900'
             :'bg-white border-teal-300'"
            >

                <!-- <motion.div
                  class="border w-full flex justify-start items-center py-1 px-8 rounded-md"
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
                         placeholder="..."
                        >
                    </motion.div>
                </motion.div> -->

                <motion.div
                 class="flex flex-col space-y-0.5 w-full p-1.5 rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                > 
                    <motion.div
                      class="flex w-full justify-between items-center py-1.5 px-8 rounded-lg border"
                      :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                      :'bg-white border-teal-200'"
                    >
                        <button
                         @click="store.pervious()"
                         class="flex border justify-center items-center space-x-1 rounded-md py-1 px-4 cursor-pointer"
                        >   
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                             <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                            </svg>
                            <h2>Pervious</h2>
                        </button>

                        <h2>Page {{ Page }} of {{ TotalPages }}</h2>

                        <button
                          @click="store.next()"
                          class="flex border justify-center items-center space-x-1 rounded-md py-0.5 px-4 cursor-pointer"
                        >
                            <h2>Next</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 rotate-180">
                            <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                            </svg>

                        </button>

                    </motion.div>
                    <div class="lg:flex hidden w-full">
                            <motion.table
                             class="table-auto border-separate border-spacing-1 border-2 rounded-lg w-full text-sm"
                             :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                             : 'bg-white border-gray-100'"
                            >
                                <thead>
                                    <tr>
                                        <th 
                                        v-for="header in table_head"
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
                                    <motion.tr
                                        v-for="(item,index) in Delegates"
                                        :key="index"
                                        :class="useThemeComposable() ? {
                                        'bg-Dark': index%2 === 0,
                                        'bg-teal-950': index%2 === 1
                                        }:{
                                        'bg-primary': index%2 === 0,
                                        'bg-gray-50': index%2 === 1
                                        }"
                                        :initial="staggered_animation(index / 10,0.1,0,-25).initial"
                                        :animate="staggered_animation(index / 10,0.1,0,-25).animate"
                                        :transition="staggered_animation(index / 10,0.1,0,-25).transition"
                                        :exit="staggered_animation(index / 10,0.1,0,-25).exit"
                                    >
                                        <td class="text-center rounded-md px-2 py-2">{{ item.title }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.first_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.last_name }}</td>
                                        <!-- <td class="text-center rounded-md px-2 py-2">{{ item.middle_initial }}</td> -->
                                        <td class="text-center rounded-md px-2 py-2">{{ item.email_address }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.work_phone_number }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.nationality }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.country_of_residence }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.organization_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.organization_type }}</td>
                                    </motion.tr>
                                </tbody>
                            </motion.table>
                    </div> 
                </motion.div> 

            </motion.div>
        </AnimatePresence>
    </section>
</template>