import type { FC } from 'react';
import Skeleton from './Skeleton';

const HotPersonSkeleton: FC = () => {

    return (
        <Skeleton className='h-96 md:h-132 hero-content'/>
    );
};

export default HotPersonSkeleton;