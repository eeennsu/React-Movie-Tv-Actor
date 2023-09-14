import type { FC } from 'react';
import useUpcomingMovies from '../../../hooks/movie/useUpcomingMovies';
import Card1 from '../../../components/Card/Card1';
import Category from '../../../components/Category';
import Slider from '../../../components/Slider';
import MediaSkeleton from '../../../components/Skeleton/MediaSkeleton';
//import { useState } from 'react';

const UpcomingMovies: FC = () => {

    const { data, error, isLoading } = useUpcomingMovies();

    return (
        <article>
            <Category>개봉 예정작</Category>
            <Slider>
                {
                    isLoading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <MediaSkeleton key={i} />
                        ))
                    ) : (
                        data?.results.map((movie) => (
                            <Card1 
                                key={movie.id}
                                movie={movie}
                            />
                        ))
                    )  
                }  
            </Slider> 
        </article>               
    );
};

export default UpcomingMovies;