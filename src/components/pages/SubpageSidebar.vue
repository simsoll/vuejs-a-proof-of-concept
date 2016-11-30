<template>
    <div>
        <h1>{{ properties.title }} - a SubpageSidebar component</h1>
        <div>
            {{ properties }}
        </div>
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
</style>
