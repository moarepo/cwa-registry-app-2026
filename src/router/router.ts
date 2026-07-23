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
        path:'/email_forget_password',
        name:"Forgot",
        component: function(){
            return import("../pages/Forget.vue")
        },
        meta:{ auth:false }
    },
    {
        path:'/reset',
        name:'Password_Reset',
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

// router.beforeEach((to:RouteLocationNormalized, _from:RouteLocationNormalized) => {
//     const auth = useAuthencationStore()
//     const show = useDisplayStore()

//     let is_authenicated = computed<boolean>(()=>{ return auth.get_user_info.is_authenicated})

//     show.nav = !["Login", "Confirmation", "Registry", "Forgot","Password_Reset"].includes(to.name as string);

//     if(!is_authenicated.value && to.name !== "Login" && to.meta?.auth === true){
//         return { name:'Login'}
//     }
// })

router.beforeEach(async (to: RouteLocationNormalized, _from: RouteLocationNormalized) => {
  const auth = useAuthencationStore()
  const show = useDisplayStore()

  // 1. Check if the URL contains Supabase password recovery tokens/codes
  const isRecoveryCode = to.query.code !== undefined
  const isRecoveryHash = to.hash.includes('type=recovery')

  console.log(isRecoveryCode,to.hash)

  // 2. If it's a recovery link and not already on the reset route, redirect to Password_Reset
  if ((isRecoveryCode || isRecoveryHash) && to.name !== 'Password_Reset') {
    return { name: 'Password_Reset' }
  }

  // Define public routes (including Password_Reset) where non-authenticated users are allowed
  const publicRoutes = ["Login", "Confirmation", "Registry", "Forgot", "Password_Reset"]

  // Adjust navbar display logic
  show.nav = !publicRoutes.includes(to.name as string)

  // 3. Simple auth check (avoid wrapping store getters in computed inside guards)
  const isAuthenticated = auth.get_user_info.is_authenicated

  if (!isAuthenticated && !publicRoutes.includes(to.name as string) && to.meta?.auth === true) {
    return { name: 'Login' }
  }
})

export default router