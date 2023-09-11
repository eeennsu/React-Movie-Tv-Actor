import { useQuery } from '@tanstack/react-query';
import { detailMovie_API } from '../../apis/movieAPI';
import { DetailMovie } from '../../apis/types/movieTypes';

const useDetailMovie = (id: string) => {
    const { data, isLoading, error } = useQuery<DetailMovie>(
        ['detail_movie', { id }], 
        () => detailMovie_API(id), {
        enabled: Boolean(id),
    });

    return {
        data,
        isLoading,
        error,
    };
};

export default useDetailMovie;
