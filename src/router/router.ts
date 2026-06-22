import { createMemoryHistory, createRouter, type RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'degateFrom',
        component:function(){
            return import("../pages/login.vue")
        }
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router