import type { FC } from 'react';
import { formatterBudget, getRound } from '../../utils/utils';
import type { DetailMovie, MovieKeywordsResponse } from '../../apis/types/movieTypes';
import type { Genre } from '../../apis/types/commonTypes';
import Category from '../../components/Category';
import SubTitle from '../../components/SubTitle';
//import { useState } from 'react';

interface Props {
    movieData?: DetailMovie;
    keywordsData?: MovieKeywordsResponse['keywords']
}

const DetailMovieInfo: FC<Props> = ({ movieData, keywordsData }) => {


    return (
        <article>             
            <div className='my-10 border border-t-2'/>
            <SubTitle>상세 정보</SubTitle>    
            <div className='flow-root'>
                <dl className='divide-y divide-gray-100 text-md'>
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>Title</dt>
                        <dd className='text-gray-700 md:col-span-2'>{movieData?.original_title}</dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>User Vote</dt>
                        <dd className='text-gray-700 md:col-span-2'>{movieData?.popularity}</dd>
                    </div>                    

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>Genre</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {
                                movieData?.genres.map((genre, i, arr) => (
                                    <span key={genre.id}>
                                        {genre.name}{(arr.length !== i + 1) && ' / '}
                                    </span>
                                ))
                            }
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>Keyword</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {
                                keywordsData?.map((keyword, i, arr) => (
                                    <span key={keyword.id}>
                                        {keyword.name}{(arr.length !== i + 1) && ' / '}
                                    </span>
                                ))
                            }
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>Companies</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {
                                movieData?.production_companies.map((company, i, arr) => (
                                    <span key={company.id}>
                                        {company.name}{(arr.length !== i + 1) && ' / '}
                                    </span>
                                ))
                            }
                        </dd>
                    </div>                   
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>Overview</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {movieData?.overview}
                        </dd>
                    </div>
                </dl>
            </div>       
        </article>
    );
};

export default DetailMovieInfo;