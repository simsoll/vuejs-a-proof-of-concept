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
    <div 
        class="product"
        :class="{ unavailable: !product.availability }">
        <h5>{{product.name}}</h5>
        <favorite :isFavorite="product.isfavorite" v-on:toogle="toggleFavorite"></favorite>
        <div>Pris: {{product.price | currency }}</div>
        <!--<img :src="product.image" alt="">-->
        <add-to-basket 
            :amount="amount"
            v-on:decrement="decrementAmount"
            v-on:increment="incrementAmount"
            v-on:add="addToBasket">
        </add-to-basket>
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
import AddToBasket from '../addToBasket/AddToBasket.vue';
import Favorite from '../favorite/Favorite.vue';

export default {
    components: {
        addToBasket: AddToBasket,
        favorite: Favorite
    },
    props: ['product'],
    methods: {
        toggleFavorite: function() {
            this.$store.dispatch('toogleFavorite', this.product);
        },
        decrementAmount: function() {
            if (this.amount > 0) {
                this.amount--;
            }
        },
        incrementAmount: function() {
            this.amount++;
        },
        addToBasket: function() {
            this.$store.dispatch('addToBasket', {
                product: this.product, 
                amount: this.amount 
            });
            this.amount = 0;
        }
    },
    data() {
        return {
            amount: 0
        }
    }
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
.unavailable {
    opacity: 0.25;
}
</style>