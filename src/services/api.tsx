import axios from 'axios'

const api = axios.create({
    baseURL: "http://ws.audioscrobbler.com/2.0/",
});

export default api;
  