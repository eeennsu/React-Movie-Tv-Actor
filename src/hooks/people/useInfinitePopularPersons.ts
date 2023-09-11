import { UseInfiniteQueryResult, useInfiniteQuery } from '@tanstack/react-query';
import { LeastPersonInfo2 } from '../../apis/types/personTypes';
import { popularPerson_I_API } from '../../apis/personAPI';

const useInfinitePopularPersons = () => {
    const infiniteQuery = useInfiniteQuery({
        queryKey: ['infinite_popular_persons'],
        queryFn: popularPerson_I_API,
        getNextPageParam: (lastPage, allPages) => lastPage.length === 20 ? allPages.length * 20 : undefined
    });

    return infiniteQuery as UseInfiniteQueryResult<LeastPersonInfo2[], Error>;; 
};

export default useInfinitePopularPersons;
