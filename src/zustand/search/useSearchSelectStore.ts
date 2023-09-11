import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { SelectStoreType } from './types';

const useSearchSelectStore = create<SelectStoreType>()(
    devtools((set, get) => ({
        select: 'movie',
        setSelect: (select) => set((state) => ({ select }), false, 'SET_SELECT'),

        fetchedSucSelect: 'movie',
        setFetchedSucSelect: (fetchedSucSelect) => set((state) => ({ fetchedSucSelect }), false, 'SET_FETCHED_SUC_SELECT'),
    }))
);

export default useSearchSelectStore;
