<template>
    <div> 
        <product 
            v-for="product in products" 
            :product="product">
        </product>       
    </div>
</template>

<script>
import Product from './Product.vue';

export default {
    components: {
        product: Product
    },
    computed: {
        products() {
            return this.$store.getters.products;
        }
    }
}
</script>

<style>

</style>