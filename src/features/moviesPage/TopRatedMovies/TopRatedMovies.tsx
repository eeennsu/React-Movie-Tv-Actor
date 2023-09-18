import type { FC } from 'react';
import Category from '../../../components/Category';
import useTopRatedMovies from '../../../hooks/movie/useTopRatedMovies';
import Card1 from '../../../components/Card/Card1';
import Slider from '../../../components/Slider';
import MediaSkeleton from '../../../components/Skeleton/MediaSkeleton';

const TopRatedMovies: FC = () => {

    const { data, isLoading } = useTopRatedMovies();

    return (
        <article>
            <Category>상위 평점작</Category>
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

export default TopRatedMovies;