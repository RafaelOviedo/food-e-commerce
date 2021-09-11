import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import LogInPage from '../views/LogInPage';
import LandingPage from '../views/LandingPage';
import RegisterPage from '../views/RegisterPage';

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/login',
        name: 'LogInPage',
        component: LogInPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;