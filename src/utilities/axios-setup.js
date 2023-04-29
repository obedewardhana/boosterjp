import axios from 'axios';
import { getStore } from '.';

var method = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Authorization" : `Bearer ${getStore('token')}`
  }
});

export default method;
