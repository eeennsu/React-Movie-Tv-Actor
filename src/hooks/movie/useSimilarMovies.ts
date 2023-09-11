import { useQuery } from '@tanstack/react-query';
import { similarMovies_API } from '../../apis/movieAPI';
import { MovieListResponse } from '../../apis/types/movieTypes';

const useSimilarMovies = (id: string) => {
    const { data, isLoading, error } = useQuery<MovieListResponse>(
        ['similar_movies', { id }],
        () => similarMovies_API(id),
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

export default useSimilarMovies;
