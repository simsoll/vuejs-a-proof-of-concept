<template>
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
</template>
<script>
import Product from '../products/Product.vue';
import { mapGetters } from 'vuex';
import productService from '../../services/productService'

export default {
    components: {
        product: Product
    },
    data() {
        return {
            sortBy: 'name',
            filterBy: 'favorites',
            asc: true
        }
    },
    methods: {
        filter(products, value) {
            return products.filter((product) => {
                if (value === "favorites") {
                    return product.isfavorite
                }
                if (value === "nonfavorites") {
                    return !product.isfavorite;
                }
                
                return true;                           
            });
        },
        sort(products, value) {
            return products.sort((a,b) => {
                const multiplier = this.asc ? 1 : -1;

                if (typeof a[value] === 'number') {
                    return multiplier * (a[value] - b[value]);
                }
                if (typeof a[value] === 'string') {
                    return multiplier * a[value].localeCompare(b[value]);
                }

                return multiplier*-1;
            });
        }
    },
    //using the collection pipeline pattern --> changing this.sortBy will NOT run filteredProducts!
    computed: {
        filteredProducts() {
            console.log("Data was filtered!")
            return this.filter(this.products, this.filterBy);
        },
        sortedProducts() {
            console.log("Data was sorted!")
            return this.sort(this.filteredProducts, this.sortBy)
        },
        ...mapGetters({
        products: 'products'
        })
    },    
    created () {
	    this.$store.dispatch('getProducts')
	}    
}
</script>
<style scoped>

</style>