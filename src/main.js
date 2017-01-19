import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app';
import router from './router/router';
import store from './store/store';
import { sync } from 'vuex-router-sync'


Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
});

export { app, router, store }