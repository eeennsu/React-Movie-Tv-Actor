import type { FC } from 'react';
import { moneyFormatter, getRound, getXSImageUrl } from '../../utils/utils';
import { DetailMovie } from '../../apis/types/movieTypes';

interface Props {
    movieData?: DetailMovie
}

const MainMovieInfo: FC<Props> = ({ movieData }) => {

    return (
        <article className='mt-5 lg:grid lg:grid-cols-5'>
            <section className='xs:flex lg:w-52'>
                <div className='flex justify-center w-full xs:block'>
                    <img className='w-2/3 xs:w-full' src={`${movieData?.poster_path && getXSImageUrl(movieData?.poster_path)}`} alt={`${movieData?.original_title} poster`}/>
                </div>               
                <div className='flex flex-col items-center justify-center w-full px-4 mt-6 text-center xs:mt-0 lg:hidden gap-y-6'>
                    <h2 className='text-3xl font-thin text-gray-900 dark:text-slate-100'>
                        {movieData?.title}
                    </h2>
                    <p className='mt-0 text-gray-500 md:mt-4 md:text-3xl'>
                        {movieData?.tagline}
                    </p>
                </div>   
            </section>              
            <section className='flex flex-col lg:col-span-4'>    
                <div className='px-1 py-4 mx-auto lg:px-3 lg:py-6'>
                    <div className='hidden max-w-3xl p-10 mx-auto text-center lg:block'>
                        <h2 className='text-3xl font-thin text-gray-900 dark:text-slate-100 lg:text-4xl'>
                            {movieData?.title}
                        </h2>
                        <p className='mt-4 text-gray-500 lg:text-lg'>
                            {movieData?.tagline}
                        </p>
                    </div>                      
                    <div className='mt-2 lg:mt-3'>
                        <dl className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                            <div className='flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg dark:bg-slate-600 lg:px-8 lg:py-6'>
                                <dt className='order-last text-lg font-medium text-gray-500 dark:text-slate-100 lg:text-xl dark:text-slate-90000'>
                                    개봉일
                                </dt>       
                                <dd className='text-4xl font-extrabold text-blue-600 dark:text-blue-300 lg:text-3xl'>
                                    {movieData?.release_date}
                                </dd>                                                         
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg dark:bg-slate-600 lg:px-8 lg:py-6'>
                                <dt className='order-last text-lg font-medium text-gray-500 dark:text-slate-100 lg:text-xl dark:text-slate-90000'>
                                    평점
                                </dt>       
                                <dd className='text-4xl font-extrabold text-blue-600 dark:text-blue-300 lg:text-3xl'>
                                    {getRound(movieData?.vote_average as number)}
                                </dd>                                                         
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg dark:bg-slate-600 lg:px-8 lg:py-6'>
                                <dt className='order-last text-lg font-medium text-gray-500 dark:text-slate-100 lg:text-xl dark:text-slate-90000'>
                                    예산
                                </dt>       
                                <dd className='text-4xl font-extrabold text-blue-600 dark:text-blue-300 lg:text-3xl'>
                                    {moneyFormatter(movieData?.budget as number)}
                                </dd>                                                         
                            </div>
                        </dl>
                    </div>
                </div>            
            </section>  
        </article>
    );
};

export default MainMovieInfo;