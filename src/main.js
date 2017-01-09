import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app';
import { routes } from './routes';
import store from './store/store';
import { sync } from 'vuex-router-sync'


Vue.use(VueRouter);

Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname,  
});

sync(store, router)

const app = new Vue({
  el: '#app',
  router,
  store,
  ...App
});

export { app, router, store }