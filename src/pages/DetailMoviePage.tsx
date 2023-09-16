import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import useDetailMovie from '../hooks/movie/useDetailMovie';
import useSimilarMovie from '../hooks/movie/useSimilarMovies';
import MovieBackdrop from '../features/detailMoviePage/MovieBackdrop';
import MainMovieInfo from '../features/detailMoviePage/MainMovieInfo';
import DetailInfo from '../features/detailMoviePage/DetailMovieInfo';
import Actors from '../features/detailMoviePage/Actors';
import SimilarMovies from '../features/detailMoviePage/SimilarMovies';
import useKeywordsMovie from '../hooks/movie/useKeywordsMovie';
import useActors from '../hooks/movie/useActors';
import { useIsFetching } from '@tanstack/react-query';
import { Spin } from 'antd';

const DetailMoviePage: FC = () => {

    const { id } = useParams();
    const { data: movieData } = useDetailMovie(id as string);
    const { data: similarDatas } = useSimilarMovie(id as string);
    const { data: keywordsData } = useKeywordsMovie(id as string);
    const { data: actorsData } = useActors(id as string);
    const isLoading = useIsFetching();

    return (
        isLoading ? (
            <div className='flex items-center justify-center h-132'>
                <Spin size='large'/>         
            </div>  
        ) : (
            <div>
                <MovieBackdrop backdrop_path={movieData?.backdrop_path} />

                <MainMovieInfo movieData={movieData} />          
                    
                <DetailInfo movieData={movieData} keywordsData={keywordsData?.keywords} />

                <Actors actorsData={actorsData} />
                
                <SimilarMovies similarDatas={similarDatas} />                      
            </div>        
        )
    );  
};

export default DetailMoviePage;