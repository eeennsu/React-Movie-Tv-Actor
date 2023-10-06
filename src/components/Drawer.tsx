import type { FC } from 'react';
import { Drawer as AntdDrawer } from 'antd';
import MainTitle from './MainTitle';
import SideNavLink from './SideNavLink';
import SearchField from './SearchField/SearchField';
import useDrawerStore from '../zustand/drawer/useDrawerStore';
import useLoginModalStore from '../zustand/modal/useLoginModalStore';
import useSignUpModalStore from '../zustand/modal/useSignUpModalStore';
import LoginButton from './User/LoginButton';
import SignUpButton from './User/SignUpButton';

const Drawer: FC = () => {

    const { isDrawerOpen ,setIsDrawerOpen } = useDrawerStore();
    const { setIsLoginModalOpen } = useLoginModalStore();
    const { setIsSignUpModalOpen } = useSignUpModalStore();

    const handleClose = () => {
        setIsDrawerOpen(false);
    }

    const handleLoginModal = () => {
        setIsDrawerOpen(false);
        setIsLoginModalOpen(true);
    }

    const handleSignUpModal = () => {
        setIsDrawerOpen(false);
        setIsSignUpModalOpen(true);
    }

    return (
        <AntdDrawer title={<MainTitle />} placement='right'  onClose={handleClose} open={isDrawerOpen}>            
            <section className='flex items-center mt-2 mb-10 justify-evenly'>
                <LoginButton onClick={handleLoginModal} isMobile />
                <SignUpButton onClick={handleSignUpModal} isMobile />
            </section> 

            <nav aria-label='mobile-navigation'>
                <ul className='flex flex-col text-lg font-semibold gap-y-4'>
                    <li onClick={handleClose} className='p-1 border-b border-b-neutral-200/80'>
                        <SideNavLink to='/'>Movie</SideNavLink>
                    </li>
                    <li onClick={handleClose} className='p-1 border-b border-b-neutral-200/80'>
                        <SideNavLink to='/tv'>TV</SideNavLink>
                    </li>
                    <li onClick={handleClose} className='p-1 border-b border-b-neutral-200/80'>
                        <SideNavLink to='/person'>People</SideNavLink>
                    </li>              
                </ul>  
            </nav>               
                 
            <section className='mt-12'>
                <SearchField isDrawer />
            </section>                                     
        </AntdDrawer>   
    );
};

export default Drawer;