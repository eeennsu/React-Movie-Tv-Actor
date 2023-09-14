import type { FC } from 'react';
import useNowPlayingMovie from '../../../hooks/movie/useNowPlayingMovies';
import Category from '../../../components/Category';
import Slider from '../../../components/Slider';
import Card1 from '../../../components/Card/Card1';
import MediaSkeleton from '../../../components/Skeleton/MediaSkeleton';

const NowPlayingMovies: FC = () => {

    const { data, isLoading } = useNowPlayingMovie();

    return (
        <article>
            <Category>현재 상영작</Category>
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

export default NowPlayingMovies;