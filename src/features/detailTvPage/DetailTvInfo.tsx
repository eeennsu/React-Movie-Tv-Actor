import type { FC } from 'react';
import { DetailTv, TvKeywordsResponse } from '../../apis/types/tvTypes';
import SubTitle from '../../components/SubTitle';
import NoneDataIcon from '../../components/Icons/NoneDataIcon';
import Divider from '../../components/Divider';

interface Props{
    tvData?: DetailTv;
    keywordsData?: TvKeywordsResponse['results'];
}

const DetailTvInfo: FC<Props> = ({ tvData, keywordsData }) => {

    return (
        <article>
            <Divider />
            <SubTitle>상세 정보</SubTitle>   
            <div className='flow-root text-center md:text-left'>
                <dl className='grid md:grid-cols-2 md:gap-x-7 text-md'>
                    <div className='grid grid-cols-1 gap-1 py-3 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Title
                        </dt>
                        <dd className='flex items-center text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {tvData?.original_name}
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            User Vote
                        </dt>
                        <dd className='flex items-center text-gray-700 dark:text-slate-100 md:col-span-2'>
                            {tvData?.popularity}
                        </dd>
                    </div>

                     <div className='grid grid-cols-1 gap-1 py-3 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4 '>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Overview
                        </dt>
                        <dd className='flex items-center text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {tvData?.overview || <NoneDataIcon />}
                        </dd>
                    </div>               

                    <div className='grid grid-cols-1 gap-1 py-3 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4 '>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Genre
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100'>
                            <div className='flex flex-wrap'>
                                {
                                    tvData?.genres.map((genre, i, arr) => (
                                        <span key={genre.id}>
                                            {genre.name}{(arr.length !== i + 1) && ' / '}
                                        </span>
                                    ))
                                }
                            </div>
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4 '>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Keyword
                        </dt>
                        <dd className='flex items-center h-full text-gray-700 md:col-span-2 dark:text-slate-100'>
                            <div className='flex flex-wrap'>
                                {
                                    keywordsData?.map((keyword, i, arr) => (
                                        <span key={keyword.id} className='m-1 badge-info badge-md badge'>
                                            {keyword.name}{(arr.length !== i + 1) && '  '}
                                        </span>
                                    ))
                                }
                            </div>
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4 '>
                        <dt className='flex items-center font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Country
                        </dt>
                        <dd className='flex items-center text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {tvData?.production_countries.at(0)?.name}
                        </dd>
                    </div>                   
                    <div className='grid grid-cols-1 gap-1 py-3 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4 '>
                        <dt className='font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            Type
                        </dt>
                        <dd className='text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {tvData?.type}
                        </dd>
                    </div>
                    <div className='grid grid-cols-1 gap-1 py-3 md:py-8 xl:py-10 border-b-1 md:grid-cols-3 md:gap-4'>
                        <dt className='font-bold text-gray-900 dark:text-red-200 md:font-semibold'>
                            State
                        </dt>
                        <dd className='text-gray-700 md:col-span-2 dark:text-slate-100'>
                            {tvData?.in_production ? 'Air' : 'Not Air'}
                        </dd>
                    </div>
                </dl>        
            </div>  
        </article>
    );
};

export default DetailTvInfo;