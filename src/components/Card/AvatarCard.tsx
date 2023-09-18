import type { FC } from 'react';
import { LeastPersonInfo2 } from '../../apis/types/personTypes';
import { getXSImageUrl } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { Card, Tooltip } from 'antd';
import WomanIcon from '../Icons/WomanIcon';
import ManIcon from '../Icons/ManIcon';
import NoneDataIcon from '../Icons/NoneDataIcon';

interface Props{
    persons?: LeastPersonInfo2;
}

const AvatarCard: FC<Props> = ({ persons }) => {

    const nonePath = persons && !persons.profile_path;

    const cardCover = nonePath ? (
        <img src={`${process.env.PUBLIC_URL}/images/no_avatar.png`} className='object-contain w-3/4 p-5 ' alt='profile' style={{ minHeight: 291 }} />
    ) : (
        <img src={getXSImageUrl(persons?.profile_path as string)} className='object-cover' alt='profile' style={{ minHeight: 201, maxWidth: 192 }} />
    );      
    
    const cardDesc = (
        <div className='d-flex line-clamp-1'>             
            {persons?.name}
            {
                (persons && persons.gender === 1) ? (
                    <WomanIcon />
                ) : persons?.gender ===  2 ? (
                    <ManIcon />
                ) : (
                    <NoneDataIcon />
                )
            }
        </div>
    ) 
    
    return (
        <Link to={`/person/detail/${persons?.id}`}>
            <Card cover={cardCover} className='flex flex-col items-center justify-center object-cover w-11/12 transition duration-200 ease-in-out border-none md:h-full md:w-full hover:scale-105' >           
                <Tooltip title={cardDesc}>
                    <Card.Meta description={cardDesc} className='italic font-bold text-center line-clamp-3'/>
                </Tooltip>
            </Card> 
        </Link> 
    );
};

export default AvatarCard;