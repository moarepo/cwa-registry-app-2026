<script lang="ts" setup>
 import { computed } from "vue"
 import { useDelegateStore } from "../store/useDelegateStore"
 import { motion, AnimatePresence } from "motion-v";
 import { useThemeComposable } from "../composables/useComposables"
 import { dash_animation, staggered_animation } from '../animations_config/anime_def'

 const store = useDelegateStore()
 store.fetch_all_delegates()
 
 const organization_types = [ 'Government', 'NGO', 'Private Sector', 'Farmer', 'Academic', 'Regional Body'];
 const Countries:string[] = [
 "Afghanistan",
 "Albania",
 "Algeria",
 "Andorra",
 "Angola",
 "Antigua and Barbuda",
 "Argentina",
 "Armenia",
 "Australia",
 "Austria",
 "Azerbaijan",
 "Bahamas",
 "Bahrain",
 "Bangladesh",
 "Barbados",
 "Belarus",
 "Belgium",
 "Belize",
 "Benin",
 "Bhutan",
 "Bolivia",
 "Bosnia and Herzegovina",
 "Botswana",
 "Brazil",
 "Brunei",
 "Bulgaria",
 "Burkina Faso",
 "Burundi",
 "Cabo Verde",
 "Cambodia",
 "Cameroon",
 "Canada",
 "Central African Republic",
 "Chad",
 "Chile",
 "China",
 "Colombia",
 "Comoros",
 "Congo (Congo-Brazzaville)",
 "Costa Rica",
 "Croatia",
 "Cuba",
 "Cyprus",
 "Czechia (Czech Republic)",
 "Democratic Republic of the Congo",
 "Denmark",
 "Djibouti",
 "Dominica",
 "Dominican Republic",
 "Ecuador",
 "Egypt",
 "El Salvador",
 "Equatorial Guinea",
 "Eritrea",
 "Estonia",
 "Eswatini",
 "Ethiopia",
 "Fiji",
 "Finland",
 "France",
 "Gabon",
 "Gambia",
 "Georgia",
 "Germany",
 "Ghana",
 "Greece",
 "Grenada",
 "Guatemala",
 "Guinea",
 "Guinea-Bissau",
 "Guyana",
 "Haiti",
 "Holy See",
 "Honduras",
 "Hungary",
 "Iceland",
 "India",
 "Indonesia",
 "Iran",
 "Iraq",
 "Ireland",
 "Israel",
 "Italy",
 "Jamaica",
 "Japan",
 "Jordan",
 "Kazakhstan",
 "Kenya",
 "Kiribati",
 "Kuwait",
 "Kyrgyzstan",
 "Laos",
 "Latvia",
 "Lebanon",
 "Lesotho",
 "Liberia",
 "Libya",
 "Liechtenstein",
 "Lithuania",
 "Luxembourg",
 "Madagascar",
 "Malawi",
 "Malaysia",
 "Maldives",
 "Mali",
 "Malta",
 "Marshall Islands",
 "Mauritania",
 "Mauritius",
 "Mexico",
 "Micronesia",
 "Moldova",
 "Monaco",
 "Mongolia",
 "Montenegro",
 "Morocco",
 "Mozambique",
 "Myanmar (Burma)",
 "Namibia",
 "Nauru",
 "Nepal",
 "Netherlands",
 "New Zealand",
 "Nicaragua",
 "Niger",
 "Nigeria",
 "North Korea",
 "North Macedonia",
 "Norway",
 "Oman",
 "Pakistan",
 "Palau",
 "Palestine State",
 "Panama",
 "Papua New Guinea",
 "Paraguay",
 "Peru",
 "Philippines",
 "Poland",
 "Portugal",
 "Qatar",
 "Romania",
 "Russia",
 "Rwanda",
 "Saint Kitts and Nevis",
 "Saint Lucia",
 "Saint Vincent and the Grenadines",
 "Samoa",
 "San Marino",
 "Sao Tome and Principe",
 "Saudi Arabia",
 "Senegal",
 "Serbia",
 "Seychelles",
 "Sierra Leone",
 "Singapore",
 "Slovakia",
 "Slovenia",
 "Solomon Islands",
 "Somalia",
 "South Africa",
 "South Korea",
 "South Sudan",
 "Spain",
 "Sri Lanka",
 "Sudan",
 "Suriname",
 "Sweden",
 "Switzerland",
 "Syria",
 "Tajikistan",
 "Tanzania",
 "Thailand",
 "Timor-Leste",
 "Togo",
 "Tonga",
 "Trinidad and Tobago",
 "Tunisia",
 "Turkey",
 "Turkmenistan",
 "Tuvalu",
 "Uganda",
 "Ukraine",
 "United Arab Emirates",
 "United Kingdom",
 "United States of America",
 "Uruguay",
 "Uzbekistan",
 "Vanuatu",
 "Venezuela",
 "Vietnam",
 "Yemen",
 "Zambia",
 "Zimbabwe"
 ]

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

                <motion.div
                  class="border w-full p-1.5 rounded-md grid lg:grid-cols-3 md:grid-cols-2 gap-2"
                  :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                  :'bg-off_white border-teal-100'"
                >
                    <!-- Nationality -->
                    <div 
                     class="w-full p-1.5 rounded-2xl flex flex-col space-y-2.5 border"
                     :class="useThemeComposable() ? 'bg-teal-950 border-teal-900'
                     :'bg-white border-teal-100'"
                    >
                        <div 
                        class="flex justify-center items-center p-1 rounded-md"
                        :class="useThemeComposable() ? 'bg-innerDark'
                        :'bg-off_white'"
                        >
                        <h2>Search by Nationality</h2>
                        </div>

                        <div class="w-full flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4 space-x-0">

                            <div class="flex flex-col justify-center items-start space-y-2 w-full">
                                <select
                                    class="py-1.5 px-4 border-2 border-dashed rounded-md outline-none transition-all ease-in-out duration-700 w-full"
                                    :class="useThemeComposable() ? 'bg-innerDark border-teal-900 focus:border-indigo-500  focus:bg-Dark'
                                    :'bg-white border-teal-200 focus:border-indigo-500 focus:bg-white focus:shadow-5xl'"
                                    required="true"
                                >
                                    <option value="">Please select a Nationality</option>
                                    <option 
                                        v-for="country in Countries"
                                        :key="country"
                                        :value="country"
                                    >
                                        {{ country }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="w-full px-2">
                            <button
                                class="border flex justify-center items-center rounded-md p-1.5 cursor-pointer w-full
                                transition-all ease-in-out duration-500 hover:-translate-y-1 hover:scale-100"
                                :class="useThemeComposable() ? 
                                'bg-innerDark text-teal-500 hover:text-white border-teal-900 hover:border-teal-500 hover:shadow-9xl'
                                :'bg-off_white hover:shadow-green hover:border-green-500 hover:text-green-500 border-teal-400'"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <!--  Country Of Residence -->
                    <div 
                     class="w-full p-1.5 rounded-2xl flex flex-col space-y-2.5 border"
                     :class="useThemeComposable() ? 'bg-teal-950 border-teal-900'
                     :'bg-white border-teal-100'"
                    >
                        <div 
                         class="flex justify-center items-center p-1 rounded-md"
                         :class="useThemeComposable() ? 'bg-innerDark'
                         :'bg-off_white'"
                        >
                        <h2>Search by Country Of Residence</h2>
                        </div>

                        <div class="w-full flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4 space-x-0">

                            <div class="flex flex-col justify-center items-start space-y-2 p-0.5 w-full">
                                <select
                                    class="py-1.5 px-4 border-2 border-dashed rounded-md outline-none transition-all ease-in-out duration-700 w-full"
                                    :class="useThemeComposable() ? 'bg-innerDark border-teal-900 focus:border-indigo-500  focus:bg-Dark'
                                    :'bg-white border-teal-200 focus:border-indigo-500 focus:bg-white focus:shadow-5xl'"
                                    required="true"
                                >
                                    <option value="">Please select a Country</option>
                                    <option 
                                        v-for="country in Countries"
                                        :key="country"
                                        :value="country"
                                    >
                                        {{ country }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="w-full px-2">
                            <button
                                class="border flex justify-center items-center rounded-md p-1.5 cursor-pointer w-full
                                transition-all ease-in-out duration-500 hover:-translate-y-1 hover:scale-100"
                                :class="useThemeComposable() ? 
                                'bg-innerDark text-teal-500 hover:text-white border-teal-900 hover:border-teal-500 hover:shadow-9xl'
                                :'bg-off_white hover:shadow-green hover:border-green-500 hover:text-green-500 border-teal-400'"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <!-- Organization Type -->
                    <div 
                     class="w-full p-1.5 rounded-2xl flex flex-col space-y-2.5 border"
                     :class="useThemeComposable() ? 'bg-teal-950 border-teal-900'
                     :'bg-white border-teal-100'"
                    >
                        <div 
                         class="flex justify-center items-center p-1 rounded-md"
                         :class="useThemeComposable() ? 'bg-innerDark'
                         :'bg-off_white'"
                        >
                         <h2>Search by Organization Type</h2>
                        </div>

                        <div class="w-full flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-4 space-x-0">

                            <div class="flex flex-col justify-center items-start space-y-2 p-0.5 w-full">
                                <select
                                    class="py-1.5 px-4 border-2 border-dashed rounded-md outline-none transition-all ease-in-out duration-700 w-full"
                                    :class="useThemeComposable() ? 'bg-innerDark border-teal-900 focus:border-indigo-500  focus:bg-Dark'
                                    :'bg-white border-teal-200 focus:border-indigo-500 focus:bg-white focus:shadow-5xl'"
                                    required="true"
                                >
                                    <option value="">Please select an organization type</option>
                                    <option 
                                        v-for="types in organization_types"
                                        :key="types"
                                        :value="types"
                                    >
                                       {{ types }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="w-full px-2">
                            <button
                                class="border flex justify-center items-center rounded-md p-1.5 cursor-pointer w-full
                                transition-all ease-in-out duration-500 hover:-translate-y-1 hover:scale-100"
                                :class="useThemeComposable() ? 
                                'bg-innerDark text-teal-500 hover:text-white border-teal-900 hover:border-teal-500 hover:shadow-9xl'
                                :'bg-off_white hover:shadow-green hover:border-green-500 hover:text-green-500 border-teal-400'"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                 class="flex flex-col space-y-0.5 w-full p-1.5 rounded-2xl border h-full"
                 :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                 :'bg-off_white border-teal-100'"
                > 
                    <motion.div
                      class="flex w-full justify-between items-center py-2 px-8 rounded-lg border"
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
                             class="table-auto border-separate border-spacing-1 border-2 rounded-lg w-full text-sm p-2"
                             :class="useThemeComposable() ? 'bg-innerDark border-teal-950'
                             : 'bg-white border-gray-100'"
                            >
                                <thead>
                                    <tr>
                                        <th 
                                        v-for="header in table_head"
                                        :key="header"
                                        class="border-2 rounded-md p-2 text-sm font-semibold border-dashed"
                                        :class="useThemeComposable() ? 'bg-teal-900 border-teal-900'
                                        : 'border-teal-200 bg-off_white'"
                                        >
                                         <span>{{ header }}</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <motion.tr
                                        v-for="(item,index) in Delegates"
                                        :key="index"
                                        :class="useThemeComposable() ? {
                                        'bg-Dark': index%2 === 0,
                                        'bg-innerDark': index%2 === 1
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