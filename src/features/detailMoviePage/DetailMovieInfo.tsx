import type { FC } from 'react';
import { moneyFormatter, runTimeFormatter } from '../../utils/utils';
import type { DetailMovie, MovieKeywordsResponse } from '../../apis/types/movieTypes';
import SubTitle from '../../components/SubTitle';
import NoneDataIcon from '../../components/Icons/NoneDataIcon';
import Divider from '../../components/Divider';
//import { useState } from 'react';

interface Props {
    movieData?: DetailMovie;
    keywordsData?: MovieKeywordsResponse['keywords']
}

const DetailMovieInfo: FC<Props> = ({ movieData, keywordsData }) => {

    return (
        <article>             
            <Divider />
            <SubTitle>상세 정보</SubTitle>
            <div className='flow-root text-center md:text-left'>
                <dl className='grid md:grid-cols-2 md:gap-x-7 text-md'>
                    <div className='grid grid-cols-1 gap-1 py-5 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Title
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {movieData?.original_title}
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-5 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            User Vote
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {movieData?.popularity}
                        </dd>
                    </div>     

                    <div className='grid grid-cols-1 gap-1 py-5 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Overview
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100 '>
                            {movieData?.overview || <NoneDataIcon />}                  
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-5 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Genre
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100'>
                            <div className='flex flex-wrap'>
                                {
                                    movieData?.genres.map((genre, i, arr) => (
                                        <span key={genre.id}>
                                            {genre.name}{(arr.length !== i + 1) && ' / '}
                                        </span>
                                    ))
                                }
                            </div>
                        </dd>
                    </div>              

                    <div className='grid grid-cols-1 gap-1 py-5 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Keyword
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100'>
                            <div className='flex flex-wrap'>
                                {   
                                    keywordsData?.map((keyword, i, arr) => (
                                        <span key={keyword.id} className='m-1 badge-outline badge-md badge'>
                                            {keyword.name}{(arr.length !== i + 1) && '  '}
                                        </span>
                                    ))
                                }     
                            </div>                  
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-5 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Companies
                        </dt>
                        <dd className='flex items-center text-gray-700 md:col-span-2 dark:text-slate-100'>
                            <div className='flex flex-wrap'>
                                {
                                    movieData?.production_companies.map((company, i, arr) => (
                                        <span key={company.id}>
                                            {company.name}{(arr.length !== i + 1) && ' / '}
                                        </span>
                                    ))
                                }      
                            </div>                    
                        </dd>
                    </div>   

                    <div className='grid grid-cols-1 gap-1 py-5 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            RunTime
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {runTimeFormatter(movieData?.runtime as number) || <NoneDataIcon />}                          
                        </dd>
                    </div>      

                    <div className='grid grid-cols-1 gap-1 py-5 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Revenue
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {moneyFormatter(movieData?.revenue as number) || <NoneDataIcon />}
                        </dd>
                    </div>   
                </dl>
            </div>       
        </article>
    );
};

export default DetailMovieInfo;