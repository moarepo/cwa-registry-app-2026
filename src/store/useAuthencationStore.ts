import {defineStore} from "pinia"
import {supabase} from "../supabase_config/supabaseConfig"
import {useDisplayStore} from "../store/useDisplayStore"

export const useAuthencationStore = defineStore("useAuthencationStore.ts",{
    state:()=>({
        user:{}
    }),

    getters:{
        get_user_info: (state) => state.user
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

            if(data){ this.user = data }
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

            if(data){ this.user = data }
        }
    }
})