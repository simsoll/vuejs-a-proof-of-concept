import { IState } from '../../models/state';
import { IProduct } from '../../models/product';
import { IFormData } from '../../models/form-data';
import { ActionContext } from 'vuex';
import { Promise } from 'es6-promise';

const initialForm: IFormData = {
};

const state: IState = {
    formData: initialForm
};

const mutations = {
    setName: (state: IState, name: string): void => {
        if (!state.formData) {
            return;
        }
        state.formData = Object.assign({}, state.formData, { name });
    },

    setEmail: (state: IState, email: string): void => {
        if (!state.formData) {
            return;
        }
        state.formData = Object.assign({}, state.formData, { email });
    },

    setZip: (state: IState, zip: number): void => {
        if (!state.formData) {
            return;
        }
        state.formData = Object.assign({}, state.formData, { zip });
    },

    setAddress: (state: IState, address: string): void => {
        if (!state.formData) {
            return;
        }
        state.formData = Object.assign({}, state.formData, { address });
    }           
};

const actions = {
    setName(context: ActionContext<IState, IState>, name: string) {
        context.commit('setName', name);
    }    
}

export default {
    state,
    actions,
    mutations
}