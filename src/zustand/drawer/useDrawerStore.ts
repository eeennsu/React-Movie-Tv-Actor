import { create } from 'zustand';
import { DrawerStoreType } from './types';
import { devtools } from 'zustand/middleware';

const useDrawerStore = create<DrawerStoreType>()(
    devtools(
        (set) => ({
            isDrawerOpen: false,
            setIsDrawerOpen: (trigger) => set((state) => ({ isDrawerOpen: trigger }), false, 'SET_IS_DRAWER_OPEN'),
        })
    )
);

export default useDrawerStore;