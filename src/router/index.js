import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import LogInPage from '../views/LogInPage';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/login',
        name: 'LogInPage',
        component: LogInPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;