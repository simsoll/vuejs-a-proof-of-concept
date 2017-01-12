import { getPageData } from '../../services/pageData';
import { IState } from '../../models/state';
import { IProduct } from '../../models/product';
import { IPageData } from '../../models/page-data';
import { ActionContext } from 'vuex';
import { Promise } from 'es6-promise';

const initialPage: IPageData = {
    data: {},
    template: '',
    title: ''
};

const state: IState = {
    currentPage: initialPage
};

const mutations = {
    setPageData: (state: IState, data: IPageData): void => {
        state.currentPage = data
    }
};

const actions = {
    fetchPageData: (context: ActionContext<IState, IState>, url: string): Promise<void> => {
        return getPageData(url).then(data => {
            context.commit('setPageData', data);
        });
    },
};

const getters = {
    pageData: (state: IState) => state.currentPage
};

export default {
    state,
    mutations,
    actions,
    getters
}