<template>
    <div>
        <h1>{{ properties.data.header }}</h1>
        <div class="side-bar">
            <component 
                v-for="sidebarSpot in properties.data.sidebarSpots" 
                :is="sidebarSpot.type" 
                :properties="sidebarSpot"></component>
        </div>
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
.side-bar {
    width: 48%;
    float: right;
    margin: 1%;
    padding: 20px;
    border: 1px solid black;    
    box-sizing: border-box;
}
.spots {
    width:48%;
    float: left;
    margin: 1%;
    padding: 20px;
    border: 1px solid black;        
    box-sizing: border-box;
}
</style>
