import axios from 'axios';
import { getStore } from '.';

var method = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Authorization" : `Bearer ${getStore('token')}`
  }
});

export default method;
