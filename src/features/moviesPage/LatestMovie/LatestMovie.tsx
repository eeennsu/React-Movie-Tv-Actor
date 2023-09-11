import type { FC } from 'react';
import LatestContent from '../../../components/LatestContent';
import usePopularMovies from '../../../hooks/movie/usePopularMovies';

const LatestMovie: FC = () => {

    const { data, error, isLoading } = usePopularMovies();

    return (
        <LatestContent movieData={data?.results[0]} />
    );
};

export default LatestMovie;