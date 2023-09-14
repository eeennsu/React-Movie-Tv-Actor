import type { FC } from 'react';
import { DetailTv } from '../../apis/types/tvTypes';
import { getMImageUrl } from '../../utils/utils';

interface Props{
    tvData?: DetailTv;
}

const MainTvInfo: FC<Props> = ({ tvData }) => {
    
    return (
        <article className='grid mt-5 md:grid-cols-5'>
            <div className='w-48'>
                <img className='w-full' src={`${tvData?.poster_path && getMImageUrl(tvData?.poster_path)}`} alt={`${tvData?.name} poster`} />
            </div>
            <div className='flex flex-col items-center justify-center col-span-4'>
                <div className="p-10">
                    <div className="max-w-screen-xl px-1 py-4 mx-auto md:px-3 md:py-6 lg:px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-thin text-gray-900 md:text-4xl">
                                {tvData?.name}
                            </h2>                       
                        </div>
                        <div className="mt-4 md:mt-6">
                            <dl className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        첫 방영일
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-3xl">
                                        {tvData?.first_air_date}
                                    </dd>                                                         
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        마지막 방영일
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-3xl">
                                        {tvData?.last_air_date}
                                    </dd>                                                         
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        에피소드 수
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-3xl">
                                        {tvData?.number_of_episodes}
                                    </dd>                                                         
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>        
            </div>
        </article>
    );
};

export default MainTvInfo;