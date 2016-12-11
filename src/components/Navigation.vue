<template>
    <div>        
        <router-link to="/bICCgfCphK" activeClass="active">FrontPage</router-link>
        <router-link to="/cfuSbunnZu" activeClass="active">Underside1</router-link>
        <router-link to="/bKsbpeIwzm" activeClass="active">Underside2</router-link>
        <router-link to="/products" activeClass="active">Products</router-link>
        <p>Total cart size: {{totalCartSize}}</p>
        <button v-on:click="emptyCart">Empty cart?</button>
    </div>
</template>

<script>
export default {
    computed: {
        totalCartSize() {
            return this.$store.getters.totalCartSize;
        }
    },
    methods: {
        emptyCart: function() {
            this.$store.dispatch('emptyCart');
        }
    }
    
}

</script>

<style scoped>
.active {
    color: red;
} 
</style>
