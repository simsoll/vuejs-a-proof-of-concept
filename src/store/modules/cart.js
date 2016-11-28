const state = {
    cost: 0,
    products: []
};

const mutations = {
    addProduct(state, {productId, quantity, productPrice}) {
        const record = state.products.find(product => product.id === productId);
        if (record) {
            record.quantity += quantity;
        } 
        else {
            state.products.push({
                id: productId,
                quantity: quantity
            });
        }
        state.cost += quantity * productPrice;
    },
    removeProduct(state, {productId, quantity, productPrice}) {
        const record = state.products.find(product => product.id === productId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        }
        else {
            state.products.splice(state.products.indexOf(record));
        }
        state.cost -= quantity * productPrice;
    }
}

const actions = {
    removeProduct(context, order) {
        context.commit('removeProduct', order);
    }
};

const getters = {
    cart (state, getters) {
        return state.products.map(product => {
            const record = getters.products.find(element => element.id === product.id);
            return {
                id: product.id,
                quantity: product.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    cost (state) {
        return state.cost;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};