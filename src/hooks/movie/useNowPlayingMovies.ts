import { useQuery } from '@tanstack/react-query';
import { nowPlayingMovies_API } from '../../apis/movieAPI';
import { MovieListResponse } from '../../apis/types/movieTypes';

const useNowPlayingMovies = () => {
    const { data, isLoading, error } = useQuery<MovieListResponse>(
        ['now_playing_movie'], 
        nowPlayingMovies_API
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useNowPlayingMovies;
