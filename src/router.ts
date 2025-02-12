import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';



const router = createRouter({
    history: createWebHashHistory(),
    routes : [
        {
            path:'/login',
            component: HomePage
        },
        {
            path:'',
            component: LoginPage
        },
        {
            path:'/register',
            component: RegisterPage
        }
    ]
})

export default router