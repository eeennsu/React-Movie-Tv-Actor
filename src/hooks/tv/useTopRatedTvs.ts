import { useQuery } from '@tanstack/react-query';
import { popularTvs_API } from '../../apis/tvAPI';
import { TvListResponse } from '../../apis/types/tvTypes';

const useTopRatedTvs = () => {
    const { data, isLoading, error } = useQuery<TvListResponse>(
        ['top_rated_tvs'], 
        popularTvs_API
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useTopRatedTvs;
