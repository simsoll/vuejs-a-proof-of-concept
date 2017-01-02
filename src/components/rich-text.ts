import Vue = require('vue')
import Component from 'vue-class-component'

@Component({
    template: `
        <div class="richtext">
            <h2>Richtext component</h2>
            <div v-html="properties.content"></div>
        </div>
    `,
    props: ['properties']    
})
export default class RichText extends Vue {
}