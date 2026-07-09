<script lang="ts" setup>
    import { Pie, Bar } from 'vue-chartjs'
    import { Chart as 
        ChartJS, 
        ArcElement, 
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    } from 'chart.js'
    import { computed, ref } from "vue"
    import { useThemeComposable, useChartOptions, usePieChartData, useBarChartData, useEXPieChartData, useEXBarChartData } from '../Composables/useComposables'
    import { motion, AnimatePresence } from 'motion-v';
    import { dash_animation,staggered_animation, page_indcator_animation } from "../animations_config/anime_def"
    import { useStore } from "../store/useStore"
    import { useDelegateMeetingStore } from "../store/useDelegateMeetingStore"

    ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale,LinearScale,)

    const _store_ = useStore()
    const meet = useDelegateMeetingStore()

    _store_.fetch_registion_count() 
    meet.fetch_meetings_count() 
    
    setInterval(()=>{
        _store_.fetch_registion_count() 
        meet.fetch_meetings_count() 
    },5500)

    
    let delegate_info = computed(()=>{ return _store_.get_Delegates })
    let exhibitor_info = computed(()=>{ return _store_.get_Exhibitor })
    let media_info =  computed(()=>{ return _store_.get_Media_info })
    
    let show_exhibitor_info = ref<boolean>(false)
    let show_delegate_info =  ref<boolean>(false)
    let show_media_info =  ref<boolean>(false)

    let delegate_amout = computed<number|null>(()=>{ return _store_.get_delegate_count})
    let exhibitor_amout = computed<number|null>(()=>{ return _store_.get_exhibitors_count})
    let media_amout = computed<number|null>(()=>{ return _store_.get_media_count })

    let d_table_head = ["Title","First Name","Middle Initial","Last Name","Gender","Nationality","country_of_residence"]
    let e_table_head = ["Exhibitor Name","Email","Job Title","Organization Name","Address","Country","Exhibitor Product"]
    let m_table_head = ["Name","Email","Position","Organization Name","Media Category","Address","Country","Nationality"]

    function get_data(option:string){ 

        if(option === 'delegates'){
            show_delegate_info.value = true
        }else{
            show_delegate_info.value = false
        }

        if(option === 'exhibitor'){
            show_exhibitor_info.value = true
        }else{
            show_exhibitor_info.value = false
        }

        if(option === 'media'){
            show_media_info.value = true
        }else{
            show_media_info.value = false
        }
        _store_.fetch_from_data(option)
        setTimeout(()=>{  _store_.fetch_from_data(option) },5600)
    }

    let showDispaly = computed<boolean>(()=>{ 
        if(show_exhibitor_info.value === false && show_delegate_info.value === false && show_media_info.value === false){
            return true
        }else{
            return false
        }
    })
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
             class="flex flex-col space-y-1 p-1.5 rounded-2xl border h-full w-full"
             :class="useThemeComposable() ? 'bg-Dark border-teal-900'
             :'bg-white border-teal-300'"
            >
                <motion.div
                  class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-1.5 rounded-2xl w-full gap-1 border"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-off_white border-teal-100'"
                >

                    <motion.div
                     class="flex justify-center items-center p-2.5 rounded-2xl lg:col-span-3 md:col-span-2 col-span-1"
                     :class="useThemeComposable() ? 'bg-Dark border-teal-950':'bg-white border-teal-300'"
                    >
                        <p>
                            Please select an option below to review results:
                        </p>
                    </motion.div>

                    <button
                     @click="get_data('delegates')"
                    >
                        <motion.div
                         :initial="staggered_animation(0.2,2,0,-10).initial"
                         :animate="staggered_animation(0.6,3,0,-10).animate"
                         :exit="staggered_animation(0.6,2,0,-10).exit"
                         class="flex justify-center items-center p-1 rounded-2xl text-center space-x-4 border cursor-pointer 
                         md:col-span-2 lg:col-end-1 col-end-1 transition-all ease-in-out duration-700 "
                         :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                         :'bg-white border-teal-300 hover:shadow-grel hover:border-indigo-500 hover:text-indigo-500'"
                        >
                            <motion.div
                                v-if="show_delegate_info"
                                :initial="page_indcator_animation.initial"
                                :animate="page_indcator_animation.animate"
                                :transition="page_indcator_animation.transition"
                                class="animate-pulse p-2.5 rounded-full"
                                :class="useThemeComposable() ? 'bg-teal-500'
                                :'bg-indigo-500'"
                            ></motion.div>

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
                            class="flex justify-center items-center p-1 rounded-2xl text-center space-x-4 border cursor-pointer 
                            md:col-span-2 lg:col-end-1 col-end-1 transition-all ease-in-out duration-700 "
                            :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                            :'bg-white border-teal-300 hover:shadow-grel hover:border-indigo-500 hover:text-indigo-500'"
                        >   
                            <motion.div
                                v-if="show_exhibitor_info"
                                :initial="page_indcator_animation.initial"
                                :animate="page_indcator_animation.animate"
                                :transition="page_indcator_animation.transition"
                                class="animate-pulse p-2.5 rounded-full"
                                :class="useThemeComposable() ? 'bg-teal-500'
                                :'bg-indigo-500'"
                            ></motion.div>

                            <h2>Total # Exhibitor : </h2> 
                            <h2 class="text-5xl font-light">{{ exhibitor_amout }}</h2>
                        </motion.div>
                    </button>

                    <button
                     @click="get_data('media')"
                    >
                        <motion.div
                         :initial="staggered_animation(0.2,2,0,-10).initial"
                         :animate="staggered_animation(0.8,2,0,-10).animate"
                         :exit="staggered_animation(0.6,2,0,-10).exit"
                         class="flex justify-center items-center p-1 rounded-2xl text-center space-x-4 border cursor-pointer 
                         md:col-span-2 lg:col-end-1 col-end-1 transition-all ease-in-out duration-700 "
                         :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                         :'bg-white border-teal-300 hover:shadow-grel hover:border-indigo-500 hover:text-indigo-500'"
                        >
                            <motion.div
                                v-if="show_media_info"
                                :initial="page_indcator_animation.initial"
                                :animate="page_indcator_animation.animate"
                                :transition="page_indcator_animation.transition"
                                class="animate-pulse p-2.5 rounded-full"
                                :class="useThemeComposable() ? 'bg-teal-500'
                                :'bg-indigo-500'"
                            ></motion.div>

                            <h2>Total # Media : </h2> 
                            <h2 class="text-5xl font-light">{{ media_amout }}</h2>
                        </motion.div>
                    </button>

                </motion.div>

                <motion.div
                 v-if="!showDispaly"
                 class="flex flex-col space-y-4 w-full p-2 rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                >

                    <motion.div 
                     v-if="show_delegate_info"
                     :initial="staggered_animation(0.2,1,-100,0).initial"
                     :animate="staggered_animation(0.4,1,0,0).animate"
                     :exit="staggered_animation(0.2,1,100,0).exit"
                     class="w-full flex flex-col space-y-1 "
                    >

                        <motion.div
                         :initial="staggered_animation(0.1,1,0,-100).initial"
                         :animate="staggered_animation(0.3,1,0,0).animate"
                         :exit="staggered_animation(0.2,1,1,100).exit"
                         class="flex flex-col space-y-4 p-2.5 rounded-md justify-center items-center"
                         :class="useThemeComposable() ? 'bg-Dark'
                         :'bg-white'"
                        >
                            <h2 class="text-2xl">Delegates Information</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam quod nesciunt magnam animi mollitia in a possimus, beatae deserunt qui suscipit esse.</p>
                        </motion.div>

                        <motion.div
                         :initial="staggered_animation(0.1,1,-100,0).initial"
                         :animate="staggered_animation(0.4,1.5,0,0).animate"
                         :exit="staggered_animation(0.2,1,100,0).exit"
                         class="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 p-1"
                        >
                            <div
                             class="flex flex-col space-y-2 rounded-md w-full h-96 py-8 px-2"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <h2 class="font-semibold text-center">Gender</h2>
                                <Pie class="cursor-pointer" :data="usePieChartData()" :options="useChartOptions()"/>
                            </div>

                            <div
                             class="flex flex-col space-y-2 rounded-md w-full h-96 py-8 px-2"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <Bar class="cursor-pointer" :data="useBarChartData()" :options="useChartOptions()"/>
                            </div>
                        </motion.div>
                       
                        <div class="lg:flex hidden w-full">
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
                    </motion.div>
                    
                    <motion.div 
                     v-if="show_exhibitor_info"
                     :initial="staggered_animation(0.2,1,100,0).initial"
                     :animate="staggered_animation(0.4,1,0,10).animate"
                     :exit="staggered_animation(0.2,1,-100,0).exit"
                     class="w-full flex flex-col space-y-1 "
                    >
                        <motion.div
                         :initial="staggered_animation(0.1,1,0,-100).initial"
                         :animate="staggered_animation(0.3,1,0,0).animate"
                         :exit="staggered_animation(0.2,1,1,100).exit"
                         class="flex flex-col space-y-1 p-1.5 rounded-md justify-center items-center"
                         :class="useThemeComposable() ? 'bg-Dark'
                         :'bg-white'"
                        >
                            <h2 class="text-2xl">Exhibitor Information</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam quod nesciunt magnam animi mollitia in a possimus, beatae deserunt qui suscipit esse.</p>
                        </motion.div>

                        <motion.div
                         :initial="staggered_animation(0.1,1,-100,0).initial"
                         :animate="staggered_animation(0.4,1.5,0,0).animate"
                         :exit="staggered_animation(0.2,1,100,0).exit"
                         class="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 p-1"
                        >
                            <div
                             class="flex flex-col space-y-1 rounded-md w-full h-96 py-7 px-2"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <h2 class="font-semibold text-center">Exhibitor Type</h2>
                                <Pie class="cursor-pointer" :data="useEXPieChartData()" :options="useChartOptions()"/>
                            </div>

                            <div
                             class="flex flex-col space-y-2 rounded-md w-full h-96 py-7 px-2"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <h2 class="font-semibold text-center">Booth Selection</h2>
                                <Bar class="cursor-pointer" :data="useEXBarChartData()" :options="useChartOptions()"/>
                            </div>

                        </motion.div>

                        <div class="lg:flex hidden w-full">
                            <table
                             class="table-auto border-separate lg:border-spacing-2 border-spacing-1 border-2 rounded-lg w-full"
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
                                        v-for="(item,index) in exhibitor_info"
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
                                        <td class="text-center rounded-md px-2 py-2">{{ item.email_address }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.exhibitor_country }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.exhibitor_product }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </motion.div>

                    <motion.div 
                     v-if="show_media_info"
                     :initial="staggered_animation(0.2,1,0,-100).initial"
                     :animate="staggered_animation(0.4,1,0,0).animate"
                     :exit="staggered_animation(0.2,1,0,100).exit"
                     class="w-full p-2 flex"
                    >   
                        <div class="lg:flex hidden w-full">
                            <table
                             class="table-auto border-separate lg:border-spacing-2 border-spacing-1 border-2 rounded-lg w-full"
                             :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                             : 'bg-white border-gray-100'"
                            >
                                <thead>
                                    <tr>
                                        <th 
                                        v-for="header in m_table_head"
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
                                        <td class="text-center rounded-md px-2 py-2">{{ item.media_full_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.media_email }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.media_position }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.media_organization_name }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.media_category_options }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.media_address }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.media_country }}</td>
                                        <td class="text-center rounded-md px-2 py-2">{{ item.media_nationality }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                  v-if="showDispaly"
                  :initial="staggered_animation(0.2,1,0,100).initial"
                  :animate="staggered_animation(0.4,1,0,0).animate"
                  :exit="staggered_animation(0.2,1,0,100).exit"
                  class="flex w-full flex-col space-y-2 h-full justify-center items-center p-1.5 rounded-2xl border"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-white border-teal-100'"
                >   
                    <h1>Welcome</h1>
                    <img class="h-80 overflow-hidden rounded-lg" src="/loadpage.png" alt="placeholder">
                </motion.div>
                
            </motion.div>
        </AnimatePresence>
    </section>
</template>