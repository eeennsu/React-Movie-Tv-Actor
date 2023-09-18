import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { LeastMovieInfo } from '../../apis/types/movieTypes';
import { getLImageUrl } from '../../utils/utils';
import { LeastTvInfo } from '../../apis/types/tvTypes';
import { Tooltip } from 'antd';

interface Props {
    movie?: LeastMovieInfo;
    tv?: LeastTvInfo;
}

const Card2: FC<Props> = ({ movie, tv }) => {
    
    const url = movie ? `/movie/detail/${movie.id}` : tv ? `/tv/detail/${tv.id}` : '';
    const hasPoster_path = movie?.poster_path || tv?.poster_path;

    const handleTopToScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Link to={url} onClick={handleTopToScroll} className='block no-underline'>
            <div className='w-full max-w-xs transition duration-200 ease-in-out hover:scale-110'>
                <div className='relative overflow-hidden shadow-xl h-88 2xs:h-56 xs:h-76 sm:h-72 md:h-88 lg:h-68 rounded-2xl card-title '>
                    {
                        hasPoster_path ? (
                            <img className='object-cover w-full h-full max-w-xs border-4 border-white rounded-2xl' src={getLImageUrl(hasPoster_path as string)} alt={`poster`}/>
                        ) : (
                            <img className='object-cover w-full h-full max-w-xs rounded-xl' src={`${process.env.PUBLIC_URL}/images/no_image.png`} alt='no-data'/>
                        )
                    }
                </div>
                <Tooltip title={movie?.title || tv?.name}>
                    <div className='italic text-center line-clamp-1'>
                        {movie?.title || tv?.name} 
                    </div>
                </Tooltip>
            </div>
        </Link>  
    );
};

export default Card2;