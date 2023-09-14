import type { FC } from 'react';
import usePopularMovie from '../../../hooks/movie/usePopularMovies';
import Category from '../../../components/Category';
import Slider from '../../../components/Slider';
import Card1 from '../../../components/Card/Card1';
import MediaSkeleton from '../../../components/Skeleton/MediaSkeleton';

const PopularMovies: FC = () => {

    const { data, error, isLoading } = usePopularMovie();

    return (
        <article>
            <Category>인기 개봉작</Category>
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

export default PopularMovies;