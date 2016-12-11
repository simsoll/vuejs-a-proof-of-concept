const state = {
    cart: []
};

const mutations = {
    addToBasket: (state, { product, amount}) => {
        const record = state.cart.find(element => element.product.id === product.id);
        if (record) {
            record.amount += amount;
        }
        else {
            state.cart.push({ product, amount});
        }
    },
    emptyCart: (state) => {
        state.cart = [];
    }
    // addProduct(state, {productId, quantity, productPrice}) {
    //     const record = state.products.find(product => product.id === productId);
    //     if (record) {
    //         record.quantity += quantity;
    //     } 
    //     else {
    //         state.products.push({
    //             id: productId,
    //             quantity: quantity
    //         });
    //     }
    //     state.cost += quantity * productPrice;
    // },
    // removeProduct(state, {productId, quantity, productPrice}) {
    //     const record = state.products.find(product => product.id === productId);
    //     if (record.quantity > quantity) {
    //         record.quantity -= quantity;
    //     }
    //     else {
    //         state.products.splice(state.products.indexOf(record));
    //     }
    //     state.cost -= quantity * productPrice;
    // }
}

const actions = {
    addToBasket(context, {product, amount}) {
        context.commit('addToBasket', { product, amount});
    },
    emptyCart(context) {
        context.commit('emptyCart');
    }
};

const getters = {
    // cart (state, getters) {
    //     return state.products.map(product => {
    //         const record = getters.products.find(element => element.id === product.id);
    //         return {
    //             id: product.id,
    //             quantity: product.quantity,
    //             name: record.name,
    //             price: record.price
    //         };
    //     });
    // },
    // cost (state) {
    //     return state.cost;
    // },
    totalCartSize (state) {
        return state.cart
            .map(item => item.amount)
            .reduce((currSum, amount) => {
                return currSum + amount;
            }, 0);
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};