import Vue from 'vue';

const url = 'http://www.json-generator.com/api/json/get/celLKmqymq';

const getProducts = () => {
    return Vue.http.get(url).then(response => {
        return response.body;
    });
}

export default {
    getProducts
};