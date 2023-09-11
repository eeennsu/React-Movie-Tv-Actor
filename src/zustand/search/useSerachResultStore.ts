import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { ResultStoreType } from './types';

const useSerachResultStore = create<ResultStoreType>()(
    devtools((set) => ({
        searchKeyword: '',
        setSearchKeyword: (searchKeyword) =>
            set(
                (state) => ({
                    searchKeyword,
                }),
                false,
                'SET_SEARCH_KEYWORD'
            ),

        results: [],
        setResults: (results) =>
            set(
                (state) => ({
                    results,
                }),
                false,
                'SET_SEARCH_RESULTS'
            ),
    }))
);

export default useSerachResultStore;
