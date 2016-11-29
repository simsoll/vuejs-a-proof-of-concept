<template>
    <div class="product">
        <h3>{{product.name}}</h3>
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
            </button>
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
        ...mapActions({
            removeOrderFromCart: 'removeProduct'
        }),
        removeProduct() {
            const order = {
                productId: this.product.id,
                productPrice: this.product.price,
                quantity: this.quantity
            };

            this.removeOrderFromCart(order);
        },
        insufficientQuantity() {
            return this.quantity > this.product.quantity;
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

.alert {
    border: 1px solid red;
}
</style>