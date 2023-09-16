import type { FC } from 'react';
import Skeleton from './Skeleton';

const MediaSkeleton: FC = () => {

    return (
        <div className='flex flex-col mx-1.5 '>
            <Skeleton className='w-full h-80 2xs:h-56 xs:h-72 sm:h-86 lg:h-88 xl:h-72'/>
            <Skeleton className='w-4/5 h-5 mx-auto my-1 rounded-md bg-slate-300 md:h-7'/>
        </div>        
    );
};

export default MediaSkeleton;