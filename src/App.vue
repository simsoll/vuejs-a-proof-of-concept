<template>
  <div id="app">
    <main>
        <navigation></navigation>
        <hr>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </main>
  </div>
</template>

<script>
import Navigation from './components/navigation'

export default {
  components: {
    navigation: Navigation
  }
}

</script>

<style>
</style>