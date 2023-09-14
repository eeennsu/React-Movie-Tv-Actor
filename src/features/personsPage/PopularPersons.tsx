import type { FC } from 'react';
import Category from '../../components/Category';
import ListTemplate from '../../components/ListTemplate';
import useInfinitePopularPersons from '../../hooks/people/useInfinitePopularPersons';
import AvatarSkeleton from '../../components/Skeleton/AvatarSkeleton';
import PopularPersonsItem from './PopularPersonsItem';
import { Spin } from 'antd';

const PopularPersons: FC = () => {

    const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePopularPersons();
  
    return (
        <article>            
            <Category>인기 배우</Category>
            <ListTemplate isLast>
                {
                    isLoading ? (
                        Array.from({ length: 10 }).map((_, i) => (
                            <AvatarSkeleton key={i} />
                        ))
                    ) : (
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
                    )
                }               
            </ListTemplate>
            {
                isFetchingNextPage && (
                    <div className='flex items-center justify-center w-full my-36'>
                        <Spin size='large'/>
                    </div>
                )
            }
        </article>
    );
};

export default PopularPersons;