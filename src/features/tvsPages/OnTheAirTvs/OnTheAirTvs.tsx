import type { FC } from 'react';
import Category from '../../../components/Category';
import useOnTheAirTvs from '../../../hooks/tv/useOnTheAirTvs';
import Card1 from '../../../components/Card1';
import Slider from '../../../components/Slider';
//import { useState } from 'react';

const OnTheAirTvs: FC = () => {

    const { data } = useOnTheAirTvs();

    return (
        <div className='mt-5'>
            <Category>방영 예정작</Category>
            <Slider>
                {
                    data?.results.map((tv) => (
                        <Card1 
                            key={tv.id}
                            tv={tv}
                        />
                    ))
                }  
            </Slider> 
        </div>  
    );
};

export default OnTheAirTvs;