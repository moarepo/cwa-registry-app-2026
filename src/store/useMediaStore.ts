import {defineStore} from "pinia"
import type {Database} from '../utils/database.types'
import {supabase} from "../supabase_config/supabaseConfig"
import {useAlertModalComposable} from "../composables/useComposables"
import router from "../router/router"

export const useMediaStore = defineStore('useMediaStore',{
    state:()=>({
        MediaList: [] as Database['public']['Tables']['media_table']['Row'][],
        media: {} as Database['public']['Tables']['media_table']['Row'],
        page: 1 as number,
        total: 0 as number,
        number_of_pages: 0 as number
    }),
    getters:{
        get_media_list: (state) => state.MediaList,
        get_media: (state) => state.media,
        get_current_page: (state) => state.page
    },
    actions:{
        async Fetch_media_list(){
            const page_size:number = 20;
            const start:number = (this.page - 1) * page_size;
            const end = start + page_size -1

            const { error, count, data } = await supabase
            .from('media_table')
            .select('*',{ count:'exact'})
            .order('created_at',{ ascending: false })
            .range(start,end)

            if(!error && data !== null){
              this.MediaList = data
              this.total = Number(count)
              this.number_of_pages = Math.ceil(this.total / page_size)
           }else{
               const error_message = error?.message ?? 'Failed to fetch delegates';
               useAlertModalComposable(error_message); 
           }
        },

        async Fetch_media_by(ID:string){
            const { error, data } = await supabase.from('media_table').select("*").eq('unique_id',ID)

            if(data){
                console.log("working.......")
                this.media = data[0]
                router.push("/view_media")
            }

            if(error){
                useAlertModalComposable(error.message)
            }
        }
    }
})