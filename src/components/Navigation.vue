<template>
    <div>        
        <router-link to="/" activeClass="active" exact>LOGO!</router-link>
        <router-link to="/products" activeClass="active">Products</router-link>
        <router-link to="/cart" activeClass="active">Cart</router-link>
        <router-link to="/checkout" activeClass="active">Checkout</router-link>
        <p>Total quantity: {{quantity}}</p>
        <p>Total cost: {{cost | currency}}</p>        
    </div>
</template>

<script>
export default {
    computed: {
        cost() {
            return this.$store.getters.cost;
        },
        quantity() {
            return this.$store.getters.quantity;
        }
    }
}

</script>

<style scoped>
.active {
    color: red;
} 
</style>
