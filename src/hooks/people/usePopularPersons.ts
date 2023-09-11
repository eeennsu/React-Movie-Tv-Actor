import { useQuery } from '@tanstack/react-query';
import { PersonListResponse } from '../../apis/types/personTypes';
import { popularPerson_API } from '../../apis/personAPI';

const usePopularPersons = () => {
    const { data, isLoading, error } = useQuery<PersonListResponse>(
        ['popular_persons'], 
        popularPerson_API)
    ;

    return {
        data,
        isLoading,
        error,
    };
};

export default usePopularPersons;
