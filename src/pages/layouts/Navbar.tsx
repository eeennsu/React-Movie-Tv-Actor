import type { FC } from 'react';
import { Link } from 'react-router-dom';
import SearchField from '../../components/SearchField/SearchField';
import MainTitle from '../../components/MainTitle';
import { MenuOutlined } from '@ant-design/icons';
import MainNavLink from '../../components/MainNavLink';
import Drawer from '../../components/Drawer';
import LoginModal from '../../components/LoginModal';
import SignUpModal from '../../components/SignUpModal';
import useSignUpModalStore from '../../zustand/modal/useSignUpModalStore';
import useDrawerStore from '../../zustand/drawer/useDrawerStore';
import useLoginModalStore from '../../zustand/modal/useLoginModalStore';
import LoginButton from '../../components/User/LoginButton';
import SignUpButton from '../../components/User/SignUpButton';

const Navbar: FC = () => {

    const { setIsDrawerOpen } = useDrawerStore();
    const { setIsLoginModalOpen } = useLoginModalStore();
    const { setIsSignUpModalOpen } = useSignUpModalStore();
    
    const loginModalOpen = () => {
        setIsLoginModalOpen(true);
    }

    const signUpModalOpen = () => {
        setIsSignUpModalOpen(true);
    }

    return (
        <header className='sticky top-0 z-50 bg-white shadow-lg dark:bg-gray-600'>
            <div className='flex items-center h-16 max-w-screen-xl gap-8 px-5 mx-auto sm:px-6 lg:px-20'>
                <Link to='/'>
                    <MainTitle />
                </Link>
                <div className='flex items-center justify-end flex-1 gap-4 lg:justify-between'>
                    <nav aria-label='desktop-navigation' className='hidden lg:block'>
                        <ul className='flex items-center justify-center h-16 gap-x-4'>
                            <li className='text-gray-500 transition dark:text-white dark:hover:text-teal-600 hover:text-gray-500/75'>
                                <MainNavLink to='/' >
                                    Movie
                                </MainNavLink>
                            </li>
                            <li className='text-gray-500 transition dark:text-white dark:hover:text-teal-600 hover:text-gray-500/75'>
                                <MainNavLink to='tv'>
                                    TV
                                </MainNavLink>
                            </li>
                            <li className='text-gray-500 transition dark:text-white dark:hover:text-teal-600 hover:text-gray-500/75'>
                                <MainNavLink to='person'>
                                    People
                                </MainNavLink>
                            </li>
                        </ul>
                    </nav>                                    
                    <div className="flex items-center gap-4 lg-gap-0">
                        <div className='hidden lg:block'>
                            <SearchField />  
                        </div>                       
                        <div className="hidden lg:flex lg:gap-2">
                            <LoginButton onClick={loginModalOpen} isMobile={false}/>
                            <SignUpButton onClick={signUpModalOpen} isMobile={false}/>
                        </div>
                        <button className="block px-4 py-2 text-gray-600 transition bg-gray-100 rounded dark:bg-slate-500 hover:text-gray-950 lg:hidden" onClick={() => setIsDrawerOpen(true)}>
                            <MenuOutlined />
                        </button>
                        <Drawer />
                        <LoginModal />       
                        <SignUpModal />
                    </div>
                </div>              
            </div>            
        </header>    
    );
};

export default Navbar;