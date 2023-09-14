import type { FC } from 'react';
import Category from '../../../components/Category';
import useTopRatedTvs from '../../../hooks/tv/useTopRatedTvs';
import Card1 from '../../../components/Card1';
import Slider from '../../../components/Slider';

const TopRatedTv: FC = () => {

    const { data } = useTopRatedTvs();

    return (
        <article className='mt-5'>
            <Category>상위 평점작</Category>
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

export default TopRatedTv;