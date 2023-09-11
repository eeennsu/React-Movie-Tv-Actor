import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { AutoListStoreType } from './types';

const useSearchAutoListStore = create<AutoListStoreType>()(
    devtools((set) => ({
        visible: true,
        setVisible: (trigger) => set(state => ({ visible: trigger }), false, 'SET_AUTO_LIST_VISIBLE')
    }))
);

export default useSearchAutoListStore;
