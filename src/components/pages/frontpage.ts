import Vue = require('vue')
import Component from 'vue-class-component'
import RichText from '../rich-text';
import Gallery from '../gallery';

@Component({
    components: {
        richtext: RichText,
        gallery: Gallery
    },
    props: ['properties'],    
    template: `
        <div>
            <h1>{{ properties.data.header }}</h1>
            <img :src="properties.data.heroImage" alt="">
            <div class="spots">
                <component 
                    v-for="spot in properties.data.spots" 
                    :is="spot.type" 
                    :properties="spot">
                </component>
            </div>
        </div>
    `
})
export default class FrontPage extends Vue {
}