import Vue = require('vue')
import Component from 'vue-class-component'
import { IFormData } from '../../models/form-data'


@Component({
    template: `
        <div>
            <form>   
                <div>
                    <label for="name">Name</label>
                    <input v-validate name="formData.name" id="name" data-vv-rules="required|alpha_spaces" :value="formData.name" type="text" @input="updateName">
                    <span>{{ errors.first('formData.name') }} </span>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input v-validate name="formData.email" id="email" data-vv-rules="required|email" :value="formData.email" type="email" @input="updateEmail">
                    <span>{{ errors.first('formData.email') }} </span>
                </div>
                <div>
                    <label for="zip">Zip</label>
                    <input v-validate name="formData.zip" id="zip" data-vv-rules="required|numeric" :value="formData.zip" type="number" @input="updateZip">
                    <span>{{ errors.first('formData.zip') }} </span>
                </div>
                <div>
                    <label for="address">Address</label>
                    <input v-validate name="formData.address" id="address" data-vv-rules="required" :value="formData.address" type="text" @input="updateAddress">
                    <span>{{ errors.first('formData.address') }} </span>
                </div>                                
                <div> 
                    Form data from store: {{formData}}
                </div>
                <div>
                    Error object: {{ errors }}
                </div>
            </form> 
        </div>
    `
})
export default class FormPage extends Vue {
    
    updateName = (event: any): void => this.$store.commit('setName', event.target.value);
    updateEmail = (event: any): void => this.$store.commit('setEmail', event.target.value);
    updateZip = (event: any): void => this.$store.commit('setZip', event.target.value);
    updateAddress = (event: any): void => this.$store.commit('setAddress', event.target.value);

    get formData() {
        return this.$store.state.forms.formData;
    }
}