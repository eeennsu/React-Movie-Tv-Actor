import type { SearchTvResponse } from '../../apis/types/tvTypes';
import { useQuery } from '@tanstack/react-query';
import { SearchTv_API } from '../../apis/tvAPI';
import { SelectType } from '../../zustand/search/types';

const useSearchTv = (text: string, select: SelectType) => {
    const { data, error, isSuccess } = useQuery<SearchTvResponse>(
        ['search_tv', { text, select }],
        () => SearchTv_API(text),
        {
            enabled: Boolean(text) && select === 'tv',
        }
    );

    return {
        data,
        isSuccess,
        error,
    };
};

export default useSearchTv;
