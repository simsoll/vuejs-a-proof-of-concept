<template>
    <div>
        <h1>{{ properties.data.header }}</h1>
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
    props: ['properties'],
    data() {
        return {
        };
    }
}
</script>

<style scoped>
.spots {
    margin: 20px;
    padding: 20px;
    border: 1px solid black;    
}
</style>
