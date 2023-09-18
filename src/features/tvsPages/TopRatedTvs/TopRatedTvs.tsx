import type { FC } from 'react';
import Category from '../../../components/Category';
import useTopRatedTvs from '../../../hooks/tv/useTopRatedTvs';
import Card1 from '../../../components/Card/Card1';
import Slider from '../../../components/Slider';
import MediaSkeleton from '../../../components/Skeleton/MediaSkeleton';

const TopRatedTv: FC = () => {

    const { data, isLoading } = useTopRatedTvs();

    return (
        <article className='mt-5'>
            <Category>상위 평점작</Category>
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

export default TopRatedTv;