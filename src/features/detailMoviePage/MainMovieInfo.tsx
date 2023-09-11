import type { FC } from 'react';
import { formatterBudget, getRound, getXSImageUrl } from '../../utils/utils';
import { DetailMovie } from '../../apis/types/movieTypes';

interface Props {
    movieData?: DetailMovie
}

const MainMovieInfo: FC<Props> = ({ movieData }) => {

    return (
        <div className='grid mt-5 md:grid-cols-5'>
            <div className='w-48'>
                <img className='w-full' src={`${movieData?.poster_path && getXSImageUrl(movieData?.poster_path)}`} alt={`${movieData?.original_title} poster`}/>
            </div>              
            <div className='flex flex-col col-span-4'>     
                <section className="bg-white">
                    <div className="max-w-screen-xl px-1 py-4 mx-auto md:px-3 md:py-6 lg:px-4">
                        <div className="max-w-3xl p-10 mx-auto text-center">
                            <h2 className="text-3xl font-thin text-gray-900 md:text-4xl">
                                {movieData?.title}
                            </h2>
                            <p className="mt-4 text-gray-500 md:text-lg">
                                {movieData?.tagline}
                            </p>
                        </div>
                        <div className="mt-2 md:mt-3">
                            <dl className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        개봉일
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-3xl">
                                        {movieData?.release_date}
                                    </dd>                                                         
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        평점
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-3xl">
                                        {getRound(movieData?.vote_average as number)}
                                    </dd>                                                         
                                </div>

                                <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 text-center bg-blue-100 rounded-lg">
                                    <dt className="order-last text-lg font-medium text-gray-500">
                                        예산
                                    </dt>       
                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-3xl">
                                        {formatterBudget(movieData?.budget as number)}
                                    </dd>                                                         
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>               
            </div>  
        </div>
    );
};

export default MainMovieInfo;