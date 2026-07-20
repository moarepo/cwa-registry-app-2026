import {defineStore} from "pinia"
import type {Database} from '../utils/database.types'
import {supabase} from "../supabase_config/supabaseConfig"
import {useAlertModalComposable} from "../Composables/useComposables"

export const useExhibitorStore = defineStore('useExhibitorStore',{
    state:()=>({
        Exhibitors: [] as [] as Database['public']['Tables']['exhibitor_table']['Row'][],
        exhibitor: {} as Database['public']['Tables']['exhibitor_table']['Row'],
        limit: 10 as number,
        offset: 0 as number,
        current_page: 1 as number
    }),
    getters:{
        get_list_Exhibitors: (state) => state.Exhibitors,
        get_exhibitor: (state) => state.exhibitor,
        get_current_page: (state)=> state.current_page
    },
    actions:{
        async fetch_all_exhibitors(){
            try {
                
                const { error, data } = await supabase.from('exhibitor_table').select().range(this.offset,this.limit)

                if(data){ this.Exhibitors = data }

                if(error){ useAlertModalComposable(error.message) }

            } catch (error:any) {
                useAlertModalComposable(error.message)
            }
        }, 

        async next_in_list(){
            try {
                this.current_page += 1
                this.offset += 10
                this.limit += 10

                const { error, data } = await supabase.from('exhibitor_table').select().range(this.offset,this.limit)

                if(data){ this.Exhibitors = data }

                if(error){ useAlertModalComposable(error.message) }
                
            } catch (error:any) {
                useAlertModalComposable(error.message)
            }
        }
    }
})