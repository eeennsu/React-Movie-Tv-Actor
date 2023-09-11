import { useQuery } from '@tanstack/react-query';
import { topRatedMovies_API } from '../../apis/movieAPI';
import { MovieListResponse } from '../../apis/types/movieTypes';

const useTopRatedMovies = () => {
    const { data, isLoading, error } = useQuery<MovieListResponse>(
        ['top_rated_movies'],
        topRatedMovies_API
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useTopRatedMovies;
