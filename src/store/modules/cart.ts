import { ICartItem } from '../../models/cart';
import { IState } from '../../models/state';
import { ActionContext } from 'vuex';

const state: IState = {
    cart: []
};

const mutations = {
    addToBasket: (state: IState, item: ICartItem): void => {
        if (!state.cart) {
            return;
        }

        const record = state.cart.find(cartItem => cartItem.product.id === item.product.id);
        if (record) {
            record.amount += item.amount;
        }
        else {
            state.cart.push(item);
        }
    },
    emptyCart: (state: IState) => {
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
    addToBasket(context: ActionContext<IState, IState>, item: ICartItem) {
        context.commit('addToBasket', item);
    },
    emptyCart(context: ActionContext<IState, IState>) {
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
    totalCartSize (state: IState) {
        if (!state.cart) {
            return 0;
        }

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