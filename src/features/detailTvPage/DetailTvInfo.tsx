import type { FC } from 'react';
import { DetailTv, TvKeywordsResponse } from '../../apis/types/tvTypes';
import SubTitle from '../../components/SubTitle';
import NoneDataIcon from '../../components/Icons/NoneDataIcon';

interface Props{
    tvData?: DetailTv;
    keywordsData?: TvKeywordsResponse['results'];
}

const DetailTvInfo: FC<Props> = ({ tvData, keywordsData }) => {

    return (
        <article>
            <div className='my-10 border border-t-2'/>
            <SubTitle>상세 정보</SubTitle>   
            <div className='flow-root text-center md:text-left'>
                <dl className='grid grid-cols-2 divide-y divide-gray-100 text-md md:gap-x-7'>
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 '>
                        <dt className='font-bold text-gray-900 md:font-semibold'>Title</dt>
                        <dd className='text-gray-700 md:col-span-2'>{tvData?.original_name}</dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 '>
                        <dt className='font-bold text-gray-900 md:font-semibold'>User Vote</dt>
                        <dd className='text-gray-700 md:col-span-2'>{tvData?.popularity}</dd>
                    </div>          

                     <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 '>
                        <dt className='font-bold text-gray-900 md:font-semibold'>Overview</dt>
                        <dd className='text-gray-700 md:col-span-2'>{tvData?.overview || <NoneDataIcon />}</dd>
                    </div>               

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 '>
                        <dt className='font-bold text-gray-900 md:font-semibold'>Genre</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {
                                tvData?.genres.map((genre, i, arr) => (
                                    <span key={genre.id}>
                                        {genre.name}{(arr.length !== i + 1) && ' / '}
                                    </span>
                                ))
                            }
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 '>
                        <dt className='font-bold text-gray-900 md:font-semibold'>Keyword</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {
                                keywordsData?.map((keyword, i, arr) => (
                                    <span key={keyword.id} className='m-1 badge-info badge-md badge'>
                                        {keyword.name}{(arr.length !== i + 1) && '  '}
                                    </span>
                                ))
                            }
                        </dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 '>
                        <dt className='font-bold text-gray-900 md:font-semibold'>Country</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {tvData?.production_countries.at(0)?.name}
                        </dd>
                    </div>                   
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 '>
                        <dt className='font-bold text-gray-900 md:font-semibold'>Type</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {tvData?.type}
                        </dd>
                    </div>
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 '>
                        <dt className='font-bold text-gray-900 md:font-semibold'>State</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {tvData?.in_production ? 'Air' : 'Not Air'}
                        </dd>
                    </div>
                </dl>        
            </div>  
        </article>
    );
};

export default DetailTvInfo;