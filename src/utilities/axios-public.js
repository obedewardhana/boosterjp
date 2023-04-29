import axios from 'axios';

var urlPublic = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default urlPublic;
