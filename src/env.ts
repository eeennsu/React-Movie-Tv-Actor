import { cleanEnv, str } from 'envalid';

const env = cleanEnv(import.meta.env, {
    VITE_TMDB_API_VERSION: str(),
    VITE_TMDB_API_HOST: str(),
    VITE_TMDB_IMAGE_HOST: str(),
    VITE_TMDB_API_KEY: str(),
    VITE_TMDB_API_TOKEN: str(),
});

export default env;