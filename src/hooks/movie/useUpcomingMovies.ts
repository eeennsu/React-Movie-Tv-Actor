import { useQuery } from '@tanstack/react-query';
import { upcomingMovies_API } from '../../apis/movieAPI';
import { MovieListResponse } from '../../apis/types/movieTypes';

const useUpcomingMovies = () => {
    const { data, isLoading, error } = useQuery<MovieListResponse>(
        ['upcoming_movies'], 
        upcomingMovies_API
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useUpcomingMovies;
