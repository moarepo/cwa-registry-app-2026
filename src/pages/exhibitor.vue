<script lang="ts" setup>
import {computed, ref} from "vue"
import {useThemeComposable,useAlertModalComposable} from '../composables/useComposables'
import { motion, AnimatePresence } from 'motion-v';
import {dash_animation,button_animation_normal,staggered_animation} from '../animations_config/anime_def'
import {useExhibitorStore} from '../store/useExhibitorStore'

const store = useExhibitorStore()
store.fetch_all_exhibitors()

let search_value = ref<string>("")

let List = computed(()=>{ return store.get_list_Exhibitors})
let Page = computed(()=>{ return store.get_current_page})

const e_table_head = ["Exhibitor Name","Email","Job Title","Organization Name","Address","Country","Exhibitor Product"]
const e_table_head_lg = ["Exhibitor Name","Email","Job Title","Country"]

function view_info(id:string){ store.fetch_exhibitor_by_Id(id) }

function seach_name(){
    if(search_value.value === ""){
        useAlertModalComposable("Please ensure the a name is entered.")
    }else{
        store.search_exhibitor_by_name(search_value.value)
    }
}

function reset(){ 
    search_value.value = ""
    store.exhibitor_reset()
}
</script>

<template>
    <section
     class="flex w-full overflow-y-auto justify-center items-center"
     :class="useThemeComposable() ? ''
     :''"
    >   
        <AnimatePresence> 
            <motion.div 
             :initial="dash_animation.initial"
             :animate="dash_animation.animate"
             :transition="dash_animation.transition"
             :exit="dash_animation.exist"
             class="flex flex-col space-y-1 xl:p-1.5 p-1 rounded-2xl border h-full w-full"
             :class="useThemeComposable() ? 'bg-Dark border-teal-900'
             :'bg-white border-teal-300'"
            >

                <motion.div
                  class="border w-full flex justify-between items-center py-1.5 px-8.5 rounded-md rounded-t-2xl"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-off_white border-teal-100'"
                >
                    <motion.div
                     class="p-0.5 flex space-x-2.5 justify-center items-center w-1/2"
                    >
                        <h2>Search</h2>
                        <input 
                         v-model="search_value"
                         class="w-full rounded-md border-2 p-1 transtion-all ease-in duration-500 outline-none focus:border-2" 
                         :class="useThemeComposable() ? 'bg-teal-950 border-teal-900 focus:border-indigo-500'
                         :'bg-white border-gray-300 focus:border-green-500 focus:shadow-gre'"
                         type="text"
                         placeholder="Search by Exhibitor Name"
                        >
                        <motion.button
                         @click="seach_name()"
                         :initial="button_animation_normal.initial"
                         :whileHover="button_animation_normal.hover"
                         :while-press="button_animation_normal.pressed" 
                         :transition="button_animation_normal.transition"
                         class="flex justify-center items-center border-2 rounded-md p-1 transition-all ease-in-out duration-700 cursor-pointer"
                         :class="useThemeComposable() ? 'bg-Dark border-teal-900 text-teal-800 hover:text-teal-500 hover:border-teal-500'
                         :'bg-white border-teal-400 text-teal-400 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500  hover:shadow-ind'"
                        >
                            <svg 
                             xmlns="http://www.w3.org/2000/svg" 
                             viewBox="0 0 24 24" 
                             fill="currentColor" 
                             class="size-6 transition-all ease-in-out duration-700 hover:rotate-90"
                            >
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                            </svg>
                        </motion.button>
                    </motion.div>

                    <motion.button
                        @click="reset()"
                        :initial="button_animation_normal.initial"
                        :whileHover="button_animation_normal.hover"
                        :while-press="button_animation_normal.pressed" 
                        :transition="button_animation_normal.transition"
                        class="flex space-x-1.5 justify-center items-center border-2 rounded-md py-1 px-1.5 transition-all ease-in-out duration-700 cursor-pointer"
                        :class="useThemeComposable() ? 'bg-Dark border-teal-900 text-teal-800 hover:text-teal-500 hover:border-teal-500'
                        :'bg-white border-teal-400 text-teal-400 hover:text-indigo-500 hover:bg-indigo-50 hover:border-indigo-500  hover:shadow-ind'"
                    >
                        <svg 
                         xmlns="http://www.w3.org/2000/svg" 
                         viewBox="0 0 24 24" 
                         fill="currentColor" 
                         class="size-6 transition-all ease-in-out duration-700 hover:rotate-180"
                        >
                         <path fill-rule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
                        </svg>
                        <span>Reset</span>
                    </motion.button>

                    <div></div>
                </motion.div>

                <motion.div
                 class="flex flex-col space-y-2 w-full p-1.5 rounded-t-md rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                > 
                    <motion.div
                      class="flex w-full justify-between items-center xl:py-2 lg:py-1 lx:px-8 lg:px-4 rounded-lg border"
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

                        <h2>Page {{ Page }} of 1</h2>

                        <button
                          class="flex border justify-center items-center space-x-1 rounded-md py-1.5 px-4 cursor-pointer"
                        >
                            <h2>Next</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 rotate-180">
                            <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                            </svg>

                        </button>

                    </motion.div>

                    <motion.div class="lg:flex hidden w-full">
                            <motion.table
                             class="table-auto border-separate border-spacing-1 border-2 rounded-lg w-full text-sm"
                             :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                             : 'bg-white border-gray-100'"
                            >
                                <thead>
                                    <tr class="lg:hidden xl:table-row">
                                        <th 
                                        v-for="header in e_table_head"
                                        :key="header"
                                        class="border-2 rounded-md p-2 text-sm font-semibold border-dashed"
                                        :class="useThemeComposable() ? 'bg-teal-900 border-teal-900'
                                        : 'border-teal-200 bg-off_white'"
                                        >
                                        {{ header }}
                                        </th>
                                    </tr>
                                    <tr class="xl:collapse lg:visible">
                                        <th 
                                        v-for="header in e_table_head_lg"
                                        :key="header"
                                        class="border-2 rounded-md p-2 text-sm font-semibold border-dashed"
                                        :class="useThemeComposable() ? 'bg-teal-900 border-teal-900'
                                        : 'border-teal-200 bg-off_white'"
                                        >
                                        {{ header }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <motion.tr
                                        v-for="(item,index) in List"
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
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.exhibitor_full_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.email_address }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.exhibitor_job_title }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize lg:hidden xl:table-cell">{{ item.exhibitor_organization_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize lg:hidden xl:table-cell">{{ item.exhibitor_company_address }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.exhibitor_country }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize lg:hidden xl:table-cell">{{ item.exhibitor_product }}</td>
                                        <td class="px-8 py-0.5">
                                            <button
                                              @click="view_info(item.unique_id)"
                                              class="border rounded-md px-2 py-1"
                                              :class="useThemeComposable() ? ''
                                              :''"
                                            >
                                                <span>view</span>
                                            </button>
                                        </td>
                                    </motion.tr>
                                </tbody>
                            </motion.table>
                    </motion.div> 
                </motion.div> 

            </motion.div>
        </AnimatePresence>
    </section>
</template>