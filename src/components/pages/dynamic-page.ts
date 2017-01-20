import axios from 'axios';
import Vue = require('vue')
import Component from 'vue-class-component'

import Frontpage from './frontpage';
import Subpage from './subpage';
import SubpageSidebar from './subpage-sidebar'

import { IPageData } from '../../models/page-data';


@Component({
    components: {
        frontpage: Frontpage,
        subpage: Subpage,
        subpagesidebar: SubpageSidebar
    },
    template: `
        <div>
            <component 
                :is="data.template" 
                :properties="data">
            </component>
        </div>
    `,
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    }
    
})
export default class DynamicPage extends Vue {
    data: IPageData = {
        data: {},
        template: '',
        title: '',
        url: ''
    };

    fetchData() {
        this.$store.dispatch('fetchPageData', this.$route.path).then(() => {
            this.data = this.$store.state.pages.currentPage;
        });
    }

    // this will be called during SSR to pre-fetch data into the store!
    preFetch(store: any, context: any) {
        return store.dispatch('fetchPageData', context.url).then(() => {
            return store.state.pages.currentPage;
        });
    }

    beforeMount () {
        if (this.$store.state.pages.currentPage.url === this.$route.path) {
            console.log('data has already been loaded!');
            this.data = this.$store.state.pages.currentPage;            
        }
        else {
            this.fetchData();
        }
    }
}