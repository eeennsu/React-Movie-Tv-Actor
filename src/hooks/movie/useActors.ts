import { useQuery } from '@tanstack/react-query';
import { actorsMovie_API } from '../../apis/movieAPI';
import { LeastPersonInfo2List } from '../../apis/types/personTypes';

const useActors = (id: string) => {
    const { data, isLoading, error } = useQuery<LeastPersonInfo2List>(
        ['movie_actors', { id }],
        () => actorsMovie_API(id),
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

export default useActors;
