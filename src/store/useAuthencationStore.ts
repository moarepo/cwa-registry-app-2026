import {defineStore} from "pinia"
import {supabase} from "../supabase_config/supabaseConfig"
import {useDisplayStore} from "../store/useDisplayStore"
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
                switch (error.message) {
                case 'Invalid login credentials':
                    display.change_status("Check your email and password.")
                    break;
                case 'Email not confirmed':
                    display.change_status('Please verify your email address before signing in.');
                    break;
                default:
                    console.error('An unexpected error occurred:', error.message);
                }
               
                display.change_status(error.message)
            }

            if(data){
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
                switch (error.message) {

                }
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