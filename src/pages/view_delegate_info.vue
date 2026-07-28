<script lang="ts" setup>
 import { motion, AnimatePresence } from 'motion-v';
 import {useThemeComposable,useDateformat}  from "../composables/useComposables"
 import {dash_animation} from "../animations_config/anime_def"
 import {useDelegateStore} from "../store/useDelegateStore"
 import { computed } from 'vue';

 const store = useDelegateStore()
 let delegate_info = computed(()=>{ return store.get_delegate})
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
                    <img class="h-24" src="/icons8-avatar-100.png" alt="avatar">
                </motion.div>

                <motion.div
                 class="p-1.5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full h-full rounded-t-md rounded-b-2xl"
                 :class="useThemeComposable() ? 'bg-innerDark'
                 :'bg-off_white border-teal-100'"
                >
                    <div
                     class="p-2.5 border flex justify-center items-center sapce-x-2 w-full rounded-md lg:col-span-3 md:col-span-2 col-span-1"
                     :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                     :'bg-white border-teal-200'"
                    >
                       <h1>Information</h1>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Title:  <span class="font-semibold">{{ delegate_info.title }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>First Name:  <span class="font-semibold">{{ delegate_info.first_name }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Middile Initial : <span class="font-semibold">{{ delegate_info.middle_initial }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Last Name: <span class="font-semibold">{{ delegate_info.last_name }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Work Email: <span class="font-semibold">{{ delegate_info.email_address }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Personal Email: <span class="font-semibold">{{ delegate_info.personal_email }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Work Phone 📱: <span class="font-semibold">{{ delegate_info.work_phone_number }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Personal Phone 📱: <span class="font-semibold">{{ delegate_info.mobile_phone_number }}</span></p>
                    </div>

                    <!--Nationality-->
                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Nationality : <span class="font-semibold">{{ delegate_info.nationality }}</span></p>
                    </div>

                   
                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Country Of Residence : <span class="font-semibold">{{ delegate_info.country_of_residence }}</span></p>
                    </div>

                    <div
                     class="p-2.5 border flex justify-center items-center sapce-x-2 w-full rounded-md lg:col-span-3 md:col-span-2 col-span-1"
                     :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                     :'bg-white border-teal-200'"
                    >
                       <h1>Emergency Contact Information</h1>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>First Name : <span class="font-semibold">{{ delegate_info.emergency_contact_first_name ? delegate_info.emergency_contact_first_name:'None' }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Last Name : <span class="font-semibold">{{ delegate_info.emergency_contact_last_name ? delegate_info.emergency_contact_last_name: 'None' }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Emergency Contact Mobile #: <span class="font-semibold">{{ delegate_info.emergency_contact_mobile_number ? delegate_info.emergency_contact_mobile_number : 'None' }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Email Address: <span class="font-semibold">{{ delegate_info.emergency_contact_email ?  delegate_info.emergency_contact_email: 'None' }}</span></p>
                    </div>

                    <div
                     class="p-2.5 border flex justify-center items-center sapce-x-2 w-full rounded-md lg:col-span-3 md:col-span-2 col-span-1"
                     :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                     :'bg-white border-teal-200'"
                    >
                       <h1>Organization Information</h1>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Organization Name : <span class="font-semibold">{{ delegate_info.organization_name }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Organization Type : <span class="font-semibold">{{ delegate_info.organization_type }}</span></p>
                    </div>

                    <div
                     class="p-2.5 border flex justify-center items-center sapce-x-2 w-full rounded-md lg:col-span-3 md:col-span-2 col-span-1"
                     :class="useThemeComposable() ? 'bg-Dark border-teal-950'
                     :'bg-white border-teal-200'"
                    >
                       <h1>Flight Information ✈️</h1>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Arrival Airline : <span class="font-semibold">{{ delegate_info.arrival_airline ? delegate_info.arrival_airline:'None' }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Arrival Flight Number : <span class="font-semibold">{{ delegate_info.arrival_flight_number ? delegate_info.arrival_flight_number:'None'}}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-md"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Arrival Date : <span class="font-semibold">{{ delegate_info.arrival_date ? useDateformat(`${delegate_info.arrival_date}`) : 'None' }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-t-md rounded-b-2xl"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Departure Airline : <span class="font-semibold">{{ delegate_info.departure_airline ? delegate_info.departure_airline:'None' }}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-t-md rounded-b-2xl"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Departure Flight Number : <span class="font-semibold">{{ delegate_info.departure_flight_number ? delegate_info.departure_flight_number:'None'}}</span></p>
                    </div>

                    <div
                     class="p-2 flex justify-center items-center sapce-x-2 w-full rounded-t-md rounded-b-2xl"
                     :class="useThemeComposable() ? 'bg-Dark'
                     :'bg-white'"
                    >
                        <p>Departure Date : <span class="font-semibold">{{ delegate_info.departure_date ? useDateformat(`${delegate_info.departure_date}`) : 'None' }}</span></p>
                    </div>

                </motion.div>
                
            </motion.div>
        </motion.section> 
    </AnimatePresence>
</template>