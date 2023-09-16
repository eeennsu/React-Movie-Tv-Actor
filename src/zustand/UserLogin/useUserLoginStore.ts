import { create } from 'zustand';
import { LoginStoreType } from './types';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const useUserLoginStore = create<LoginStoreType>()(
    devtools(
        persist(
            (set) => ({
                isLogin: false,
                setIsLogin: (trigger) => set((state) => ({ isLogin: trigger }), false, 'SET_IS_LOGIN'),
            }),
            {
                name: 'login-storage',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);

export default useUserLoginStore;