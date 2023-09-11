import { useQuery } from '@tanstack/react-query';
import { LeastPersonInfo2List } from '../../apis/types/personTypes';
import { castsTv_API } from '../../apis/tvAPI';

const useCasts = (id: string) => {
    const { data, isLoading, error } = useQuery<LeastPersonInfo2List>(
        ['tv_casts', { id }],
        () => castsTv_API(id),
        {
            enabled: Boolean(id),
        }
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useCasts;
