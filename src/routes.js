import Home from './components/Home.vue';
import Products from './components/products/Products.vue';
import Cart from './components/cart/Cart.vue';
import Checkout from './components/checkout/Checkout.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/products', component: Products},
    { path: '/cart', component: Cart},
    { path: '/checkout', component: Checkout},
    { path: '*', redirect: '/' }
];