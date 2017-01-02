import Vue = require('vue')
import Component from 'vue-class-component'
import AddToBasket from './add-to-basket';
import Favorite from './favorite';
import { IProduct } from '../models/product'

@Component({
    components: {
        addToBasket: AddToBasket,
        favorite: Favorite
    },    
    props: ['product'],
    template: `
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
    `
})
export default class Product extends Vue {
    amount: number = 0;
    product: IProduct;

    toggleFavorite() {
        this.$store.dispatch('toogleFavorite', this.product);
    }
    decrementAmount() {
        if (this.amount > 0) {
            this.amount--;
        }
    }
    incrementAmount() {
        this.amount++;
    }
    addToBasket() {
        this.$store.dispatch('addToBasket', {
            product: this.product, 
            amount: this.amount 
        });
        this.amount = 0;
    }
}