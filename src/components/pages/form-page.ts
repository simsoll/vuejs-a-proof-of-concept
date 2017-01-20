import Vue = require('vue')
import Component from 'vue-class-component'
import { IFormData } from '../../models/form-data'


@Component({
    template: `
        <div>
            <input :value="formData.name" @input="updateName">
            <input :value="formData.email" @input="updateEmail">
            <input :value="formData.zip" @input="updateZip">
            <input :value="formData.address" @input="updateAddress">
            <div> 
                form data from store: {{formData}}
            </div> 
        </div>
    `
})
export default class FormPage extends Vue {
    
    updateName = (event: any): void => this.$store.commit('setName', event.target.value);
    updateEmail = (event: any): void => this.$store.commit('setEmail', event.target.value);
    updateZip = (event: any): void => this.$store.commit('setZip', event.target.value);
    updateAddress = (event: any): void => this.$store.commit('setAddress', event.target.value);



    get formData() {
        return this.$store.state.forms.formData; //return this.$store.state.formData;
    }
}