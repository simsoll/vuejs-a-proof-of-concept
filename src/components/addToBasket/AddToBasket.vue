<template>
    <div>
        <button v-on:click="decrement">-</button>
        <button v-on:click="increment">+</button>
        <button v-on:click="add">Add</button>
        {{amount || 0}}
    </div>
</template>

<script>
export default {
    props: ['amount'],
    methods: {
        decrement() {
            this.$emit('decrement');
        },
        increment() {
            this.$emit('increment');
        },
        add() {
            this.$emit('add');
        }
    }
}
</script>

<style scoped>
.favorite {
    background-color: green;
    color: white;
}
.favorite.isFavorite {
    background-color: red;
}
</style>
