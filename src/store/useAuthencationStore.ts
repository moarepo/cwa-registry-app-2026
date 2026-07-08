import {defineStore} from "pinia"
import {supabase} from "../supabase_config/supabaseConfig"
import {useAlertModalComposable} from "../Composables/useComposables"
import {useDisplayStore} from "./useDisplayStore"
import type{user} from "../utils/Types"
import router from "../router/router"

export const useAuthencationStore = defineStore("useAuthencationStore.ts",{
    state:()=>({
       User: {} as user
    }),

    getters:{
        get_user_info: (state) => state.User
    },

    actions:{
        async signInWithEmail(email:string,password:string){

            const display = useDisplayStore()

            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })

            if(error){
                useAlertModalComposable(error.message)
            }else{
                this.User.email_address = data.session?.user.email as string
                this.User.is_authenicated = data.user?.aud === "authenticated" ? true : false
                this.User.session_token = data.session?.access_token as string
                display.change_layout_display()
                router.push("/dashborad")
            }

        },

        async registerUserWithEmail(emailAddress:string,password:string){

            const {data,error} = await supabase.auth.signUp({
                email: emailAddress,
                password: password
            })

            if(error){
                
            }

            if(data){ 
                this.User.email_address = data.session?.user.email as string
                this.User.is_authenicated = data.user?.aud === "authenticated" ? true : false
                this.User.session_token = data.session?.access_token as string
                router.push("/dashborad")
            }
        },

        async signOutUser(){
            const display = useDisplayStore()

            const {error} = await supabase.auth.signOut()

            if(error){ 
                display.change_status(error.message) 
            }else{
                this.User = {} as user
                display.change_layout_display()
                router.push("/")
            }
        }
    }
})