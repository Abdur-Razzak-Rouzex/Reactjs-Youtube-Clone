import axios from 'axios'; // sends request to the api

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});
