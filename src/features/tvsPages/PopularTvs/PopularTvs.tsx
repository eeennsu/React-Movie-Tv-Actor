import type { FC } from 'react';
import usePopularTvs from '../../../hooks/tv/usePopularTvs';
import Category from '../../../components/Category';
import Card1 from '../../../components/Card/Card1';
import Slider from '../../../components/Slider';
import MediaSkeleton from '../../../components/Skeleton/MediaSkeleton';

const PopularTvs: FC = () => {

    const { data, isLoading } = usePopularTvs();

    return (
        <article className='mt-5'>
            <Category>인기 방영작</Category>
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

export default PopularTvs;