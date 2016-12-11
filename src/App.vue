<template>
    <main>
        <navigation></navigation>
        <hr>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </main>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
    components: {
        navigation: Navigation
    }
}
</script>

<style>
body {
    margin: 0;
}
main {
    padding: 20px;
}

.slide-enter-active {
    animation: slide-in 400ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;    
}

@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-30px);
        opacity: 0;
    }
}
</style>
