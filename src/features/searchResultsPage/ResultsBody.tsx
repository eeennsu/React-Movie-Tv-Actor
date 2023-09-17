import type { FC } from 'react';
import { useEffect } from 'react';
import useSearchSelectStore from '../../zustand/search/useSearchSelectStore';
import useSerachResultStore from '../../zustand/search/useSerachResultStore';
import ListTemplate from '../../components/ListTemplate';
import { LeastMovieInfo } from '../../apis/types/movieTypes'
import { LeastTvInfo } from '../../apis/types/tvTypes';
import { DetailPerson } from '../../apis/types/personTypes';
import Empty from '../../components/Empty';
import { useIsFetching } from '@tanstack/react-query';
import useSearchAutoListStore from '../../zustand/search/useSearchAutoListStore';
import Card1 from '../../components/Card/Card1';
import AvatarSkeleton from '../../components/Skeleton/AvatarSkeleton';

const ResultsBody: FC = () => {

    const { select } = useSearchSelectStore();
    const { results: movies } = useSerachResultStore() as { results: LeastMovieInfo[] };
    const { results: tvs } = useSerachResultStore() as { results: LeastTvInfo[] };
    const { results: persons } = useSerachResultStore() as { results: DetailPerson[] };
    const { setVisible } = useSearchAutoListStore();
    
    const fetchingCount = useIsFetching();
   
    // 패칭이 완료될 때마다 자동완성 창 숨기기
    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (!fetchingCount && (movies || tvs || persons)) {
            timerId = setTimeout(() => {
                setVisible(false);
            }, 2000);
        }

        return () => clearTimeout(timerId)
    }, [fetchingCount, movies, tvs, persons, setVisible]);
    
    return (
        <article className='p-4 rounded-md shadow-2xl bg-white/80'>           
            {
                fetchingCount ? (
                    <ListTemplate isLast>
                        {
                            Array.from({ length: 10 }).map((_, i) => (
                                <AvatarSkeleton key={i}/>
                            ))
                        }
                    </ListTemplate>
                ) : (
                    select === 'movie' ? !!movies?.length ? (
                        <ListTemplate isLast>
                            {
                                movies?.map((movie) => (
                                    <Card1 
                                        key={movie.id}
                                        movie={movie}
                                    />
                                ))
                            }
                        </ListTemplate> 
                    ) : (
                        <Empty />              
                    ) : select === 'tv' ? !!tvs?.length ? (
                        <ListTemplate isLast>
                            {
                                    tvs?.map((tv) => (
                                    <Card1 
                                        key={tv.id}
                                        tv={tv}
                                    />
                                ))
                            }                      
                        </ListTemplate>                        
                    ) : (
                        <Empty />
                    ) : !!persons?.length ? (
                        <ListTemplate isLast>
                            {
                                persons?.map((person) => (                        
                                    <Card1 
                                        key={person.id}
                                        person={person}
                                    />                 
                                ))
                            }
                        </ListTemplate>  
                    ) : (
                        <Empty />  
                    )
                )
            }      
        </article>
    );
};

export default ResultsBody;