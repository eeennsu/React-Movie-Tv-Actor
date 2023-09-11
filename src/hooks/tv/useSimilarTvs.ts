import { useQuery } from '@tanstack/react-query';
import { similarTvs_API } from '../../apis/tvAPI';
import { TvListResponse } from '../../apis/types/tvTypes';

const useSimilarTvs = (tvId: string) => {
    const { data, isLoading, error } = useQuery<TvListResponse>(
        ['pupular_tvs'],
        () => similarTvs_API(tvId),
        {
            enabled: Boolean(tvId)
        }
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useSimilarTvs;
