import Vue = require('vue')
import Component from 'vue-class-component'

@Component({
    props: ['isFavorite'],
    template: `
        <button 
            class="favorite"
            :class="{isFavorite: isFavorite }"
            v-on:click="toogle">
            {{isFavorite ? 'Remove as favorite' : 'Add as favorite'}}
        </button>
    `
})
export default class Favorite extends Vue {
    toogle() {
        this.$emit('toogle');
    }    
}