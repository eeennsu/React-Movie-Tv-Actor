import axiosI from './axiosInstance';

const movie = 'movie';

// 현재 상영작 목록 api
export const nowPlayingMovies_API = () => axiosI.get(`/${movie}/now_playing`).then(res => res.data);

// 상위 평점작 목록 api
export const topRatedMovies_API = () => axiosI.get(`/${movie}/top_rated`).then(res => res.data);

// 인기 개봉작 목록 api
export const popularMovies_API = () => axiosI.get(`/${movie}/popular`).then(res => res.data);

// 개봉 예정작 목록 api
export const upcomingMovies_API = () => axiosI.get(`/${movie}/upcoming`).then(res => res.data);

// 영화 상세 정보 api
export const detailMovie_API = (movieId: string) => axiosI.get(`/${movie}/${movieId}`).then(res => res.data);

// 비슷한 작품 목록 api
export const similarMovies_API = (movieId: string) => axiosI.get(`/${movie}/${movieId}/similar`).then(res => res.data);

// 영화와 관련된 키워드
export const keywordMovies_API = (movieId: string) => axiosI.get(`/${movie}/${movieId}/keywords`).then(res => res.data);

// 해당 작품 출연 배우들 목록 api
export const actorsMovie_API = (movieId: string) => axiosI.get(`/${movie}/${movieId}/credits`).then(res => res.data);

// 영화 검색
export const searchMovies_API = (text: string) => axiosI.get(`/search/${movie}`, { params: { query: text } }).then(res => res.data);