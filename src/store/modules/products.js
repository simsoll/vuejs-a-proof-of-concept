import products from '../../data/products';

const state = {
    products: []
};

const mutations = {
    setProducts: (state, products) => {
        state.products = products;
    }
};

const actions = {
    addProduct: (context, order) => {
        context.commit('addProduct', order); //commit mutation in cart.js
    },
    initProducts: (context) => {
        context.commit('setProducts', products)
    }
};

const getters = {
    products: state => {
        return state.products;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}