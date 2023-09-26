import axios from 'axios';
import env from '../env';

const axiosI = axios.create({
    baseURL: `${env.VITE_TMDB_API_HOST}/${env.VITE_TMDB_API_VERSION}`,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${env.VITE_TMDB_API_TOKEN}`,
    },
    params: {
        api_key: env.VITE_TMDB_API_KEY,
        language: 'ko-KR',
        append_to_response: 'videos,images',
        'certification.lte': '18'
    },
});

export default axiosI;