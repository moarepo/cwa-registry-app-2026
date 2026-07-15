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
    import { useThemeComposable, useChartOptions, useEXPieChartData, useEXBarChartData, use_bar_chart_data,useMediaBarChartData, useMediaPieChartData } from '../Composables/useComposables'
    import { motion, AnimatePresence } from 'motion-v';
    import { dash_animation,staggered_animation, page_indcator_animation } from "../animations_config/anime_def"
    import { useStore } from "../store/useStore"
    import { useDelegateMeetingStore } from "../store/useDelegateMeetingStore"

    ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale,LinearScale,)

    const _store_ = useStore()
    const meet = useDelegateMeetingStore()

    _store_.fetch_registion_count() 
    _store_.fetch_categories()
    _store_.fetch_media_types_for_pieChart()
    meet.fetch_meetings_count() 
    
    setInterval(()=>{
        _store_.fetch_registion_count() 
        meet.fetch_meetings_count() 
    },5500)
    
    let show_exhibitor_info = ref<boolean>(false)
    let show_media_info =  ref<boolean>(false)

    let exhibitor_amout = computed<number|null>(()=>{ return _store_.get_exhibitors_count})
    let media_amout = computed<number|null>(()=>{ return _store_.get_media_count })

    
    function get_data(option:string){ 

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
        if(show_exhibitor_info.value === false && show_media_info.value === false){
            return true
        }else{
            return false
        }
    })
</script>

