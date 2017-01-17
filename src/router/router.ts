import Vue = require('vue');
import Router = require('vue-router');

import FormPage from '../components/pages/form-page';
import ProductList from '../components/pages/product-list';
import DynamicPage from '../components/pages/dynamic-page';
import { RouteConfig } from 'vue-router';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/products'
        },        
        { 
            path: '/products', 
            component: ProductList
        },
        { 
            path: '/form', 
            component: FormPage
        },        
        {
            path: '/*',
            component: DynamicPage
        }]
});
