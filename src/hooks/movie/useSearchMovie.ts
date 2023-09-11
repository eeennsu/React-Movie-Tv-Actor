import { useQuery } from '@tanstack/react-query';
import { searchMovies_API } from '../../apis/movieAPI';
import { SearchMovieResponse } from '../../apis/types/movieTypes';
import { SelectType } from '../../zustand/search/types';

const useSearchMovie = (text: string, select: SelectType) => {
    
    const { data, error, isSuccess } = useQuery<SearchMovieResponse>(
        ['search_movie', { text, select }],
        () => searchMovies_API(text),
        {
            enabled: Boolean(text) && select === 'movie',
        }
    );

    return {
        data,
        isSuccess,
        error,
    };
};

export default useSearchMovie;
