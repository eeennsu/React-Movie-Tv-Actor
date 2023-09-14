import type { FC } from 'react';
import LatestContent from '../../../components/LatestContent';
import useLatestTv from '../../../hooks/tv/useLatestTv';
import LatestSkeleton from '../../../components/Skeleton/LatestSkeleton';


const LatestTv: FC = () => {

    const { data, isLoading } = useLatestTv();

    return (
        isLoading ? (
            <LatestSkeleton />
        ) : (
            <LatestContent tvData={data} />     
        )           
    );
};

export default LatestTv;