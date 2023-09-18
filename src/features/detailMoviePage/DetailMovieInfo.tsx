import type { FC } from 'react';
import { moneyFormatter, runTimeFormatter } from '../../utils/utils';
import type { DetailMovie, MovieKeywordsResponse } from '../../apis/types/movieTypes';
import SubTitle from '../../components/SubTitle';
import NoneDataIcon from '../../components/Icons/NoneDataIcon';
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
            <div className='flow-root text-center md:text-left'>
                <dl className='grid grid-cols-2 divide-y divide-gray-100 md:gap-x-7 text-md'>
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-bold text-gray-900 md:font-semibold'>
                            Title
                        </dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {movieData?.original_title}
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-bold text-gray-900 md:font-semibold'>
                            User Vote
                        </dt>
                        <dd className='text-gray-700 md:col-span-2 '>
                            {movieData?.popularity}
                        </dd>
                    </div>     

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-bold text-gray-900 md:font-semibold'>
                            Overview
                        </dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {movieData?.overview || <NoneDataIcon />}
                        </dd>
                    </div>               

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-bold text-gray-900 md:font-semibold'>
                            Genre
                        </dt>
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
                        <dt className='font-bold text-gray-900 md:font-semibold'>
                            Keyword
                        </dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {
                                keywordsData?.map((keyword, i, arr) => (
                                    <span key={keyword.id} className='m-1 badge-outline badge-md badge'>
                                        {keyword.name}{(arr.length !== i + 1) && '  '}
                                    </span>
                                ))
                            }
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-bold text-gray-900 md:font-semibold'>
                            Companies
                        </dt>
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
                        <dt className='font-bold text-gray-900 md:font-semibold'>
                            RunTime
                        </dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {runTimeFormatter(movieData?.runtime as number) || <NoneDataIcon />}
                        </dd>
                    </div>      

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-bold text-gray-900 md:font-semibold'>
                            Revenue
                        </dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {moneyFormatter(movieData?.revenue as number) || <NoneDataIcon />}
                        </dd>
                    </div>   
                </dl>
            </div>       
        </article>
    );
};

export default DetailMovieInfo;