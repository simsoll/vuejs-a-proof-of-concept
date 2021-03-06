import Vue = require('vue')
import Component from 'vue-class-component'
import Product from '../product';
import { IProduct } from '../../models/product'

@Component({
    components: {
        product: Product
    },
    template: `
        <div>
            <h1>Product List</h1>
            <div>
                    Sort by:
                    <input type="radio" id="name" value="name" v-model="sortBy">
                    <label for="name">name</label>
                    <input type="radio" id="price" value="price" v-model="sortBy">
                    <label for="price">price</label>  
                    //// Ascending?:
                    <input type="checkbox" id="checkbox" v-model="asc">
                    <label for="checkbox"></label>                 
            </div>
            <div>
                    Filter by:
                    <input type="radio" id="all" value="all" v-model="filterBy">
                    <label for="all">all</label>
                    <input type="radio" id="favorites" value="favorites" v-model="filterBy">
                    <label for="favorites">favorites</label>  
                    <input type="radio" id="nonfavorites" value="nonfavorites" v-model="filterBy">
                    <label for="nonfavorites">non-favorites</label> 
            </div>
            <product v-for="product in sortedProducts" :product="product"></product>
        </div>
    `,
    name: 'product-list'
})
export default class ProductList extends Vue {
    sortBy: string = 'name';
    filterBy: string = 'all';
    asc: boolean = true;

    data: IProduct[] = [];

    filter(products: IProduct[], value: string): IProduct[] {
        return products.filter((product: IProduct) => {
            switch (value) {
                case 'favorites':
                    return product.isfavorite;
                case 'nonfavorites':
                    return !product.isfavorite;
                default:
                    return true;
            }
        });
    }

    sort(products: IProduct[], value: string) {
        return products.sort((a,b) => {
            const multiplier = this.asc ? 1 : -1;

            switch(typeof a[value]) {
                case 'number':
                    return multiplier * (a[value] - b[value]);
                case 'string':
                    return multiplier * a[value].localeCompare(b[value]);
                default:
                    return multiplier*-1;
            }
        });
    }    

    //using the collection pipeline pattern --> changing this.sortBy will NOT run filteredProducts!
    get filteredProducts(): IProduct[] {
        console.log("Data was filtered!");
        return this.filter(this.data, this.filterBy);
    }
    get sortedProducts(): IProduct[] {
        console.log("Data was sorted!");
        return this.sort(this.filteredProducts, this.sortBy);
    }

    fetchData() {
        this.$store.dispatch('fetchProducts').then(() => {
            this.data = this.$store.state.products.products;
        });
    }

    // this will be called during SSR to pre-fetch data into the store!
    preFetch(store: any, context: any) {
        return store.dispatch('fetchProducts').then(() => {
            return store.state.products.products;
        });        
    }    

    beforeMount() {
        if (this.$store.state.products.products.length > 0) {
            this.data = this.$store.state.products.products;
        }
        else {
            this.fetchData();
        }
    } 
}