<template>
    <button 
        class="favorite"
        :class="{isFavorite: isFavorite }"
        v-on:click="toogle">
        {{isFavorite ? 'Remove as favorite' : 'Add as favorite'}}
    </button>
</template>

<script>
export default {
    props: ['isFavorite'],
    methods: {
        toogle: function() {
            this.$emit('toogle');
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
