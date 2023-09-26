import type { FC } from 'react';
import { moneyFormatter, getRound, getXSImageUrl } from '../../utils/utils';
import { DetailMovie } from '../../apis/types/movieTypes';
import InfoBox from '../../components/InfoBox';

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
            <section className='flex w-full px-1 py-4 mx-auto lg:col-span-4 lg:px-3 lg:py-6'>    
                <div className='w-full px-1 py-4 mx-auto md:w-auto lg:px-3 lg:py-6'>
                    <div className='hidden max-w-3xl p-10 mx-auto text-center lg:block'>
                        <h2 className='text-3xl font-thin text-gray-900 dark:text-slate-100 lg:text-4xl'>
                            {movieData?.title}
                        </h2>
                        <p className='mt-4 text-gray-500 lg:text-lg'>
                            {movieData?.tagline}
                        </p>
                    </div>         
                    <dl className='grid grid-cols-1 gap-4 mt-7 lg:mt-4 lg:grid-cols-3'>
                        <InfoBox topic='개봉일' description={movieData?.release_date}/>
                        <InfoBox topic='평점' description={getRound(movieData?.vote_average as number)}/>
                        <InfoBox topic='예산' description={moneyFormatter(movieData?.budget as number)}/>                         
                    </dl>             
                </div>            
            </section>  
        </article>
    );
};

export default MainMovieInfo;