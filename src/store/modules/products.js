import productService from '../../services/productService'

const state = {
    products: []
};

const mutations = {
    receiveProducts: (state, { products }) => {
        state.products = products
    }
};

const actions = {
    getProducts: (context) => {
        productService.getProducts().then(products => {
            context.commit('receiveProducts', { products });
        });
    }
};

const getters = {
    products: state => state.products
};

export default {
    state,
    mutations,
    actions,
    getters
}