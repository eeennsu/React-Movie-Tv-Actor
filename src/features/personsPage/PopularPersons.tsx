import type { FC } from 'react';
import Category from '../../components/Category';
import ListTemplate from '../../components/ListTemplate';
import useInfinitePopularPersons from '../../hooks/people/useInfinitePopularPersons';
import PopularPersonsItem from './PopularPersonsItem';

const PopularPersons: FC = () => {

    const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePopularPersons();
  
    return (
        <article>            
            <Category>인기 배우</Category>
            <ListTemplate isLast>
                {
                    data?.pages.map((page, i) => (
                        page.map((person, j, arr) => (
                            <PopularPersonsItem 
                                key={person.id}
                                person={person}
                                index={(i * 20) + (j + 1)}
                                fetchMore={() => hasNextPage && fetchNextPage()}
                                isLastItem={arr.length -1 === j}
                                isFetchingNextPage={isFetchingNextPage}
                            />
                        ))
                    ))
                }  
            </ListTemplate>
        </article>
    );
};

export default PopularPersons;