<template>
    <mian
     class="flex w-full overflow-hidden justify-center items-center"
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
                  class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-1.5 rounded-2xl w-full gap-1 border"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-off_white border-teal-100'"
                >

                    <motion.div
                     class="flex justify-center items-center p-2.5 rounded-2xl lg:col-span-2 md:col-span-2 col-span-1"
                     :class="useThemeComposable() ? 'bg-Dark border-teal-950':'bg-white border-teal-300'"
                    >
                        <p>
                            Please select an option below to review results:
                        </p>
                    </motion.div>


                    <button
                     @click="get_data('exhibitor')"
                    >
                        <motion.div
                            :initial="staggered_animation(0.4,2,0,-10).initial"
                            :animate="staggered_animation(0.6,1.5,0,-10).animate"
                            :exit="staggered_animation(0.6,2,0,-10).exit"
                            class="flex justify-center items-center p-1 rounded-2xl text-center space-x-4 border cursor-pointer "
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
                                :'bg-indigo-500 '"
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
                         class="flex justify-center items-center p-1 rounded-2xl text-center space-x-4 border cursor-pointer w-full"
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
                     v-if="show_exhibitor_info"
                     :initial="staggered_animation(0.2,1,100,0).initial"
                     :animate="staggered_animation(0.4,1,0,10).animate"
                     :exit="staggered_animation(0.2,1,-100,0).exit"
                     class="w-full flex flex-col space-y-1"
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

                            <p>In this section contains informstional charts on the Exhibitor registartion from.</p>
                        </motion.div>

                        <motion.div
                         :initial="staggered_animation(0.1,1,-100,0).initial"
                         :animate="staggered_animation(0.3,1.2,0,0).animate"
                         :exit="staggered_animation(0.2,1,100,0).exit"
                         class="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1"
                        >
                            <div
                             class="flex flex-col space-y-0.5 rounded-md w-full lg:h-64 lg:p-8 md:h-72 md:p-6 h-96 sm:px-2 sm:py-8"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <h2 class="font-semibold text-center">Exhibitor Type</h2>
                                <Pie class="cursor-pointer" :data="useEXPieChartData()" :options="useChartOptions()"/>
                            </div>

                            <div
                             class="flex flex-col space-y-2 rounded-md w-full lg:h-64 lg:p-8 md:h-72 md:p-6 h-96 sm:px-2 sm:py-8"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <h2 class="font-semibold text-center">Booth Selection</h2>
                                <Bar class="cursor-pointer" :data="useEXBarChartData()" :options="useChartOptions()"/>
                            </div>

                        </motion.div>

                        <motion.div
                         :initial="staggered_animation(0.1,1,0,-100).initial"
                         :animate="staggered_animation(0.3,1,0,0).animate"
                         :exit="staggered_animation(0.2,1,1,100).exit"
                         class="flex flex-col space-y-1 p-1.5 rounded-md justify-center items-center h-full"
                         :class="useThemeComposable() ? 'bg-Dark'
                         :'bg-white'"
                        >
                            <div
                             class="flex flex-col space-y-0.5 rounded-md w-full h-96 py-4 px-2"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <h2 class="font-semibold text-center">Exhibitor Category</h2>
                                <Bar class="cursor-pointer" :data="use_bar_chart_data()" :options="useChartOptions()"/>
                            </div>
                        </motion.div>

                    </motion.div>

                    <motion.div 
                     v-if="show_media_info"
                     :initial="staggered_animation(0.2,1,100,0).initial"
                     :animate="staggered_animation(0.3,0.8,0,10).animate"
                     :exit="staggered_animation(0.2,1,-100,0).exit"
                     class="w-full flex flex-col space-y-1"
                    >
                        <motion.div
                         :initial="staggered_animation(0.1,1,0,-100).initial"
                         :animate="staggered_animation(0.3,1,0,0).animate"
                         :exit="staggered_animation(0.2,1,1,100).exit"
                         class="flex flex-col space-y-1 p-1.5 rounded-md justify-center items-center"
                         :class="useThemeComposable() ? 'bg-Dark'
                         :'bg-white'"
                        >
                            <h2 class="text-2xl">Media Information</h2>

                            <p>In this section contains informstional charts on the Media registartion from.</p>
                        </motion.div>

                        <motion.div
                         :initial="staggered_animation(0.1,1,-100,0).initial"
                         :animate="staggered_animation(0.4,1.6,0,0).animate"
                         :exit="staggered_animation(0.2,1,100,0).exit"
                         class="w-full flex space-x-1"
                        >
                            <div
                             class="flex flex-col space-y-0.5 rounded-md w-full h-124 py-8 px-4"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <h2 class="font-semibold text-center">Media Types</h2>
                                <Pie class="cursor-pointer" :data="useMediaPieChartData()" :options="useChartOptions()"/>
                            </div>

                            <div
                             class="flex flex-col space-y-2 rounded-md w-full h-124 py-8 px-4"
                             :class="useThemeComposable() ? 'bg-Dark'
                             :'bg-white'"
                            >   
                                <h2 class="font-semibold text-center">Media Category</h2>
                                <Bar class="cursor-pointer" :data="useMediaBarChartData()" :options="useChartOptions()"/>
                            </div>

                        </motion.div>

                        <motion.div
                         :initial="staggered_animation(0.1,1,0,-100).initial"
                         :animate="staggered_animation(0.4,0.2,0,0).animate"
                         :exit="staggered_animation(0.2,1,1,100).exit"
                         class="flex flex-col space-y-1 p-1.5 rounded-md justify-center items-center h-44"
                         :class="useThemeComposable() ? 'bg-Dark'
                         :'bg-white'"
                        ></motion.div>
                    </motion.div>

                </motion.div>

                <motion.div
                  v-if="showDispaly"
                  :initial="staggered_animation(0.2,1,0,100).initial"
                  :animate="staggered_animation(0.4,1,0,0).animate"
                  :exit="staggered_animation(0.2,1,0,100).exit"
                  class="flex w-full h-full flex-col space-y-2  justify-center items-center p-1.5 rounded-2xl border"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-white border-teal-100'"
                >   
                    <h1>Welcome</h1>
                    <img class="h-80 overflow-hidden rounded-lg" src="/loadpage.png" alt="placeholder">
                </motion.div>
                
            </motion.div>
        </AnimatePresence>
    </mian>
</template>