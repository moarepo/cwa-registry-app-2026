import { createMemoryHistory, createRouter, type RouteRecordRaw} from 'vue-router'
import OptionsPage from '../pages/OptionsPage.vue'

const routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'degateFrom',
        component:function(){
            return import("../pages/login.vue")
        },
    },
    {
        path:'/dashborad',
        name:"Dashborad",
        component: function(){
            return import("../pages/Dashborad.vue")
        }
    },
    {
        path:'/delegates',
        name:'Delegate Registration',
        component: function(){
            return import("../pages/delegate_registration.vue")
        }
    },
    {
        path:'/registry',
        name:"Registry",
        component: function(){
            return import("../pages/Registry.vue")
        }
    },
    {
        path:'/exhibitor',
        name:"Exhibitor",
        component: function(){
            return import("../pages/exhibitor.vue")
        }
    },
    {
        path:'/media',
        name:"Media",
        component: function(){
            return import("../pages/MediaPage.vue")
        }
    },
    {
        path:'/options',
        name:'settings',
        component: OptionsPage
    },
    {
        path:'/forgot',
        name:"Forgot",
        component: function(){
            return import("../pages/Forget.vue")
        }
    },
    {
        path:'/reset',
        name:'Password Reset',
        component: function(){
            return import("../pages/ResetPassword.vue")
        }
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router