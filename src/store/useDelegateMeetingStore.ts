import {defineStore} from "pinia"
import {supabase} from "../supabase_config/supabaseConfig"
import {useAlertModalComposable} from "../composables/useComposables"

export const useDelegateMeetingStore = defineStore('useDelegateMeetingStore',{
    state:()=>({
        ceremony_and_reception_count: 0 as number | null,
        technical_sessions_count: 0 as number | null,
        ministerial_meetings_count: 0 as number | null,
        exhibition_n_trade_show_count: 0 as number | null,
        field_trips_count: 0 as number | null
    }),
    getters:{
        get_ceremony_and_reception_count: (state) => state.ceremony_and_reception_count,
        get_technical_sessions_count: (state) => state.technical_sessions_count,
        get_ministerial_meetings_count: (state) => state.ministerial_meetings_count,
        get_exhibition_n_trade_show_count: (state) => state.exhibition_n_trade_show_count,
        get_field_trips: (state) => state.field_trips_count
    },
    actions:{
        async fetch_meetings_count(){

            const ceremony = await supabase.from('delegate_meetings')
                .select("*",{ count: 'exact', head: true })
                .ilike('meeting_name','Opening Ceremony and Reception')

            const ministerial = await supabase.from('delegate_meetings')
                .select("*",{ count: 'exact', head: true })
                .ilike('meeting_name','Ministerial Meetings')

            const t_session = await supabase.from('delegate_meetings')
                .select("*",{ count: 'exact', head: true })
                .ilike('meeting_name','Technical Sessionss')

            const exhibition = await supabase.from('delegate_meetings')
                .select("*",{ count: 'exact', head: true })
                .ilike('meeting_name','Exhibition and Trade Show')

            const trip = await supabase.from('delegate_meetings')
                .select("*",{ count: 'exact', head: true })
                .ilike('meeting_name','Field Trips')


            if(
                ceremony.error != null ||ministerial.error != null ||
                t_session.error != null || exhibition.error != null  ||
                trip.error != null
            ){
                useAlertModalComposable("Error in fetching meeting participation amout")
            }else{
                this.ceremony_and_reception_count = ceremony.count
                this.technical_sessions_count = t_session.count
                this.ministerial_meetings_count = ministerial.count
                this.exhibition_n_trade_show_count = exhibition.count
                this.field_trips_count = trip.count
            }

        }
    }
})