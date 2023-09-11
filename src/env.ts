import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
    REACT_APP_TMDB_API_VERSION: str(),
    REACT_APP_TMDB_API_HOST: str(),
    REACT_APP_TMDB_IMAGE_HOST: str(),
    REACT_APP_TMDB_API_KEY: str(),
    REACT_APP_TMDB_API_TOKEN: str(),
});

export default env;