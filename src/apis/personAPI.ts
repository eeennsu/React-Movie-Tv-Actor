import axiosI from './axiosInstance';
import { InfinitePerson } from './types/personTypes';

const person = 'person';

// 사람 검색
export const personSearch_API = (text: string) => axiosI.get(`/search/${person}`, { params: { query: text } }).then(res => res.data);

// 인기 있는 사람 api - basic get
export const popularPerson_API = () => axiosI.get(`/${person}/popular`).then(res => res.data);

// 인기 있는 사람 api - infinite query
export const popularPerson_I_API = ({ pageParam = 1 }) =>
    axiosI.get<InfinitePerson>(`/${person}/popular`, { params: { page: pageParam } }).then((res) => res.data).then(res => res.results);

export const detailPerson_API = (personId: string) => axiosI.get(`/${person}/${personId}`).then(res => res.data);