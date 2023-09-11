import { useQuery } from '@tanstack/react-query';
import { popularMovies_API } from '../../apis/movieAPI';
import { MovieListResponse } from '../../apis/types/movieTypes';

const usePopularMovies = () => {
    const { data, isLoading, error } = useQuery<MovieListResponse>(
        ['popular_movies'], 
        popularMovies_API
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default usePopularMovies;
