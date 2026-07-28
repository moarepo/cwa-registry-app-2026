<script lang="ts" setup>
import { computed } from "vue"
import {useThemeComposable} from '../composables/useComposables'
import { motion, AnimatePresence } from 'motion-v';
import {dash_animation,staggered_animation} from '../animations_config/anime_def'
import { useStore } from "../store/useStore"

 const _store_ = useStore()

 let m_table_head = ["Name","Email","Position","Organization Name","Media Category","Address","Country","Nationality"]
 let media_info =  computed(()=>{ return _store_.get_Media_info })
</script>

<template>
    <section
     class="flex w-full h-full overflow-hidden justify-center items-center"
     :class="useThemeComposable() ? ''
     :''"
    >   
        <AnimatePresence> 
            <motion.div 
             :initial="dash_animation.initial"
             :animate="dash_animation.animate"
             :transition="dash_animation.transition"
             :exit="dash_animation.exist"
             class="flex flex-col space-y-1 p-1.5 rounded-2xl border lg:h-full w-full"
             :class="useThemeComposable() ? 'bg-Dark border-teal-900'
             :'bg-white border-teal-300'"
            >

                <motion.div
                  class="border w-full flex p-1.5 rounded-md"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-off_white border-teal-100'"
                >
                </motion.div>

                <motion.div
                 class="flex flex-col space-y-4 w-full p-1 rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                > 
                 <motion.div 
                     :initial="staggered_animation(0.2,1,0,-100).initial"
                     :animate="staggered_animation(0.4,1,0,0).animate"
                     :exit="staggered_animation(0.2,1,0,100).exit"
                     class="w-full flex"
                    >   
                        <div class="lg:flex hidden w-full">
                            <table
                             class="table-auto border-separate border-spacing-1 border-2 rounded-2xl w-full text-sm p-2"
                             :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                             : 'bg-white border-gray-100'"
                            >
                                <thead>
                                    <tr>
                                        <th 
                                        v-for="header in m_table_head"
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
                                    <tr
                                        v-for="(item,index) in media_info"
                                        :key="index"
                                        :class="useThemeComposable() ? {
                                        'bg-Dark': index%2 === 0,
                                        'bg-teal-950': index%2 === 1
                                        }:{
                                        'bg-primary': index%2 === 0,
                                        'bg-gray-50': index%2 === 1
                                        }"
                                    >
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.media_full_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.media_email }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.media_position }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.media_organization_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.media_category_options }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.media_address }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.media_country }}</td>
                                        <td class="text-center rounded-md px-2 py-2 capitalize">{{ item.media_nationality }}</td>
                                        <td class="px-8 py-0.5">
                                            <button
                                              class="border rounded-md px-2 py-1"
                                              :class="useThemeComposable() ? ''
                                              :''"
                                            >
                                                <span>view</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </motion.div> 


            </motion.div>
        </AnimatePresence>
    </section>
</template>