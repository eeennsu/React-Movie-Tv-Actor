import type { FC, PropsWithChildren } from 'react';

const Category: FC<PropsWithChildren> = ({ children }) => {

    return (
        <h1 className='mb-6 text-3xl font-bold tracking-tight text-black dark:text-white md:w-full md:border-b-0 md:border-l-4 md:text-4xl md:pl-3 md:border-l-teal-500'>
            <span className='pb-1 border-b-3 border-b-teal-500 md:border-b-0 md:pb-0'>
                {children}
            </span>
        </h1>
    );
};

export default Category;