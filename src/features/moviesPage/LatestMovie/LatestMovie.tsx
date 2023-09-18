import type { FC } from 'react';
import LatestContent from '../../../components/LatestContent';
import usePopularMovies from '../../../hooks/movie/usePopularMovies';
import LatestSkeleton from '../../../components/Skeleton/LatestSkeleton';

const LatestMovie: FC = () => {

    const { data, error, isLoading } = usePopularMovies();

    if (error) {
        return (<div>error</div>)
    }

    return (
        isLoading ? (
            <LatestSkeleton />
        ) : (
            <LatestContent movieData={data?.results?.at(0)} />     
        )        
    );
};

export default LatestMovie;