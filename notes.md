* lean & small (16kb minified and gzipped)
* great runtime performance (better than AngularJS and React)
* easy as widget
  * easy to interact with the Vuejs instance (or instances) from the outsite (e.g. get/set values)!
* easy as SPA framework
* opioniated about data/state, methods, ..., placement
* v-once
* event-modifier chains
 * fx: v-on:keyup.enter.space on input element
* computed properties (only run when the data/dependencies changes!)
* watch property (more performant to use computed)
* v-on: = @ and v-bind: = :
* v-else
* <template v-if="asdf"></template> to remove/add grouped data without the sideeffect of a div
* access html elements using ref (<button ref="myButton"></button>)
* vm.$mount('#app') === {... el: "#app", ...}
* instance lifecycle + lifecycle hooks
* register components locally and globally
* component scoped styles using shadow DOM
* using props for data from parent to child
* using single template/component files everything complies down to JavaScript, which enables some extra "features". Eg. it's possible to write component names (or props names) using camelCase, as the template is not "real" HTML.
* prop VALIDATION!! using props as a object ( {myName: String, myNumber: Number, etc. }) + required, default etc.
* emit events to child --> parent component
* communication between componennts in a small to medium sized app can be done using an event bus
* slots === transclusion
 * only styles are controlled by the child component
* dynamic components using "component" tag and ":is" binding attribute
 * can be wrapped in keep-a-live tags to not destroy dynamic components
 * has two life-cycle hooks (activated/deactived)
 * simple image slider!?
* custom directives
 * binding.value (="'asdf'") and binding.arg (:) and binding.modifiers (.)
 * can pass object through binding.value
* filters 
 * often computed props works better
* mixins
 * reuse (not shared!) data props, computed props, etc. in components
 * also possible to create global mixins
* animations
 * *-enter, *-enter-active, *-leave, *-leave-active css classes (can be overwritten)
 * js hooks also available (use :css="false" to skip css detention done by vuejs)
* http using vue-resource
 * custom actions 
 * interceptors
* scrollBehavior on vue-router
* vuex
 * mapGetters (need babel stage 2): lecture 289
 * mapMutations: lecture 291
 * mutations needs to be syncronous! (use Actions for async tasks) 
 * need v-model with vuex? use get/set on computed props: lecture 297
 * use modules/actions/mutations/getters files to split the store into smaller pieces: lecture 300

# Install using the vue-cli + simple webpack template
npm install -g vue-cli
vue init webpack-simple vuejs-a-proof-of-concept
cd vuejs-a-proof-of-concept
npm install
npm run dev

# General setup
* server should ALWAYS return index.html
* data/content using http request

# Pages
* add transition on route change: lecture 273

## Product Details

### Image Slider
* Dynamic components + transition element: lecture 231
* slide animation: lecture 220 
* appear: lecture 222
* transition between multiple elements: lecture 226
* do it using JavaScript?: lecture 228 -->
* do it using transition-groups?: lecture 234

## Forms Page
* v-model bindings
 * v-model.lazy (modifier)
* same v-model binding on multiple checkboxes will automatically merge into an array data structure
* same v-model binding on radio buttons will ensure the correct grouping automatically
* for dropdowns (select and option) just use a simple v-for (no need for ng-options as in angular) on option. Default value using v-model on select
* create switch component which works with v-model directly using a "value" prop and emitting "input"