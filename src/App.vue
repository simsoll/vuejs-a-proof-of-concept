<template>
    <div>
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
    components: {
        navigation: Navigation
    },
    created() {
        this.$store.dispatch('initProducts');
    }
}
</script>

<style>

</style>
