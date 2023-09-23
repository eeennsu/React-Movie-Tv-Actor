import type { FC } from 'react';
import { DetailTv } from '../../apis/types/tvTypes';
import { getXSImageUrl } from '../../utils/utils';

interface Props{
    tvData?: DetailTv;
}

const MainTvInfo: FC<Props> = ({ tvData }) => {
    
    return (
        <article className='mt-5 lg:grid lg:grid-cols-5'>
            <section className='xs:flex lg:w-52'>
                <div className='flex justify-center w-full xs:block'>
                    <img className='w-2/3 xs:w-full' src={`${tvData?.poster_path && getXSImageUrl(tvData?.poster_path)}`} alt={`${tvData?.original_name} poster`}/>
                </div>                   
                <div className='flex flex-col items-center justify-center w-full px-4 mt-6 text-center xs:mt-0 lg:hidden gap-y-6'>
                    <h2 className="text-3xl font-thin text-gray-900 dark:text-slate-100">
                        {tvData?.name}
                    </h2>
                    {
                        tvData?.homepage && (
                            <p className='mt-4 text-gray-500 lg:text-lg hover:underline'>
                                <a href={tvData.homepage} target='_blank' rel='noreferrer noopener'>
                                    {tvData.homepage}
                                </a>
                            </p>                            
                        )                       
                    }              
                </div>   
            </section>              
            <section className='flex flex-col lg:col-span-4'>                
                <div className="max-w-screen-xl px-1 py-4 mx-auto lg:px-3 lg:py-6">
                    <div className="hidden max-w-3xl p-10 mx-auto text-center lg:block">
                        <h2 className="text-3xl font-thin text-gray-900 dark:text-slate-100 lg:text-4xl">
                            {tvData?.name}
                        </h2>
                        <p className="mt-4 text-gray-500 lg:text-lg hover:underline">
                            <a href={tvData?.homepage} rel='noreferrer noopener'>
                                {tvData?.homepage}
                            </a>                                
                        </p>
                    </div>                      
                    <div className="mt-2 lg:mt-3">
                        <dl className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg dark:bg-slate-600 lg:px-8 lg:py-6">
                                <dt className='order-last text-lg font-medium text-gray-500 dark:text-slate-100 lg:text-xl dark:text-slate-90000'>
                                    첫 방영일
                                </dt>       
                                <dd className='text-4xl font-extrabold text-blue-600 dark:text-blue-300 lg:text-3xl'>
                                    {tvData?.first_air_date}
                                </dd>                                                                                     
                            </div>

                            <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg dark:bg-slate-600 lg:px-8 lg:py-6">
                                <dt className='order-last text-lg font-medium text-gray-500 dark:text-slate-100 lg:text-xl dark:text-slate-90000'>
                                    마지막 방영일
                                </dt>       
                                <dd className='text-4xl font-extrabold text-blue-600 dark:text-blue-300 lg:text-3xl'>
                                    {tvData?.last_air_date}
                                </dd>                                                                                        
                            </div>

                            <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg dark:bg-slate-600 lg:px-8 lg:py-6">
                                <dt className='order-last text-lg font-medium text-gray-500 dark:text-slate-100 lg:text-xl dark:text-slate-90000'>
                                    에피소드 수
                                </dt>       
                                <dd className='text-4xl font-extrabold text-blue-600 dark:text-blue-300 lg:text-3xl'>
                                    {tvData?.number_of_episodes}
                                </dd>                                                                                        
                            </div>                            
                        </dl>
                    </div>
                </div>                          
            </section>  
        </article>
    );
};

export default MainTvInfo;