import type { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { FloatButton } from 'antd';
//import { useState } from 'react';

const Index: FC = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-grow'>
                <div className='max-w-screen-xl px-4 py-6 mx-auto md:px-12 xl:px-28'>
                    <Outlet />
                </div>             
            </div>    
            <FloatButton.BackTop />        
            <Footer />
        </div>
    );
};

export default Index;