import productService from '../../services/productService'

const state = {
    products: [],
    cart: []
};

const mutations = {
    receiveProducts: (state, { products }) => {
        state.products = products
    },
    toogleFavorite: (state, { product }) => {
        const record = state.products.find(p => p.id === product.id);
        if (record) {
            record.isfavorite = !record.isfavorite;
        }
    }
};

const actions = {
    getProducts: (context) => {
        productService.getProducts().then(products => {
            context.commit('receiveProducts', { products });
        });
    },
    toogleFavorite(context, product) {
        context.commit('toogleFavorite', { product });
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