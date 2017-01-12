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