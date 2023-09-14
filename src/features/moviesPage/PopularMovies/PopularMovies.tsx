import type { FC } from 'react';
import usePopularMovie from '../../../hooks/movie/usePopularMovies';
import Category from '../../../components/Category';
import Slider from '../../../components/Slider';
import Card1 from '../../../components/Card1';

const PopularMovies: FC = () => {

    const { data, error, isLoading } = usePopularMovie();

    return (
        <article>
            <Category>인기 개봉작</Category>
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
        </article>        
    );
};

export default PopularMovies;