import type { FC } from 'react';
import { DetailTv } from '../../apis/types/tvTypes';
import { getMImageUrl, getXSImageUrl } from '../../utils/utils';

interface Props{
    tvData?: DetailTv;
}

const MainTvInfo: FC<Props> = ({ tvData }) => {
    
    return (
        <article className='mt-5 lg:grid lg:grid-cols-5'>
            <div className='flex lg:w-52'>
                <img className='w-2/5 xs:w-2/3 lg:w-full' src={`${tvData?.poster_path && getXSImageUrl(tvData?.poster_path)}`} alt={`${tvData?.original_name} poster`}/>
                <div className='flex flex-col items-center justify-center w-full px-4 text-center lg:hidden gap-y-6'>
                    <h2 className="text-3xl font-thin text-gray-900">
                        {tvData?.original_name}
                    </h2>
                    {
                        tvData?.hompage && (
                            <p className='mt-4 text-gray-500 lg:text-lg'>
                                homepage - {tvData.hompage}
                            </p>
                        )
                    }              
                </div>   
            </div>              
            <div className='flex flex-col lg:col-span-4'>     
                <section className="bg-white">
                    <div className="max-w-screen-xl px-1 py-4 mx-auto lg:px-3 lg:py-6">
                        <div className="hidden max-w-3xl p-10 mx-auto text-center lg:block">
                            <h2 className="text-3xl font-thin text-gray-900 lg:text-4xl">
                                {tvData?.original_name}
                            </h2>
                            <p className="mt-4 text-gray-500 lg:text-lg">
                                {tvData?.origin_country}
                            </p>
                        </div>                      
                        <div className="mt-2 lg:mt-3">
                            <dl className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        첫 방영일
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 lg:text-3xl">
                                        {tvData?.last_air_date}
                                    </dd>                                                         
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        마지막 방영일
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 lg:text-3xl">
                                        {tvData?.last_air_date}
                                    </dd>                                                         
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        에피소드 수
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 lg:text-3xl">
                                        {tvData?.number_of_episodes}
                                    </dd>                                                         
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>               
            </div>  
        </article>
    );
};

export default MainTvInfo;