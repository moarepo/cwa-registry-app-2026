import {defineStore} from "pinia"
import type {Database} from '../utils/database.types'
import {supabase} from "../supabase_config/supabaseConfig"
import {useAlertModalComposable} from "../composables/useComposables"
import router from "../router/router"

export const useExhibitorStore = defineStore('useExhibitorStore',{
    state:()=>({
        Exhibitors: [] as [] as Database['public']['Tables']['exhibitor_table']['Row'][],
        exhibitor: {} as Database['public']['Tables']['exhibitor_table']['Row'],
        page: 1 as number,
        total: 0 as number,
        number_of_pages: 0 as number
    }),
    getters:{
        get_list_Exhibitors: (state) => state.Exhibitors,
        get_exhibitor: (state) => state.exhibitor,
        get_current_page: (state)=> state.page
    },
    actions:{
        async fetch_all_exhibitors(){
            const page_size:number = 10;
            const start:number = (this.page - 1) * page_size;
            const end = start + page_size -1
 
            const { error, count, data } = await supabase
            .from('exhibitor_table')
            .select('*',{ count:'exact'})
            .order('exhibitor_full_name',{ ascending: true })
            .range(start,end)

            if(data){ 
                this.Exhibitors = data
                this.total = Number(count)
                this.number_of_pages = Math.ceil(this.total / page_size) 
            }

            if(error){ 
                const error_message = error?.message ?? 'Failed to fetch Exhibitors Infomation.';
                useAlertModalComposable(error_message); 
            }
        }, 

        async fetch_exhibitor_by_Id(exhibitor_id:number){
            const { error, data } = await supabase
            .from("exhibitor_table")
            .select("*")
            .eq('exhibitor_registration_id',exhibitor_id)

            if(data){
                this.exhibitor = data[0]
                router.push("/view_exhibitor_info")
            }

            if(error){
                useAlertModalComposable(error.message)
            }
        },

        async next(){
            if(this.page < this.number_of_pages){
                this.page += 1
                await this.fetch_all_exhibitors()
            }
        },

        async pervious(){
           if(this.page > 1){
             this.page -= 1
             await this.fetch_all_exhibitors()
           }
        },
    }
})