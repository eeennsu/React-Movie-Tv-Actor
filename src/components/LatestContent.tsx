import type { FC } from 'react';
import { getLImageUrl } from '../utils/utils';
import { DetailMovie } from '../apis/types/movieTypes';
import { LatestTvInfo } from '../apis/types/tvTypes';

interface Props {
    movieData?: DetailMovie;
    tvData?: LatestTvInfo;
}

const LatestContent: FC<Props> = ({ movieData, tvData }) => {
    
    return (
        <article className='relative flex flex-col w-full shadow-2xl h-96 rounded-2xl'>
            <section className='absolute w-full h-96'>   
                { 
                    (tvData && tvData.backdrop_path) ? (
                        <img src={getLImageUrl(tvData.backdrop_path)} className='object-cover w-full h-full rounded-2xl' alt='lateset movei logo'/>
                    ) : ( movieData && movieData.backdrop_path ) ? (
                        <img src={getLImageUrl(movieData.backdrop_path)} className='object-cover w-full h-full rounded-2xl' alt='lateset movei logo'/>
                    ) : (
                        <img className='object-cover w-full h-full rounded-2xl' src={`${import.meta.env.BASE_URL}/images/basic.jpg`} alt="basic" />
                    )
                }                      
            </section>            
            <section className='relative w-full h-full rounded-2xl'>
                <div className='absolute bottom-0 left-0 flex w-full bg-gradient-to-t from-black to-transparent rounded-2xl'>
                    <div className='flex flex-col w-full p-4 font-bold rounded-2xl'>
                        <h1 className='text-3xl italic font-bold text-white md:text-6xl '>
                            {movieData?.title || tvData?.name}
                        </h1>
                        <h3 className='mt-5 text-white'>
                            {movieData?.release_date && (<p>개봉일 - {movieData?.release_date}</p>)}
                            {
                                !!tvData?.genres.length && (
                                    <p>
                                        장르 - {tvData.genres.at(0)?.name}                        
                                    </p>                                
                                )
                            }
                            {
                                tvData?.next_episode_to_air && (
                                    <p>
                                        다음 방영일 - {tvData.next_episode_to_air.air_date}                        
                                    </p>                                
                                )
                            }
                        </h3>
                    </div>                          
                </div>              
            </section> 
        </article>
    );
};

export default LatestContent;