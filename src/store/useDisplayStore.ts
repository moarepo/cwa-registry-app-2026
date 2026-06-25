import {defineStore} from "pinia"

export const useDisplayStore = defineStore("useDisplayStore",{
    state:()=>({
        alertStoreStatus: false as boolean,
        alert_message: "" as string
    }),

    getters:{
        get_status: (state) => state.alertStoreStatus,
        get_message: (state) => state.alert_message
    },

    actions:{
        change_status(message:string){
            this.alertStoreStatus =  !this.alertStoreStatus
            this.alert_message = message
        }
    }
})