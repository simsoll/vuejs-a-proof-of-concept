import Vue = require('vue');
import axios from 'axios';
import { Promise } from 'axios';
import { IProduct } from '../models/product';

const base = 'http://www.json-generator.com/api/json/get';

export const getPageData = (url: string) => {
    return axios.get(base + url).then(response => {
        return {
            data: response.data.data,
            title: response.data.title,
            template: response.data.template.toLowerCase().replace(/-/g, "")
        };
    });
}
