import axiosI from './axiosInstance';

const tv = 'tv';

// 랜덤 최근 상영작 한개 api
export const latestTV_API = () => axiosI.get(`/${tv}/latest`).then(res => res.data);

// 오늘 방영작 목록 api
export const airingTodayTvs_API = () => axiosI.get(`/${tv}/airing_today`).then(res => res.data);

// 곧 방영할 목록 api
export const onTheAirTvs_API = () => axiosI.get(`/${tv}/on_the_air`).then(res => res.data);

// 인기 방영작 목록 api
export const popularTvs_API = () => axiosI.get(`/${tv}/popular`).then(res => res.data);

// 평점 높은 방영 목록
export const topRatedTvs_API = () => axiosI.get(`/${tv}/top_rated`).then(res => res.data);

// tv 상세 정보 api
export const detailTv_API = (tvId: string) => axiosI.get(`/${tv}/${tvId}`).then(res => res.data);

// tv 키워드 api
export const keywordTv_API = (tvId: string) => axiosI.get(`/${tv}/${tvId}/keywords`).then(res => res.data);

// 영화 검색 api
export const SearchTv_API = (text: string) => axiosI.get(`/search/${tv}`, { params: { query: text } }).then(res => res.data);

// 해당 방송 출연진 목록 api
export const castsTv_API = (tvId: string) => axiosI.get(`/${tv}/${tvId}/credits`).then(res => res.data);

// 비슷한 작품 목록 api
export const similarTvs_API = (tvId: string) => axiosI.get(`/${tv}/${tvId}/similar`).then(res => res.data);
