import type { FC } from 'react';
import Category from '../../../components/Category';
import useTopRatedMovies from '../../../hooks/movie/useTopRatedMovies';
import Card1 from '../../../components/Card1';
import Slider from '../../../components/Slider';

const TopRatedMovies: FC = () => {

    const { data, error, isLoading } = useTopRatedMovies();

    return (
        <article>
            <Category>상위 평점작</Category>
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

export default TopRatedMovies;