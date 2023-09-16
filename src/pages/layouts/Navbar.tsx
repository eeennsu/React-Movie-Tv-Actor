import { useCallback, useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import SearchField from '../../components/SearchField/SearchField';
import MainTitle from '../../components/MainTitle';
import { MenuOutlined } from '@ant-design/icons';
import MainNavLink from '../../components/MainNavLink';
import Drawer from '../../components/Drawer';
import LoginModal from '../../components/LoginModal';
import SignUpModal from '../../components/SignUpModal';
import useLoginModalState from '../../zustand/modal/useLoginModalStore';
import useSignUpModalStore from '../../zustand/modal/useSignUpModalStore';

const Navbar: FC = () => {

    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

    const { isLoginModalOpen, setIsLoginModalOpen} = useLoginModalState();
    const { isSignUpModalOpen, setIsSignUpModalOpen } = useSignUpModalStore();

    const handleDrawerOpen = useCallback(() => {
        setIsOpenDrawer(true);
    }, [])

    const handleDrawerClose = useCallback(() => {
        setIsOpenDrawer(false);
    }, []);

    const handleLoginModalOpen = useCallback(() => {
        setIsLoginModalOpen(true);
    }, [setIsLoginModalOpen])

    const handleLoginModalClose = useCallback(() => {
        setIsLoginModalOpen(false);
    }, [setIsLoginModalOpen]);

    const handleSignUpModalOpen = useCallback(() => {
        setIsSignUpModalOpen(true);
    }, [setIsSignUpModalOpen]);

    const handleSignUpModalClose = useCallback(() => {
        setIsSignUpModalOpen(false);
    }, [setIsSignUpModalOpen]);
    
    return (
        <header className='sticky top-0 z-50 bg-white shadow-lg'>
            <div className='flex items-center h-16 max-w-screen-xl gap-8 px-5 mx-auto sm:px-6 lg:px-20'>
                <Link to='/'>
                    <MainTitle />
                </Link>
                <div className='flex items-center justify-end flex-1 gap-4 lg:justify-between'>
                    <nav className='hidden lg:block'>
                        <ul className='flex items-center justify-center h-16 gap-x-4'>
                            <li className='text-gray-500 transition hover:text-gray-500/75'>
                                <MainNavLink to='/' >Movie</MainNavLink>
                            </li>
                            <li className='text-gray-500 transition hover:text-gray-500/75'>
                                <MainNavLink to='tv'>TV</MainNavLink>
                            </li>
                            <li className='text-gray-500 transition hover:text-gray-500/75'>
                                <MainNavLink to='person'>Person</MainNavLink>
                            </li>
                        </ul>
                    </nav>                                    
                    <div className="flex items-center gap-4 lg-gap-0">
                        <div className='hidden lg:block'>
                            <SearchField />  
                        </div>                       
                        <div className="hidden lg:flex lg:gap-2">
                            <button onClick={handleLoginModalOpen} className='block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700'>
                                Login
                            </button>          
                            <button onClick={handleSignUpModalOpen} className="whitespace-nowrap rounded-md bg-slate-200 px-5 py-2.5 text-sm font-medium transition hover:bg-slate-300 ">
                                Sign Up
                            </button>
                        </div>
                        <button className="block px-4 py-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-950 lg:hidden" onClick={handleDrawerOpen}>
                            <MenuOutlined />
                        </button>
                        <Drawer open={isOpenDrawer} onClose={handleDrawerClose} handleLoginModalOpen={handleLoginModalOpen} handleSignUpModalOpen={handleSignUpModalOpen}/>
                        <LoginModal onCancel={handleLoginModalClose} open={isLoginModalOpen}/>       
                        <SignUpModal onCancel={handleSignUpModalClose}  open={isSignUpModalOpen}/>
                    </div>
                </div>              
            </div>            
        </header>    
    );
};

export default Navbar;