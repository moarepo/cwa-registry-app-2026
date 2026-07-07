<script lang="ts" setup>
    import { onMounted, computed, ref } from "vue"
    import { useThemeComposable } from '../Composables/useComposables'
    import { motion, AnimatePresence } from 'motion-v';
    import { dash_animation,staggered_animation } from "../animations_config/anime_def"
    import { useStore } from "../store/useStore"

    const _store_ = useStore()
    onMounted(async()=>{  await _store_.fetch_registion_count() })

    let delegate_info = computed(()=>{ return _store_.get_Delegates })
    let exhibitor_info = computed(()=>{ return _store_.get_Exhibitor })

    let delegate_amout = computed<number|null>(()=>{ return _store_.get_delegate_count})
    let exhibitor_amout = computed<number|null>(()=>{ return _store_.get_exhibitors_count})
    let media_amout = computed<number|null>(()=>{ return _store_.get_media_count })

    let d_table_head = ["Title","First Name","Middle Initial","Last Name","Gender","Nationality","country_of_residence"]

    function get_data(option:string){ _store_.fetch_from_data(option) }

</script>

<template>
    <section
     class="flex w-full min-h-full overflow-hidden justify-center items-center"
     :class="useThemeComposable() ? ''
     :''"
    >   <AnimatePresence> 

            <motion.div 
             :initial="dash_animation.initial"
             :animate="dash_animation.animate"
             :transition="dash_animation.transition"
             :exit="dash_animation.exist"
             class="flex flex-col space-y-2 p-2 rounded-2xl border h-full w-full"
             :class="useThemeComposable() ? 'bg-Dark border-teal-900'
             :'bg-white border-teal-300'"
            >
                <motion.div
                  class="grid grid-cols-3 p-2.5 rounded-2xl w-full gap-2 border"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-off_white border-teal-100'"
                >
                    <button
                     @click="get_data('delegates')"
                    >
                        <motion.div
                         :initial="staggered_animation(0.2,2,0,-10).initial"
                         :animate="staggered_animation(0.6,3,0,-10).animate"
                         :exit="staggered_animation(0.6,2,0,-10).exit"
                         class="flex justify-center items-center p-2 rounded-2xl text-center space-x-4 border cursor-pointer"
                         :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                         :'bg-white border-teal-300'"
                        >
                            <h2>Total # Delegate : </h2> 
                            <h2 class="text-5xl font-light">{{ delegate_amout }}</h2>
                        </motion.div>
                    </button>

                    <button
                     @click="get_data('exhibitor')"
                    >
                        <motion.div
                        :initial="staggered_animation(0.4,2,0,-10).initial"
                        :animate="staggered_animation(0.8,2,0,-10).animate"
                        :exit="staggered_animation(0.6,2,0,-10).exit"
                        class="flex justify-center items-center p-2 rounded-2xl text-center space-x-4 border cursor-pointer"
                        :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                        :'bg-white border-teal-300'"
                        >
                            <h2>Total # Exhibitor : </h2> 
                            <h2 class="text-5xl font-light">{{ exhibitor_amout }}</h2>
                        </motion.div>
                    </button>

                    <motion.div
                     :initial="staggered_animation(0.2,2,0,-10).initial"
                     :animate="staggered_animation(0.8,2,0,-10).animate"
                     :exit="staggered_animation(0.6,2,0,-10).exit"
                     class="flex justify-center items-center p-2 rounded-2xl text-center space-x-4 border cursor-pointer"
                     :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                     :'bg-white border-teal-300'"
                    >
                        <h2>Total # Media : </h2> 
                        <h2 class="text-5xl font-light">{{ media_amout }}</h2>
                    </motion.div>

                </motion.div>

                <motion.div
                 class="flex flex-col space-y-4 w-full p-2 rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                >

                    <div class="w-full p-2 flex">

                        <table
                         class="table-auto border-separate lg:border-spacing-2 border-spacing-1 border-2 rounded-lg w-full"
                         :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                         : 'bg-white border-gray-100'"
                        >
                            <thead>
                                <tr>
                                    <th 
                                    v-for="header in d_table_head"
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
                                    v-for="(item,index) in delegate_info"
                                    :key="index"
                                    :class="useThemeComposable() ? {
                                    'bg-Dark': index%2 === 0,
                                    'bg-teal-950': index%2 === 1
                                    }:{
                                    'bg-primary': index%2 === 0,
                                    'bg-gray-50': index%2 === 1
                                    }"
                                >
                                    <td class="text-center rounded-md px-2 py-2">{{ item.title }}</td>
                                    <td class="text-center rounded-md px-2 py-2">{{ item.first_name }}</td>
                                    <td class="text-center rounded-md px-2 py-2">{{ item.middle_initial }}</td>
                                    <td class="text-center rounded-md px-2 py-2">{{ item.last_name }}</td>
                                    <td class="text-center rounded-md px-2 py-2">{{ item.gender }}</td>
                                    <td class="text-center rounded-md px-2 py-2">{{ item.nationality }}</td>
                                    <td class="text-center rounded-md px-2 py-2">{{ item.country_of_residence }}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                   
                    {{ exhibitor_info }}
                </motion.div>

            </motion.div>

            
        </AnimatePresence>
    </section>
</template>