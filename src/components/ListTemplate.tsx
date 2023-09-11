import type { FC, PropsWithChildren } from 'react';
import Divider from './Divider';
//import { useState } from 'react';

interface Props {
    isLast?: boolean;
}

const ListTemplate: FC<PropsWithChildren<Props>> = ({ children, isLast }) => {

    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 gap-1 gap-y-7 2xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:gap-2 md:gap-y-10 xl:gap-x-4 '>
                {children}
            </div>        
            {isLast ? null : <Divider />}
        </div>
    );
};

export default ListTemplate;