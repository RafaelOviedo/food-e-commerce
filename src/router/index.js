import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import LogInPage from '../views/LogInPage';
import LandingPage from '../views/LandingPage';
import RegisterPage from '../views/RegisterPage';
import ProductsPage from '../views/ProductsPage';
import AboutPage from '../views/AboutPage';

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/home',
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
    },
    {
        path: '/products',
        name: 'ProductsPage',
        component: ProductsPage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;