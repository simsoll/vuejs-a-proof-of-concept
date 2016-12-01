<template>
    <div class="richtext">
        <h2>Richtext component</h2>
        <div v-html="properties.content"></div>
    </div>
</template>

<script>
export default {
    props: ['properties'],
    data() {
        return {
        };
    }
}
</script>

<style scoped>
.richtext {
    margin: 20px;
    padding: 20px;
    border: 1px solid red;
}
</style>
