import { createMemoryHistory, createRouter, type RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'degateFrom',
        component:function(){
            return import("../pages/login.vue")
        },
    },
    {
        path:'/registry',
        name:"Registry",
        component: function(){
            return import("../pages/Registry.vue")
        }
    },
    {
        path:'/dashborad',
        name:"Dashborad",
        component: function(){
            return import("../pages/Dashborad.vue")
        }
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router