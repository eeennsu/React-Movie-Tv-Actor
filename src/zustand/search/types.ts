import { SearchMovieResponse } from '../../apis/types/movieTypes';
import { SearchPersonResponse } from '../../apis/types/personTypes';
import { SearchTvResponse } from '../../apis/types/tvTypes';

export type SelectType = 'movie' | 'tv' | 'person';

export interface SelectStoreType {
    select: SelectType;
    setSelect: (select: SelectType) => void;

    // fetch suc 후 변경된 것을 반영하는 것이 자연스럽기에 이 부분을 더 만들어준다.
    fetchedSucSelect: SelectType;
    setFetchedSucSelect: (select: SelectType) => void;
}

////////////////////////////////

export type ResultsType =
    | SearchMovieResponse['results']
    | SearchTvResponse['results']
    | SearchPersonResponse['results'];

export interface ResultStoreType {
    searchKeyword: string;
    setSearchKeyword: (keyword: string) => void;
    results?: ResultsType;
    setResults: (result: ResultsType) => void;
}

////////////////////////////////

export interface AutoListStoreType {
    visible: boolean;
    setVisible: (trigger: boolean) => void;
}