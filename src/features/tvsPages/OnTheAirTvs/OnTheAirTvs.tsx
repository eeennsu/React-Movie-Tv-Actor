import type { FC } from 'react';
import Category from '../../../components/Category';
import useOnTheAirTvs from '../../../hooks/tv/useOnTheAirTvs';
import Card1 from '../../../components/Card/Card1';
import Slider from '../../../components/Slider';
import MediaSkeleton from '../../../components/Skeleton/MediaSkeleton';
//import { useState } from 'react';

const OnTheAirTvs: FC = () => {

    const { data, isLoading } = useOnTheAirTvs();

    return (
        <article className='mt-5'>
            <Category>방영 예정작</Category>
            <Slider>
                {
                    isLoading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <MediaSkeleton key={i}/>
                        ))
                    ) : (
                        data?.results.map((tv) => (
                            <Card1 
                                key={tv.id}
                                tv={tv}
                            />
                        ))
                    )  
                }  
            </Slider> 
        </article>  
    );
};

export default OnTheAirTvs;