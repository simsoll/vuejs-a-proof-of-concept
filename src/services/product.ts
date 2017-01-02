import Vue = require('vue');
import axios from 'axios';
import { Promise } from 'axios';
import { IProduct } from '../models/product';

const url = 'http://www.json-generator.com/api/json/get/celLKmqymq';

export const getProducts = () => {
    return axios.get(url).then(reponse => {
        return <IProduct[]>reponse.data;
    });
}
