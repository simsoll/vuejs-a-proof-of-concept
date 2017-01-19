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
        state.formData.name = name;
    },

    setEmail: (state: IState, email: string): void => {
        if (!state.formData) {
            return;
        }
        state.formData.email = email;
    },

    setZip: (state: IState, zip: number): void => {
        if (!state.formData) {
            return;
        }
        state.formData.zip = zip;
    },

    setAddress: (state: IState, address: string): void => {
        if (!state.formData) {
            return;
        }
        state.formData.address = address;
    }           
};

const getters = {
    formData: (state: IState) => state.formData
};

export default {
    state,
    mutations,
    getters
}