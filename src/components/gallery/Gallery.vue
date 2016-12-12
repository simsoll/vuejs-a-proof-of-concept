<template>
    <div class="gallery">
        <h2>Gallery component</h2>
        <img v-for="image in properties.images" :src="image" alt="">
    </div>
</template>

<script>
export default {
    props: ['properties']
}
</script>

<style scoped>
.gallery {
    margin: 20px;
    padding: 20px;
    border: 1px solid green;
}
</style>
