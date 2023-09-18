import type { FC } from 'react';
import { getLImageUrl } from '../../utils/utils';
//import { useState } from 'react';

interface Props {
    backdrop_path?: string;
}

const TvBackdrop: FC<Props> = ({ backdrop_path }) => {

    return (
        <div className='items-center justify-center hidden mt-10 lg:flex h-52'>
            <div className='flex items-end justify-center h-full' style={{ 
                backgroundImage: `url(${backdrop_path && getLImageUrl(backdrop_path as string)})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                width: '1024px',
            }}>                                   
            </div>               
        </div>
    );
};

export default TvBackdrop;