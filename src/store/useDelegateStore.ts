import {defineStore} from "pinia"
import {supabase} from "../supabase_config/supabaseConfig"
import type {Database} from '../utils/database.types'
import {useAlertModalComposable} from '../composables/useComposables'
export const useDelegateStore = defineStore("useDelegateStore",{
    state:()=>({
        Delegates: [] as Database['public']['Tables']['registration_table']['Row'][],
        delegate : {} as Database['public']['Tables']['registration_table']['Row'],
        BarChatData: [] as number[],
        PieChatData: [] as number[],
        page: 1 as number,
        total: 0 as number,
        number_of_pages: 0 as number,
    }),
    getters:{
        getDelegates: (state) => state.Delegates,
        get_delegate: (state) => state.delegate,
        get_current_page: (state) => state.page,
        get_total_pages: (state) => state.number_of_pages,
        get_BarChatData: (state) => state.BarChatData,
        get_PieChatData: (state) => state.PieChatData
    },
    actions:{
        async fetch_all_delegates(){
           const page_size:number = 10;
           const start:number = (this.page - 1) * page_size;
           const end = start + page_size -1

           const { data, count, error } = await supabase
           .from('registration_table')
           .select('*',{ count:'exact'})
           .range(start,end)

           if(!error && data !== null){
             console.log(count)
             this.Delegates = data
             this.total = Number(count)
             this.number_of_pages = Math.ceil(this.total / page_size)
           }else{
               const error_message = error?.message ?? 'Failed to fetch delegates';
               useAlertModalComposable(error_message); 
           }
        },

        async fetch_barChart_data() {
            let countsMap:any

            const categories = [
                'Government', 
                'NGO', 
                'Private Sector', 
                'Farmer', 
                'Academic', 
                'Regional Body'
            ];

            const { data, error } = await supabase
                .from('registration_table')
                .select('organization_type');

            if (error) {
                useAlertModalComposable(error.message);
            }

            if(data != null){
                countsMap = data.reduce((acc: Record<string, number>, row) => {
                    if (row.organization_type) {
                        acc[row.organization_type] = (acc[row.organization_type] || 0) + 1;
                    }
                    return acc;
                }, {});
            }
          
            const chartSeries: number[] = categories.map(cat => countsMap[cat] || 0);

            this.BarChatData=chartSeries;
        },

        async fetch_pie_chart_data() {
           
            const caricomStates = [
                'Antigua and Barbuda',
                'Bahamas',
                'Barbados',
                'Belize',
                'Dominica',
                'Grenada',
                'Guyana',
                'Haiti',
                'Jamaica',
                'Montserrat',
                'Saint Kitts and Nevis',
                'Saint Lucia',
                'Saint Vincent and the Grenadines',
                'Suriname',
                'Trinidad and Tobago',
                'United States of America',
                'Canada',
                'Mexico',
                'United Kingdom of Great Britain and Northern Ireland'
            ]

            const { data, error } = await supabase
                .from('registration_table')
                .select('nationality');

            if (error) {
                useAlertModalComposable(error.message);
                return;
            }

            const countsMap: Record<string, number> = {};

            if (data) {
                data.forEach((row) => {
                    if (row.nationality) {
                        const countryKey = row.nationality.trim().toLowerCase();
                        countsMap[countryKey] = (countsMap[countryKey] || 0) + 1;
                    }
                });
            }

          
            const chartSeries: number[] = caricomStates.map(
                (country) => countsMap[country.toLowerCase()] || 0
            );
            this.PieChatData = chartSeries;
        },

        // async filter_by_frist_name(frist_name:string){

        // },

        async next(){
            if(this.page < this.number_of_pages){
                this.page += 1
                await this.fetch_all_delegates()
            }
        },

        async pervious(){
           if(this.page > 1){
             this.page -= 1
             await this.fetch_all_delegates()
           }
        }
    }
})