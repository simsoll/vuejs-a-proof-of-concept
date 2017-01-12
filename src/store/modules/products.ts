import { getProducts } from '../../services/product';
import { IState } from '../../models/state';
import { IProduct } from '../../models/product';
import { ActionContext } from 'vuex';
import { Promise } from 'es6-promise';

const state = {
    products: []
};

const mutations = {
    setProducts: (state: IState, products: IProduct[]): void => {
        state.products = products
    },
    toogleFavorite: (state: IState, product: IProduct): void => {
        if (!state.products) {
            return;
        }

        const record = state.products.find(p => p.id === product.id);
        if (record) {
            record.isfavorite = !record.isfavorite;
        }
    }
};

const actions = {
    fetchProducts: (context: ActionContext<IState, IState>): Promise<void> => {
        return getProducts().then(products => {
            context.commit('setProducts', products);
        });
    },
    toogleFavorite(context: ActionContext<IState, IState>, product: IProduct) {
        context.commit('toogleFavorite', product);
    }
};

const getters = {
    products: (state: IState) => state.products
};

export default {
    state,
    mutations,
    actions,
    getters
}