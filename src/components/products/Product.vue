<template>
    <div class="product">
        <h3>{{product.name}}</h3>
        <p>Price: {{product.price | currency}}</p>
        <input 
            type="number" 
            placeholder="Quantity"
            v-model="quantity">
        <button
            @click="addProduct"
            :disabled="quantity < 1 || !Number.isInteger(quantity)">Buy</button>
    </div>
</template>

<script>
export default {
    props: ['product'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        addProduct() {
            const order = {
                productId: this.product.id,
                productPrice: this.product.price,
                quantity: this.quantity
            };
            this.$store.dispatch('addProduct', order); //dispatch action in products.js
            this.quantity = 0;
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
    display: inline-block;    
}
</style>