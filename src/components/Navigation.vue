<template>
    <div>        
        <router-link to="/" activeClass="active" exact>LOGO!</router-link>
        <router-link to="/products" activeClass="active">Products</router-link>
        <router-link to="/cart" activeClass="active">Cart</router-link>
        <router-link to="/checkout" activeClass="active">Checkout</router-link>        
    </div>
</template>

<script>

</script>

<style scoped>
.active {
    color: red;
} 
</style>
