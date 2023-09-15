import type { FC } from 'react';
import { formatterBudget, getRound, getXSImageUrl } from '../../utils/utils';
import { DetailMovie } from '../../apis/types/movieTypes';

interface Props {
    movieData?: DetailMovie
}

const MainMovieInfo: FC<Props> = ({ movieData }) => {

    return (
        <article className='mt-5 lg:grid lg:grid-cols-5'>
            <div className='flex lg:w-52'>
                <img className='w-2/5 xs:w-2/3 lg:w-full' src={`${movieData?.poster_path && getXSImageUrl(movieData?.poster_path)}`} alt={`${movieData?.original_title} poster`}/>
                <div className='flex flex-col items-center justify-center w-full px-4 text-center lg:hidden gap-y-6'>
                    <h2 className="text-3xl font-thin text-gray-900">
                        {movieData?.title}
                    </h2>
                    <p className="mt-4 text-gray-500 lg:text-lg">
                        {movieData?.tagline}
                    </p>
                </div>   
            </div>              
            <div className='flex flex-col lg:col-span-4'>     
                <section className="bg-white">
                    <div className="max-w-screen-xl px-1 py-4 mx-auto lg:px-3 lg:py-6">
                        <div className="hidden max-w-3xl p-10 mx-auto text-center lg:block">
                            <h2 className="text-3xl font-thin text-gray-900 lg:text-4xl">
                                {movieData?.title}
                            </h2>
                            <p className="mt-4 text-gray-500 lg:text-lg">
                                {movieData?.tagline}
                            </p>
                        </div>                      
                        <div className="mt-2 lg:mt-3">
                            <dl className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        개봉일
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 lg:text-3xl">
                                        {movieData?.release_date}
                                    </dd>                                                         
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        평점
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 lg:text-3xl">
                                        {getRound(movieData?.vote_average as number)}
                                    </dd>                                                         
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        예산
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 lg:text-3xl">
                                        {formatterBudget(movieData?.budget as number)}
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

export default MainMovieInfo;