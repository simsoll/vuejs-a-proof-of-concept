import Vue from 'vue';

const url = 'http://www.json-generator.com/api/json/get/celLKmqymq';

const getProducts = () => {
    return Vue.http.get(url)
        .then(response => Promise.resolve(response.body))
        .catch(error => Promise.reject(error));
}

export default {
    getProducts
};