import { devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { SignUpModalStoreType } from './types';

const useSignUpModalStore = create<SignUpModalStoreType>()(
    devtools((set) => ({
        isSignUpModalOpen: false,
        setIsSignUpModalOpen: (trigger) => set((state) => ({ isSignUpModalOpen: trigger }), false, 'SET_IS_LOGIN_MODAL'),
    }))
);

export default useSignUpModalStore;
