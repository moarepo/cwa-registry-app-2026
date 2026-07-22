import {defineStore} from "pinia"

export const useDisplayStore = defineStore("useDisplayStore",{
    state:()=>({
        alertStoreStatus: false as boolean,
        successModal: false as boolean,
        success_message: "" as string,
        alert_message: "" as string,
        nav: false as boolean
    }),

    getters:{
        get_status: (state) => state.alertStoreStatus,
        get_successModal: (state) => state.successModal,
        get_success_message: (state) => state.success_message,
        get_message: (state) => state.alert_message,
        show_side_nav: (state) => state.nav
    },

    actions:{
        change_status(message:string){
            this.alertStoreStatus =  !this.alertStoreStatus
            this.alert_message = message
        },
        change_success_status(message:string){
            this.successModal = !this.successModal
            this.success_message = message
        },
        change_layout_display(){ this.nav = !this.nav; console.log("called..") }
    }
})