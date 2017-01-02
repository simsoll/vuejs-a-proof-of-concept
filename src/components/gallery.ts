import Vue = require('vue')
import Component from 'vue-class-component'

@Component({
    template: `
        <div class="gallery">
            <h2>Gallery component</h2>
            <img v-for="image in properties.images" :src="image" alt="">
        </div>
    `,
    props: ['properties']    
})
export default class Gallery extends Vue {
}