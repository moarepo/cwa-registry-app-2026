import {defineStore} from "pinia"
import {supabase} from "../supabase_config/supabaseConfig"
import {useAlertModalComposable} from "../Composables/useComposables"
import type {Database} from '../utils/database.types'

export const useStore = defineStore('useStore',{
    state:()=>({
        d_limit:4 as number,
        d_offset: 0 as number,
        d_page: 1,

        e_limit:4 as number,
        e_offset: 0 as number,
        e_page: 1,

        booth_option_one: 0 as number | null,
        booth_option_two: 0 as number | null,
        booth_option_three: 0 as number | null,

        delegate_count: 0 as number | null,
        delegate_male_count: 0 as number | null,
        delegate_female_count: 0 as number | null,

        exhibitors_count: 0 as number | null,
        exhibitors_local_count: 0 as number | null,
        exhibitors_international_count: 0 as number | null,

        media_count: 0 as number | null,
        Total_country_count: 0 as number | null,

        Delegates: [] as Database['public']['Tables']['registration_table']['Row'][],
        Exhibitor: [] as Database['public']['Tables']['exhibitor_table']['Row'][],
        Media: [] as Database['public']['Tables']['media_table']['Row'][]
    }),
    getters:{
        get_delegate_count: (state) => state.delegate_count,
        get_exhibitors_count: (state) => state.exhibitors_count,
        get_media_count: (state) => state.media_count,

        get_exhibitors_local_count: (state) => state.exhibitors_local_count,
        get_exhibitors_international_count: (state) => state.exhibitors_international_count,
        get_booth_option_one: (state) => state.booth_option_one,
        get_booth_option_two: (state) => state.booth_option_two,
        get_booth_option_three: (state) => state.booth_option_three,

        get_Delegates: (state) => state.Delegates,
        get_delegate_male_count: (state) => state.delegate_male_count,
        get_delegate_female_count: (state) => state.delegate_female_count,

        get_Exhibitor: (state) => state.Exhibitor,
        get_Media_info: (state) => state.Media,
    },
    actions:{
        async fetch_registion_count(){

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

            if(error){ useAlertModalComposable(`${error.message}`) }
            if(exhibitors_count.error){ useAlertModalComposable(`${exhibitors_count.error.message}`) }
            if(media_count.error){ useAlertModalComposable(`${media_count.error.message}`) }
        },

        async fetch_data_base_on_conutry(country:string){

            const {count, error} = await supabase
            .from('registration_table')
            .select('*',{ count: 'exact', head: true })
            .ilike('country_of_residence',country)

            if(error){
                useAlertModalComposable(`${error.message}`)
            }else{
                this.Total_country_count = count
            }
        },

        async fetch_from_data(option:string){
            switch(option){
                case "delegates":
                    const {data,error} = await supabase
                    .from('registration_table')
                    .select()
                    .range(this.d_offset,this.d_limit)

                    const delegate_gender_male_count = await supabase
                    .from('registration_table')
                    .select('*',{ count: 'exact', head: true })
                    .ilike('gender','male')

                    const delegate_gender_female_count = await supabase
                    .from('registration_table')
                    .select('*',{ count: 'exact', head: true })
                    .ilike('gender','female')

                    if(error != null || delegate_gender_male_count.error != null || delegate_gender_female_count.error != null){
                        let error_message:string = ""

                        if(error != null){
                            error_message = error.message
                        }else{
                            if(delegate_gender_male_count.error != null){
                                error_message = delegate_gender_male_count.error.message
                            }else{
                                error_message = ''+delegate_gender_female_count.error?.message
                            }
                        }

                        useAlertModalComposable(error_message)
                    }else{
                        this.Delegates = data
                        this.delegate_male_count = delegate_gender_male_count.count
                        this.delegate_female_count = delegate_gender_female_count.count
                    }
                    break;
                case "exhibitor":
                    const request = await supabase
                    .from('exhibitor_table')
                    .select().range(this.e_offset,this.e_limit)

                    const international_count = await supabase
                    .from('exhibitor_table')
                    .select('*',{ count: 'exact', head: true })
                    .ilike('exhibitor_type','local')

                    const local_count = await supabase
                    .from('exhibitor_table')
                    .select('*',{ count: 'exact', head: true })
                    .ilike('exhibitor_type','international')

                    const booth1_count = await supabase
                    .from('exhibitor_table')
                    .select('*',{ count: 'exact', head: true })
                    .eq('booth_option',1)

                    const booth2_count = await supabase
                    .from('exhibitor_table')
                    .select('*',{ count: 'exact', head: true })
                    .eq('booth_option',2)

                    const booth3_count = await supabase
                    .from('exhibitor_table')
                    .select('*',{ count: 'exact', head: true })
                    .eq('booth_option',3)

                    if(
                        request.error != null || international_count.error != null || local_count.error != null ||
                        booth1_count.error != null || booth2_count.error != null || booth3_count.error != null
                    ){
                        useAlertModalComposable("Error!!")
                    }else{
                        this.Exhibitor = request.data
                        this.exhibitors_international_count = international_count.count
                        this.exhibitors_local_count = local_count.count
                        this.booth_option_one = booth1_count.count
                        this.booth_option_two = booth2_count.count
                        this.booth_option_three = booth3_count.count
                    }
                    break; 
                case "media":
                    const mediarequest = await supabase
                    .from('media_table')
                    .select()

                    if(mediarequest.error){
                        useAlertModalComposable(`${mediarequest.error.message}`)
                    }else{
                       this.Media = mediarequest.data
                    }
                    break;   
            }
        },

        async fetch_exhibitor_gender_count(){

        },

        async next_from_data(option:string){
            switch(option){
                case "delegates":
                    this.d_offset += 9
                    this.d_limit += 9

                    const {data,error} = await supabase
                    .from('registration_table')
                    .select()
                    .range(this.d_offset,this.d_limit)

                    if(error){
                        useAlertModalComposable(error.message)
                    }else{
                        this.Delegates = data
                        this.d_page += 1
                    }
                                       
                    break;
                case "exhibitor":
                    const request = await supabase
                    .from('exhibitor_table')
                    .select()

                    if(request.error){
                        useAlertModalComposable(`${request.error.message}`)
                    }else{
                        this.Exhibitor = request.data
                    }
                    break; 
                case "media":
                    const mediarequest = await supabase
                    .from('media_table')
                    .select()

                    if(mediarequest.error){
                        useAlertModalComposable(`${mediarequest.error.message}`)
                    }else{
                       this.Media = mediarequest.data
                    }
                    break;   
            }
        },

        async pervoius_from_data(option:string){
            switch(option){
                case "delegates":
                    if(this.d_offset != 0){
                        this.d_offset -= 9
                        this.d_limit -= 9

                        const {data,error} = await supabase
                        .from('registration_table')
                        .select()
                        .range(this.d_offset,this.d_limit)

                        if(error){
                            useAlertModalComposable(error.message)
                        }else{
                            this.Delegates = data
                            this.d_page -= 1
                        }
                    }         
                    break;
                case "exhibitor":
                    // const request = await supabase
                    // .from('exhibitor_table')
                    // .select()

                    // if(request.error){
                    //     useAlertModalComposable(`${request.error.message}`)
                    // }else{
                    //     this.Exhibitor = request.data
                    // }
                    break; 
                case "media":
                    // const mediarequest = await supabase
                    // .from('media_table')
                    // .select()

                    // if(mediarequest.error){
                    //     useAlertModalComposable(`${mediarequest.error.message}`)
                    // }else{
                    //    this.Media = mediarequest.data
                    // }
                    break;   
            }
        }
    }
})