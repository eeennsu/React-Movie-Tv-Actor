import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeFilled } from '@ant-design/icons';
import type { FC } from 'react';
import MainTitle from '../../components/MainTitle';

const Footer: FC = () => {

    const curYear =  new Date().getFullYear(); 

    return (
        <footer className='bg-gray-100 dark:bg-gray-600'> 
            <div className='max-w-5xl px-4 py-6 mx-auto sm:px-6 lg:px-8'>
                <div className='flex justify-center'>
                    <MainTitle />
                </div>
                <p className='hidden max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 dark:text-white md:block'> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                    consequuntur amet culpa cum itaque neque.
                </p>
                <div className='items-center mt-2 lg:justify-center lg:flex lg:mt-4 lg:gap-10'>
                    <ul className='flex justify-center my-10 gap-x-11 lg:my-0 lg:grid lg:grid-cols-2 lg:gap-6'>
                        <li className='text-3xl cursor-pointer md:text-2xl text-sky-400' >
                            <TwitterOutlined />
                        </li>
                        <li className='text-3xl text-pink-500 cursor-pointer md:text-2xl'>
                            <InstagramOutlined />
                        </li>
                        <li className='text-3xl text-blue-400 cursor-pointer md:text-2xl'>
                            <FacebookOutlined />
                        </li>
                        <li className='text-3xl text-red-600 cursor-pointer md:text-2xl' >
                            <YoutubeFilled />
                        </li>
                    </ul>
                    <ul className='flex flex-wrap justify-center gap-6 font-semibold text-gray-700 dark:text-black md:gap-8 lg:gap-12'>
                        <li className='pb-1 transition border-b-2 cursor-pointer dark:hover:border-b-white dark:hover:text-white dark:border-b-gray-700 hover:text-black hover:border-b-neutral hover:border-b-2'>                            
                            이용약관                            
                        </li>
                        <li className='pb-1 transition border-b-2 cursor-pointer dark:hover:border-b-white dark:hover:text-white dark:border-b-gray-700 hover:text-black hover:border-b-neutral hover:border-b-2'>                            
                            위치정보                            
                        </li>
                        <li className='pb-1 transition border-b-2 cursor-pointer dark:hover:border-b-white dark:hover:text-white dark:border-b-gray-700 hover:text-black hover:border-b-neutral hover:border-b-2'>                            
                            개인정보처리방침                            
                        </li>
                        <li className='pb-1 transition border-b-2 cursor-pointer dark:hover:border-b-white dark:hover:text-white dark:border-b-gray-700 hover:text-black hover:border-b-neutral hover:border-b-2'>                            
                            운영정책                            
                        </li>                 
                    </ul>
                </div>
                <p className='mt-3 text-center text-black dark:text-slate-100'>
                    Copyright &copy; {curYear} eeennsu All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;