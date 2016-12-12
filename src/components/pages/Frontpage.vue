<template>
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
</template>

<script>
import RichText from '../richText/RichText.vue';
import Gallery from '../gallery/Gallery.vue';

export default {
    components: {
        richtext: RichText,
        gallery: Gallery
    },    
    props: ['properties']
}
</script>

<style scoped>
.spots {

}
</style>
