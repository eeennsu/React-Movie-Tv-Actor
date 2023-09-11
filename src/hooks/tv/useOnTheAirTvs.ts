import { useQuery } from '@tanstack/react-query';
import { onTheAirTvs_API } from '../../apis/tvAPI';
import { TvListResponse } from '../../apis/types/tvTypes';

const useOnTheAirTvs = () => {
    const { data, isLoading, error } = useQuery<TvListResponse>(
        ['on_the_air_tvs'], 
        onTheAirTvs_API
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useOnTheAirTvs;
