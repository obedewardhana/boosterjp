import axios from 'axios';

var urlPublic = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
});

export default urlPublic;
