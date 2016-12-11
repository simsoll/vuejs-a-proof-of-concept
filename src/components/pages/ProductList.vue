<template>
    <div>
        <h1>Product List</h1>
        <product v-for="product in products" :product="product"></product>
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
    computed: mapGetters({
        products: 'products'
    }),    
    created () {
	    this.$store.dispatch('getProducts')
	}    
}
</script>
<style scoped>

</style>