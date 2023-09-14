import type { FC } from 'react';
import Category from '../../../components/Category';
import useAiringTodayTv from '../../../hooks/tv/useAiringTodayTvs';
import Card1 from '../../../components/Card1';
import Slider from '../../../components/Slider';

const AiringTodayTvs: FC = () => {

    const { data } = useAiringTodayTv();

    return (
        <article className='mt-5'>
            <Category>오늘 방영중</Category>            
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
        </article>        
    );
};

export default AiringTodayTvs;