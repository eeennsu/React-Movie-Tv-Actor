import type { FC } from 'react';
import useUpcomingMovies from '../../../hooks/movie/useUpcomingMovies';
import Card1 from '../../../components/Card1';
import Category from '../../../components/Category';
import Slider from '../../../components/Slider';
//import { useState } from 'react';

const UpcomingMovies: FC = () => {

    const { data, error, isLoading } = useUpcomingMovies();

    return (
        <div>
            <Category>개봉 예정작</Category>
            <Slider>
                {
                    data?.results.map((movieInfo) => (
                        <Card1 
                            key={movieInfo.id}
                            movie={movieInfo}
                        />
                    ))
                }  
            </Slider> 
        </div>               
    );
};

export default UpcomingMovies;