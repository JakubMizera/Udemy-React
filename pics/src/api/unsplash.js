import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3N-1RAaY14RPT_AnsGD8vqEU6b06akbDU79lQyOIROw',
    },
});