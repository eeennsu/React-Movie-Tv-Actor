import type { FC } from 'react';
import { DetailTv } from '../../apis/types/tvTypes';
import { getXSImageUrl } from '../../utils/utils';
import InfoBox from '../../components/InfoBox';

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
            <section className='flex w-full px-1 py-4 mx-auto lg:col-span-4 lg:px-3 lg:py-6'>                
                <div className="w-full px-1 py-4 mx-auto md:w-auto lg:px-3 lg:py-6">
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
                    <dl className="grid grid-cols-1 gap-4 mt-7 lg:mt-4 lg:grid-cols-3">
                        <InfoBox topic='첫 방영일' description={tvData?.first_air_date}/>
                        <InfoBox topic='마지막 방영일' description={tvData?.last_air_date}/>
                        <InfoBox topic='에피소드 수' description={tvData?.number_of_episodes}/>                                                
                    </dl>             
                </div>                          
            </section>  
        </article>
    );
};

export default MainTvInfo;