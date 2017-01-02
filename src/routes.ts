import ProductList from './components/pages/product-list';
import DynamicPage from './components/dynamic-page';
import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
    { 
        path: '/products', 
        component: ProductList
    },
    {
        path: '/*',
        component: DynamicPage
    }
];