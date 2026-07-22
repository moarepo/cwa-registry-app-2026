import {computed} from 'vue'
import { createMemoryHistory, createRouter, type RouteRecordRaw, type RouteLocationNormalized} from 'vue-router'
import {useDisplayStore} from "../store/useDisplayStore"
import {useAuthencationStore} from "../store/useAuthencationStore"
import OptionsPage from '../pages/OptionsPage.vue'

const routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'Login',
        component:function(){
            return import("../pages/login.vue")
        },
        meta:{ auth:false }
    },
    {
        path:'/dashborad',
        name:"Dashborad",
        component: function(){
            return import("../pages/Dashborad.vue")
        },
        meta:{ auth:true }
    },
    {
        path:'/delegates',
        name:'Delegate Registration',
        component: function(){
            return import("../pages/delegate_registration.vue")
        },
        meta:{ auth:true }
    },
    {
        path:'/registry',
        name:"Registry",
        component: function(){
            return import("../pages/Registry.vue")
        },
        meta:{ auth:false }
    },
    {
        path:'/exhibitor',
        name:"Exhibitor",
        component: function(){
            return import("../pages/exhibitor.vue")
        },
        meta:{ auth:true }
    },
    {
        path:'/media',
        name:"Media",
        component: function(){
            return import("../pages/MediaPage.vue")
        },
        meta:{ auth:true }
    },
    {
        path:'/options',
        name:'settings',
        component: OptionsPage,
        meta:{ auth:true }
    },
    {
        path:'/forgot',
        name:"Forgot",
        component: function(){
            return import("../pages/Forget.vue")
        },
        meta:{ auth:true }
    },
    {
        path:'/reset',
        name:'Password Reset',
        component: function(){
            return import("../pages/ResetPassword.vue")
        },
        meta:{ auth:false }
    },
    {
        path:'/conformation',
        name:"Confirmation",
        component: function(){
            return import("../pages/signUpComformation.vue")
        },
        meta:{ auth:false }
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

router.beforeEach((to:RouteLocationNormalized, _from:RouteLocationNormalized) => {
    const auth = useAuthencationStore()
    const show = useDisplayStore()

    let is_authenicated = computed<boolean>(()=>{ return auth.get_user_info.is_authenicated})

    show.nav = !["Login", "Confirmation", "Registry", "Forgot"].includes(to.name as string);

    if(!is_authenicated.value && to.name !== "Login" && to.meta?.auth === true){
        return { name:'Login'}
    }
})

export default router