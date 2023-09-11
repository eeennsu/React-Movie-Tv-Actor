import type { FC } from 'react';
import LatestMovie from '../features/moviesPage/LatestMovie/LatestMovie';
import NowPlayingMovies from '../features/moviesPage/NowPlayingMovies/NowPlayingMovies';
import TopRatedMovies from '../features/moviesPage/TopRatedMovies/TopRatedMovies';
import UpcomingMovies from '../features/moviesPage/UpcomingMovies/UpcomingMovies';
import PopularMovies from '../features/moviesPage/PopularMovies/PopularMovies';

const MoviesPage: FC = () => {

    return (
        <div className='space-y-20'>
            <LatestMovie />            
            <PopularMovies />
            <NowPlayingMovies />
            <UpcomingMovies />
            <TopRatedMovies />            
        </div>
    );
};

export default MoviesPage;