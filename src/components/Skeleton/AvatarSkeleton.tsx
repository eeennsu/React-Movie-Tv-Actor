import type { FC } from 'react';
import Skeleton from './Skeleton';

const AvatarSkeleton: FC = () => {

    return (
        <div className='flex flex-col mx-1.5'>
            <Skeleton className='h-72 xs:h-90 sm:h-82 md:h-86 lg:h-76'/>
            <Skeleton className='w-3/5 h-5 mx-auto my-1 rounded-md bg-gray-600/30 md:h-7'/>
        </div>  
    );
};

export default AvatarSkeleton;