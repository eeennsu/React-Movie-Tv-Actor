import type { FC } from 'react';
import useNowPlayingMovie from '../../../hooks/movie/useNowPlayingMovies';
import Category from '../../../components/Category';
import Slider from '../../../components/Slider';
import Card1 from '../../../components/Card1';

const NowPlayingMovies: FC = () => {

    const { data, isLoading } = useNowPlayingMovie();

    return (
        <div>
            <Category>현재 상영작</Category>
            <Slider>
                {
                    data?.results.map((movieInfo) => (
                        <Card1 
                            key={movieInfo.id}
                            movie={movieInfo}
                        />
                    ))
                }  
            </Slider>         
        </div>       
    );
};

export default NowPlayingMovies;