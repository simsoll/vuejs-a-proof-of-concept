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
        <product v-for="product in visibleProducts" :product="product"></product>
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
    computed: {
        visibleProducts: function() {
            return this.products
                       .filter(function(product) {
                           if (this.filterBy === "favorites") {
                               return product.isfavorite
                           }
                           if (this.filterBy === "nonfavorites") {
                               return !product.isfavorite;
                           }
                           
                           return true;                           
                       }.bind(this)) //we need to bind this to the sorting function to be able to access this.filterBy in the function definition
                       .sort(function(a,b) {
                            const multiplier = this.asc ? 1 : -1;

                            if (typeof a[this.sortBy] === 'number') {
                                return multiplier * (a[this.sortBy] - b[this.sortBy]);
                            }
                            if (typeof a[this.sortBy] === 'string') {
                                return multiplier * a[this.sortBy].localeCompare(b[this.sortBy]);
                            }

                            return multiplier*-1;
                        }.bind(this)); //we need to bind this to the sorting function to be able to access this.sortBy in the function definition
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