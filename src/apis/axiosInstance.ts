import axios from 'axios';
import env from '../env';

const axiosI = axios.create({
    baseURL: `${env.REACT_APP_TMDB_API_HOST}/${env.REACT_APP_TMDB_API_VERSION}`,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${env.REACT_APP_TMDB_API_TOKEN}`,
    },
    params: {
        api_key: env.REACT_APP_TMDB_API_KEY,
        language: 'ko-KR',
        append_to_response: 'videos,images',
        'certification.lte': '18'
    },
});

export default axiosI;