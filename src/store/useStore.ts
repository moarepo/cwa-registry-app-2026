import {defineStore} from "pinia"
import {supabase} from "../supabase_config/supabaseConfig"
import {useDisplayStore} from "../store/useDisplayStore"

export const useStore = defineStore('useStore',{
    state:()=>({
        delegate_count: 0 as number | null,
        exhibitors_count: 0 as number | null,
        media_count: 0 as number | null
    }),
    getters:{
        get_delegate_count: (state) => state.delegate_count,
        get_exhibitors_count: (state) => state.exhibitors_count,
        get_media_count: (state) => state.media_count
    },
    actions:{
        async fetch_registion_count(){
            const show = useDisplayStore()

            const {count,error} = await supabase.from('registration_table')
            .select("*",{ count: 'exact', head: true })

            const exhibitors_count = await supabase.from('exhibitor_table')
            .select("*",{ count: 'exact', head: true })

            const media_count = await supabase.from('media_table')
            .select("*",{ count: 'exact', head: true })

            if( count != null || exhibitors_count.count != null || media_count.count != null){ 
                this.delegate_count = count
                this.exhibitors_count = exhibitors_count.count
                this.media_count = media_count.count
            }

            if(error){ show.change_status(`${error.message}`) }
            if(exhibitors_count.error){ show.change_status(`${exhibitors_count.error.message}`) }
            if(media_count.error){ show.change_status(`${media_count.error.message}`) }
        }
    }
})