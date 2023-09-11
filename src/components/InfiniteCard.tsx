import type { FC } from 'react';
import { LeastPersonInfo2 } from '../apis/types/personTypes';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import { getLImageUrl } from '../utils/utils';

export interface Props {
    person?: LeastPersonInfo2;
}

const InfiniteCard: FC<Props> = ({ person }) => {

    const url = person ? `/person/detail/${person.id}` : '';
    const hasPoster_path = person?.profile_path;
    
    return (       
        <Link to={url} className='block mx-2 no-underline'>
            <div>
                <div className='relative max-w-xs overflow-hidden shadow-xl card-title h-80 rounded-xl'>
                    {
                        hasPoster_path ? (
                            <img className='object-cover w-full h-full max-w-xs transition duration-200 ease-in-out hover:scale-105 rounded-xl' src={getLImageUrl(hasPoster_path as string)} alt={`poster`}/>
                        ) : (
                            <img className='object-cover w-full h-full max-w-xs rounded-xl' src='/images/no_image.png' alt='no-data'/>
                        )
                    }
                </div>
                <Tooltip placement='top' title={person?.name}>
                    <div className='mt-2 italic text-center text-white line-clamp-1'>
                        {person?.name}
                    </div>  
                </Tooltip>                      
            </div>
        </Link>          
    );
};

export default InfiniteCard;