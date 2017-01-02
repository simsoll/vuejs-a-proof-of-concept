import Vue = require('vue')
import Component from 'vue-class-component'

@Component({
    props: ['amount'],
    template: `
        <div>
            <button v-on:click="decrement">-</button>
            <button v-on:click="increment">+</button>
            <button v-on:click="add">Add</button>
            {{amount || 0}}
        </div>
    `
})
export default class AddToBasket extends Vue {
    decrement() {
        this.$emit('decrement');
    }

    increment() {
        this.$emit('increment');
    }
    
    add() {
        this.$emit('add');
    }    
}