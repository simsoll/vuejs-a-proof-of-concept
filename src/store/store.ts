import Vue = require('vue');
import Vuex = require('vuex');

import products from './modules/products';
import { IState } from '../models/state';
import cart from './modules/cart';
import pages from './modules/pages';
import forms from './modules/forms';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products,
        cart,
        pages,
        forms
    }
});