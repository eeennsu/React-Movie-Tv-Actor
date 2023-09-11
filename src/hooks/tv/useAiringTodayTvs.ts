import { useQuery } from '@tanstack/react-query';
import { airingTodayTvs_API } from '../../apis/tvAPI';
import { TvListResponse } from '../../apis/types/tvTypes';

const useAiringTodayTv = () => {
    const { data, isLoading, error } = useQuery<TvListResponse>(
        ['airing_today_tvs'], 
        airingTodayTvs_API
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useAiringTodayTv;
