import Vue = require('vue');
import VueRouter = require('vue-router');
// import VueResource from 'vue-resource';

import App from './app';
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
// Vue.use(VueResource);

Vue.filter('currency', (value: string) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
