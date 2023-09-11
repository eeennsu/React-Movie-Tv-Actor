import { useQuery } from '@tanstack/react-query';
import { detailTv_API } from '../../apis/tvAPI';
import { DetailTv } from '../../apis/types/tvTypes';

const useDetailTv = (tvId: string) => {
    const { data, isLoading, error } = useQuery<DetailTv>(
        ['detail_tv', { tvId }], 
        () => detailTv_API(tvId), 
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

export default useDetailTv;
