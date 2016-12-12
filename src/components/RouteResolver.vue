<template>
    <div>
        <component 
            :is="properties.template" 
            :properties="properties">
        </component>
    </div>
</template>

<script>
import Frontpage from './pages/Frontpage.vue';
import Subpage from './pages/Subpage.vue';
import SubpageSidebar from './pages/SubpageSidebar.vue'

export default {
    components: {
        frontpage: Frontpage,
        subpage: Subpage,
        subpagesidebar: SubpageSidebar
    },
    data: () => ({
            properties: {}
    }),
    created () {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData()
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },    
    methods: {
        fetchData() {
            this.$http.get('http://www.json-generator.com/api/json/get' + this.$route.path)
                      .then(response => response.json())
                      .then(response => {
                          this.properties = {
                              data: response.data,
                              title: response.title,
                              template: response.template.toLowerCase().replace(/-/g, "")
                          };
                        })
                        .catch(error => this.$router.push('/'));
        }
    }
}

</script>

<style scoped>
</style>
