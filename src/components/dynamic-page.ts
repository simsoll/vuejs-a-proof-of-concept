import axios from 'axios';
import Vue = require('vue')
import Component from 'vue-class-component'

import Frontpage from './pages/frontpage';
import Subpage from './pages/subpage';
import SubpageSidebar from './pages/subpage-sidebar'

import { IPageData } from '../models/page-data';


@Component({
    components: {
        'frontpage': Frontpage,
        subpage: Subpage,
        subpagesidebar: SubpageSidebar
    },
    template: `
        <div>
            <p>Server rendered??</p>
            <component 
                :is="pageData.template" 
                :properties="pageData">
            </component>
        </div>
    `,
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    }
})
export default class DynamicPage extends Vue {
    pageData: IPageData = {
        data: {},
        template: '',
        title: ''
    };

    // this will be called during SSR to pre-fetch data into the store!
    preFetch(store: any, url: string) {
        return store.dispatch('fetchPageData', url);
    }

    beforeMount () {
        this.$store.dispatch('fetchPageData', this.$route.path).then(() => {
            this.pageData = this.$store.getters.pageData;
        });
    }

    // fetchData() {
    //     axios.get('http://www.json-generator.com/api/json/get' + this.$route.path)
    //                 .then(response => response.data)
    //                 .then(response => {
    //                     this.pageData = {
    //                         data: response.data,
    //                         title: response.title,
    //                         template: response.template.toLowerCase().replace(/-/g, "")
    //                     };
    //                 })
    //                 .catch(error => this.$router.push('/'));
    // }

    // created () {
    //     // fetch the data when the view is created and the data is
    //     // already being observed
    //     this.fetchData()
    // }
}