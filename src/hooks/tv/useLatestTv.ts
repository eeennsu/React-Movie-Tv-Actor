import { useQuery } from '@tanstack/react-query';
import { latestTV_API } from '../../apis/tvAPI';
import { LatestTvInfo } from '../../apis/types/tvTypes';

const useLatestTv = () => {
    const { data, isLoading, error } = useQuery<LatestTvInfo>(
        ['latest_tv'], 
        latestTV_API, {
        keepPreviousData: true,
    });

    return {
        data,
        isLoading,
        error,
    };
};

export default useLatestTv;
