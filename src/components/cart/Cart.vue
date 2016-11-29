<template>
    <div>
        <h2>Total costs: {{cost | currency}}</h2>
        <product v-for="product in cart" :product="product"></product>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Product from './Product.vue';

export default {
    computed: {
        ...mapGetters([
            'cart',
            'cost'
        ])
    },
    components: {
        product: Product
    }
}
</script>

<style>

</style>