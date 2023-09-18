import { Genre, Keyword } from './commonTypes';

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface PoroductionCompany {
    id: number;
    name: string;
} 

export interface LeastMovieInfo {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
    backdrop_path: string;
    release_date: string;
}

export interface DetailMovie extends LeastMovieInfo {
    adult: boolean;
    budget: number;
    genres: Genre[];
    homepage: string;
    original_title: string;
    overview: string;
    popularity: number;
    status: string;
    tagline: string;
    vote_count: number;
    spoken_languages: SpokenLanguage[];
    runtime: number;
    production_companies: PoroductionCompany[];
    revenue: number;
}

export interface MovieListResponse {
    page: number;
    total_pages: number;
    results: DetailMovie[];
}

export interface MovieKeywordsResponse {
    id: number;
    keywords: Keyword[];
}

export interface SearchMovieResponse {
    page: number;
    results: DetailMovie[];
    total_pages: number;
    total_results: number;
}