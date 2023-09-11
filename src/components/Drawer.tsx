import type { FC } from 'react';
import { Drawer as AntdDrawer } from 'antd';
import MainTitle from './MainTitle';
import SideNavLink from './SideNavLink';
import SearchField from './SearchField/SearchField';

interface Props {
    open: boolean;
    onClose: () => void; 
    handleLoginModalOpen: () => void;
    handleSignUpModalOpen: () => void;
}

const Drawer: FC<Props> = ({ open, onClose, handleLoginModalOpen, handleSignUpModalOpen }) => {

    return (
        <AntdDrawer title={<MainTitle />} placement='right' onClose={onClose} open={open}>            
            <div className='flex items-center mt-2 mb-10 justify-evenly'>
                <button onClick={handleLoginModalOpen} className="px-8 py-3 font-semibold text-white transition bg-teal-600 rounded-full hover:bg-teal-700 dark:bg-gray-100 dark:text-gray-800">
                    Login
                </button>
                <button onClick={handleSignUpModalOpen} className="px-8 py-3 font-semibold transition rounded-full hover:bg-slate-300 bg-slate-200 dark:bg-gray-100 dark:text-gray-800">
                    Sign Up
                </button>
            </div>           
            <ul className='flex flex-col text-lg font-semibold gap-y-4'>
                <li className='p-1 border-b border-b-neutral-200/80'>
                    <SideNavLink to='/' >Movie</SideNavLink>
                </li>
                <li className='p-1 border-b border-b-neutral-200/80'>
                    <SideNavLink to='tv'>TV</SideNavLink>
                </li>
                <li className='p-1 border-b border-b-neutral-200/80'>
                    <SideNavLink to='person'>Person</SideNavLink>
                </li>              
            </ul>          
            <div className='mt-12'>
                <SearchField />
            </div>                                     
        </AntdDrawer>   
    );
};

export default Drawer;