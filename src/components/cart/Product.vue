<template>
    <div class="product">
        <h3>{{product.name}}</h3>
        <p>Price: {{product.price}} $</p>
        <p>Quantity: {{product.quantity}} $</p>
        <input 
            type="number" 
            placeholder="Quantity"
            v-model="quantity">
        <button
            @click="removeProduct"
            :disabled="quantity < 1 || !Number.isInteger(quantity)">Remove</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    props: ['product'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions([
            'removeProduct'
        ]),
        removeProduct() {
            const order = {
                productId: this.product.id,
                productPrice: this.product.price,
                quantity: this.quantity
            };

            this.removeProduct();
        }
    }
}
</script>

<style scoped>
.product {
    padding: 20px;
    border: 1px solid black;
    margin: 20px;
    width: 40%;
}
</style>