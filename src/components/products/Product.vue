<!--<template>
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
</template>-->
<template>
    <div class="product">
        <h5>{{product.name}}</h5>
        <!--<favorite>fav</favorite>
        <div>Pris: ###unitPrice</div>
        <img src="###image###" alt="" />
        <add-to-basket></add-to-basket>        -->
        <!--<h3>{{product.name}}</h3>
        <p>Price: {{product.price}} $</p>
        <p>Quantity: {{product.quantity}}</p>
        <input 
            type="number" 
            placeholder="Quantity"
            v-model="quantity"
            :class="{ alert: insufficientQuantity() }">
        <button
            @click="removeProduct"
            :disabled="insufficientQuantity() || quantity < 1 || !Number.isInteger(quantity)"
            >{{ insufficientQuantity() ? 'More than available' : 'Remove'}}
            </button>-->
    </div>
</template>

<script>
export default {
    props: ['product']
    // data() {
    //     return {
    //         quantity: 0
    //     }
    // },
    // methods: {
    //     addProduct() {
    //         const order = {
    //             productId: this.product.id,
    //             productPrice: this.product.price,
    //             quantity: this.quantity
    //         };
    //         this.$store.dispatch('addProduct', order); //dispatch action in products.js
    //         this.quantity = 0;
    //     }
    // }
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