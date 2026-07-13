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
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router