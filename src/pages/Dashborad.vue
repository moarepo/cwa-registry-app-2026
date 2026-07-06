<script lang="ts" setup>
    import { onMounted, computed } from "vue"
    import { useThemeComposable } from '../Composables/useComposables'
    import { motion, AnimatePresence } from 'motion-v';
    import { dash_animation,staggered_animation } from "../animations_config/anime_def"
    import { useStore } from "../store/useStore"

    const _store_ = useStore()
    onMounted(async()=>{  await _store_.fetch_registion_count() })

    let delegate_amout = computed<number|null>(()=>{ return _store_.get_delegate_count})
    let exhibitor_amout = computed<number|null>(()=>{ return _store_.get_exhibitors_count})
    let media_amout = computed<number|null>(()=>{ return _store_.get_media_count })

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
                 class="flex w-full p-2 rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                >

                </motion.div>

                
            </motion.div>

            
        </AnimatePresence>
    </section>
</template>