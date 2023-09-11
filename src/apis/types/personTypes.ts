export type DepartmentType = 'Acting' | 'Directing' | 'Visual Effects';
export type GenderType = 0 | 1 | 2 | 3;
export type MediaType = 'movie' | 'tv';

export interface LeastPersonInfo {
    id: number;
    gender: GenderType;
    name: string;
    profile_path: string;
}

export interface LeastPersonInfo2List {
    id: number;
    cast: LeastPersonInfo2[];
}

// movie 혹은 tv
export interface KnowMedia {
    id: string;
    backdrop_path: string;
    media_type: MediaType;
    name: string;
    origin_country: string[];
    original_name: string;
    overview: string;
    vote_average: number;
    poster_path: string;
}

export interface LeastPersonInfo2 extends LeastPersonInfo {
    original_name: string;
    known_for: KnowMedia[];
    known_for_department: string;
    popularity: number;
}

export interface DetailPerson extends LeastPersonInfo2 {
    biography: string;
    also_known_as: string[];
    birthday: string;
    deathday: string;
    homepage: string;
    place_of_birth: string;
}

export interface SearchPersonResponse {
    page: number;
    results: DetailPerson[];
    total_pages: number;
    total_results: number;
}

export interface PersonListResponse {
    page: number;
    results: DetailPerson[];
    total_pages: number;
    total_results: number;
}

export interface InfinitePerson {
    count: number;
    next: string;
    previous: boolean;
    results: DetailPerson[];
}