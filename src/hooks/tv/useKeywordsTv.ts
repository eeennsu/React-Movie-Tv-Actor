import { useQuery } from '@tanstack/react-query';
import { keywordTv_API } from '../../apis/tvAPI';
import { TvKeywordsResponse } from '../../apis/types/tvTypes';

const useKeywordsTv = (id: string) => {
    const { data, isLoading, error } = useQuery<TvKeywordsResponse>(
        ['keywords_tv', { id }], 
        () => keywordTv_API(id), 
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

export default useKeywordsTv;
