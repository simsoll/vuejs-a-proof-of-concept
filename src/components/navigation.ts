import Vue = require('vue');
import Component from 'vue-class-component';

@Component({
  template: `
    <div>        
        <router-link to="/bICCgfCphK" activeClass="active">FrontPage</router-link>
        <router-link to="/cfuSbunnZu" activeClass="active">Underside1</router-link>
        <router-link to="/bKsbpeIwzm" activeClass="active">Underside2</router-link>
        <router-link to="/products" activeClass="active">Products</router-link>
        <router-link to="/form" activeClass="active">Form</router-link>
        <p>Total cart size: {{totalCartSize}}</p>
        <button v-on:click="emptyCart">Empty cart?</button>        
    </div>
  `
})
export default class Navigation extends Vue {
  get totalCartSize() {
      return this.$store.getters.totalCartSize;
  }  

  emptyCart() {
      this.$store.dispatch('emptyCart');
  }  
}