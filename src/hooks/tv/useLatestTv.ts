import { useQuery } from '@tanstack/react-query';
import { latestTV_API } from '../../apis/tvAPI';

const useLatestTv = () => {
    const { data, isLoading, error } = useQuery(
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
