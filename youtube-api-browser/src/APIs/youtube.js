import axios from 'axios';

const KEY = 'AIzaSyAM0NY9pH6XjArEmUJ9e7YRa3pEcUToVJA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        order: 'viewCount',
        key: KEY,
    }
});