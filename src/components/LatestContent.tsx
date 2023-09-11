import type { FC } from 'react';
import { getLImageUrl } from '../utils/utils';
import { DetailMovie } from '../apis/types/movieTypes';
import { DetailTv } from '../apis/types/tvTypes';
//import { useState } from 'react';

interface Props {
    movieData?: DetailMovie;
    tvData?: DetailTv;
}

const LatestContent: FC<Props> = ({ movieData, tvData }) => {

    return (
        <div className='relative flex flex-col shadow-xl h-96'>
            <div className='absolute w-full'>   
                <div className='h-96' >
                    {movieData?.backdrop_path ? (
                            <img src={getLImageUrl(movieData?.backdrop_path)} className='object-cover w-full h-full' alt='lateset movei logo'/>
                        ) : (
                            <img className='object-cover w-full h-full' src='/images/basic.jpg' alt="basic" />
                        )
                    }
                </div>                
            </div>            
            <div className='relative w-full h-full '>
                <div className='absolute bottom-0 left-0 flex w-full bg-gradient-to-t from-black to-transparent'>
                    <div className='flex flex-col items-center w-full p-4 font-bold md:items-start'>
                        <h1 className='text-6xl font-bold text-white '>
                            {movieData?.title || tvData?.name}
                        </h1>
                        <h3 className='mt-5 text-white'>
                            {movieData?.release_date && <span>개봉일 {movieData?.release_date}</span> }
                        </h3>
                    </div>                          
                </div>              
            </div> 
        </div>
    );
};

export default LatestContent;