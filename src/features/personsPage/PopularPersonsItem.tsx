import type { FC } from 'react'
import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../../hooks/commons/useIntersectionObserver';
import { LeastPersonInfo2 } from '../../apis/types/personTypes';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import { getLImageUrl } from '../../utils/utils';

interface Props {
    person: LeastPersonInfo2;
    index: number;
    fetchMore: () => void;
    isLastItem: boolean;
    isFetchingNextPage?: boolean;
}

const PopularPersonsItem: FC<Props> = ({ person, index, fetchMore, isLastItem, isFetchingNextPage }) => {

    const itemRef = useRef<HTMLAnchorElement>(null);
    const entry = useIntersectionObserver(itemRef, {});
    const isIntersecting = Boolean(entry?.isIntersecting);

    useEffect(() => {
        isLastItem && isIntersecting && fetchMore();
    }, [isLastItem, isIntersecting]);

    return (
        <Link to={`detail/${person.id}`} className='block mx-2 no-underline' ref={itemRef}>
            <div>
                <div className='relative max-w-xs overflow-hidden shadow-2xl card-title h-80 xs:h-96 sm:h-88 md:h-96 lg:h-80 rounded-xl'>
                    {
                        person?.profile_path ? (
                            <img className='object-cover w-full h-full max-w-xs transition duration-200 ease-in-out hover:scale-105 rounded-xl' src={person?.profile_path && getLImageUrl(person.profile_path as string)} alt={`poster`}/>
                        ) : (
                            <img className='object-cover w-full h-full max-w-xs rounded-xl' src='/images/no_image.png' alt='no-data'/>
                        )
                    }
                </div>
                <Tooltip placement='top' title={person?.name}>
                    <div className='mt-2 italic text-center line-clamp-1'>
                        {person?.name}
                    </div>  
                </Tooltip>                      
            </div>
        </Link> 
    );
};

export default PopularPersonsItem;