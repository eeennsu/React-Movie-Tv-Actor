import type { FC } from 'react';
import { DetailTv, TvKeywordsResponse } from '../../apis/types/tvTypes';
import SubTitle from '../../components/SubTitle';

interface Props{
    tvData?: DetailTv;
    keywordsData?: TvKeywordsResponse['results'];
}

const DetailTvInfo: FC<Props> = ({ tvData, keywordsData }) => {

    return (
        <article>
            <div className='my-10 border border-t-2'/>
            <SubTitle>상세 정보</SubTitle>   
            <div className='flow-root'>
                <dl className='divide-y divide-gray-100 text-md'>
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>Title</dt>
                        <dd className='text-gray-700 md:col-span-2'>{tvData?.original_name}</dd>
                    </div>

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>User Vote</dt>
                        <dd className='text-gray-700 md:col-span-2'>{tvData?.popularity}</dd>
                    </div>                    

                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>Genre</dt>
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
                        <dt className='font-medium text-gray-900'>Country</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {tvData?.origin_country[0]}
                        </dd>
                    </div>                   
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>Type</dt>
                        <dd className='text-gray-700 md:col-span-2'>
                            {tvData?.type}
                        </dd>
                    </div>
                    <div className='grid grid-cols-1 gap-1 py-3 md:grid-cols-3 md:gap-4'>
                        <dt className='font-medium text-gray-900'>State</dt>
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