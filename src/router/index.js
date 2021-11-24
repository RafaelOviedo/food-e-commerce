import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import LogInPage from '../views/LogInPage';
import LandingPage from '../views/LandingPage';
import RegisterPage from '../views/RegisterPage';
import ProductsPage from '../views/ProductsPage';
import AboutPage from '../views/AboutPage';
import Burgers from '../views/Burgers';
import Pizzas from '../views/Pizzas';
import Sushi from '../views/Sushi';
import Arabic from '../views/Arabic';
import BurgersDetails from '../views/BurgersDetails';
import PizzasDetails from '../views/PizzasDetails';
import SushiDetails from '../views/SushiDetails';
import ArabicDetails from '../views/ArabicDetails';

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
    },
    {
        path: '/burgers',
        name: 'Burgers',
        component: Burgers
    },
    {
        path: '/burgersDetails/:id',
        name: 'BurgersDetails',
        component: BurgersDetails
    },
    {
        path: '/pizzas',
        name: 'Pizzas',
        component: Pizzas
    },
    {
        path: '/pizzasDetails/:id',
        name: 'PizzasDetails',
        component: PizzasDetails
    },
    {
        path: '/sushi',
        name: 'Sushi',
        component: Sushi
    },
    {
        path: '/sushiDetails/:id',
        name: 'SushiDetails',
        component: SushiDetails
    },
    {
        path: '/arabic',
        name: 'Arabic',
        component: Arabic
    },
    {
        path: '/arabicDetails/:id',
        name: 'ArabicDetails',
        component: ArabicDetails
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;