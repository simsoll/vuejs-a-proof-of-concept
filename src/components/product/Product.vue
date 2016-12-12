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
        toggleFavorite() {
            this.$store.dispatch('toogleFavorite', this.product);
        },
        decrementAmount() {
            if (this.amount > 0) {
                this.amount--;
            }
        },
        incrementAmount() {
            this.amount++;
        },
        addToBasket() {
            this.$store.dispatch('addToBasket', {
                product: this.product, 
                amount: this.amount 
            });
            this.amount = 0;
        }
    },
    data: () => ({
        amount: 0
    })
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