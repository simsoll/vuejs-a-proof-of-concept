import Vue = require('vue')
import Component from 'vue-class-component'
import Navigation from './components/navigation'

@Component({
  components: {
    navigation: Navigation
  },
  template: `
    <main>
        <navigation></navigation>
        <hr>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </main>
  `
})
export default class App extends Vue {
}