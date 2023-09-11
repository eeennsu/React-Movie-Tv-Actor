import { useQuery } from '@tanstack/react-query';
import { keywordMovies_API } from '../../apis/movieAPI';
import { MovieKeywordsResponse } from '../../apis/types/movieTypes';

const useKeywordsMovie = (id: string) => {
    const { data, isLoading, error } = useQuery<MovieKeywordsResponse>(
        ['keywords_movie', { id }],
        () => keywordMovies_API(id),
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

export default useKeywordsMovie;
