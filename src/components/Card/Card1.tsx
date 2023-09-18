import type { FC }              from 'react';
import { LeastMovieInfo }       from '../../apis/types/movieTypes';
import { LeastTvInfo }          from '../../apis/types/tvTypes';
import { LeastPersonInfo2 }     from '../../apis/types/personTypes';
import { Link }                 from 'react-router-dom';
import { getLImageUrl }         from '../../utils/utils';
import { Tooltip }              from 'antd';

interface Props {
    movie?: LeastMovieInfo;
    tv?: LeastTvInfo;
    person?: LeastPersonInfo2;
}

const Card1: FC<Props> = ({ movie, tv, person }) => {

    const url = movie ? `/movie/detail/${movie.id}` : tv ? `/tv/detail/${tv.id}` : person ? `/person/detail/${person.id}` : '';
    const hasPoster_path = movie?.poster_path || tv?.poster_path || person?.profile_path;

    return (       
        <Link to={url} className='block no-underline mx-1.5'>
            <div className='flex flex-col items-center w-full'> 
                <div className='relative w-full overflow-hidden shadow-xl h-80 2xs:h-56 xs:h-72 sm:h-86 lg:h-88 xl:h-72 rounded-xl'>
                    {
                        hasPoster_path ? (
                            <img className='object-cover w-full h-full max-w-xs transition duration-200 ease-in-out hover:scale-105 rounded-xl' src={getLImageUrl(hasPoster_path as string)} alt={`poster`}/>
                        ) : (
                            <img className='object-cover w-full h-full max-w-xs rounded-xl' src='/images/no_image.png' alt='no-data'/>
                        )
                    }                   
                </div>
                <Tooltip placement='top' title={movie?.title || tv?.name || person?.name}>
                    <div className='px-1 my-1 text-sm italic text-center line-clamp-1 md:text-lg'>
                        {movie?.title || tv?.name || person?.name}
                    </div>  
                </Tooltip>                      
            </div>
        </Link>             
    );
};

export default Card1;