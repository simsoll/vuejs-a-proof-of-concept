import Home from './components/Home.vue';
import RouteResolver from './components/RouteResolver.vue';
import ProductList from './components/pages/ProductList.vue';
import Cart from './components/cart/Cart.vue';
import Checkout from './components/checkout/Checkout.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/products', component: ProductList},
    { path: '/cart', component: Cart},
    { path: '/checkout', component: Checkout},
    { 
        path: '/*', 
        component: RouteResolver
    }
];