import Vue = require('vue')
import Component from 'vue-class-component'


@Component({
    template: `
        <div>
            
        </div>
    `
})
export default class FormPage extends Vue {
    
    get formData() {
        return this.$store.getters.formData;
    }
}