import axios from 'axios';
import { getStore } from '.';

var method = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  headers: {
    "Authorization" : `Bearer ${getStore('token')}`
  }
});

export default method;
