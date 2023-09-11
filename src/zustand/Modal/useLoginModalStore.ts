import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { LoginModalStoreType } from './types';

const useLoginModalStore = create<LoginModalStoreType>()(
    devtools((set) => ({
        isLoginModalOpen: false,
        setIsLoginModalOpen: (trigger) => set((state) => ({ isLoginModalOpen: trigger }), false, 'SET_IS_LOGIN_MODAL'),
    }))
);

export default useLoginModalStore;
