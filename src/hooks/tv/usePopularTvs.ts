import { useQuery } from '@tanstack/react-query';
import { popularTvs_API } from '../../apis/tvAPI';
import { TvListResponse } from '../../apis/types/tvTypes';

const usePopularTvs = () => {
    const { data, isLoading, error } = useQuery<TvListResponse>(
        ['popular_tvs'], 
        popularTvs_API
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default usePopularTvs;
