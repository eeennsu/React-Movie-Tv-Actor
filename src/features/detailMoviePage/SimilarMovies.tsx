import type { FC } from 'react';
import {  MovieListResponse } from '../../apis/types/movieTypes';
import ListTemplate from '../../components/ListTemplate';
import SubTitle from '../../components/SubTitle';
import Card2 from '../../components/Card/Card2';

interface Props {
    similarDatas?: MovieListResponse
}

const SimilarMovies: FC<Props> = ({ similarDatas }) => {

    return (
        <article className='p-2'>   
           <div className='my-10 border border-t-2'/>
            <SubTitle>비슷한 작품들</SubTitle>      
            <ListTemplate isLast>
                {
                    similarDatas?.results.map((movie) => (
                        <Card2 
                            key={movie.id} 
                            movie={movie}
                        />                          
                    ))
                }
            </ListTemplate>
        </article>
    );
};

export default SimilarMovies;