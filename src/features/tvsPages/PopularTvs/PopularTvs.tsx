import type { FC } from 'react';
import usePopularTvs from '../../../hooks/tv/usePopularTvs';
import Category from '../../../components/Category';
import Card1 from '../../../components/Card1';
import Slider from '../../../components/Slider';

const PopularTvs: FC = () => {

    const { data } = usePopularTvs();

    return (
        <div className='mt-5'>
            <Category>인기 방영작</Category>
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

export default PopularTvs;