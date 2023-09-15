import type { FC } from 'react';
import { LeastPersonInfo2 } from '../../apis/types/personTypes';
import { getXSImageUrl } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { Card, Tooltip } from 'antd';
import WomanIcon from '.././GenderIcons/WomanIcon';
import ManIcon from '.././GenderIcons/ManIcon';
import UnknownGenderIcon from '.././GenderIcons/UnknownGenderIcon';

interface Props{
    persons?: LeastPersonInfo2;
}

const AvatarCard: FC<Props> = ({ persons }) => {

    const nonePath = persons && !persons.profile_path;

    const cardCover = () => {
        if (nonePath) {            
            return (
                <img src='/images/no_avatar.png' className='object-contain w-full h-full p-5' alt='profile' style={{ minHeight: 291 }} />
            );
        }
        
        return (
            <img src={getXSImageUrl(persons?.profile_path as string)} className='object-cover w-full h-full' alt='profile' style={{ minHeight: 201, maxWidth: 192 }} />
        );
    };
    
    const cardDesc = (
        <div className='d-flex line-clamp-1'>             
            {persons?.name}
            {
                (persons && persons.gender === 1) ? (
                    <WomanIcon />
                ) : persons?.gender ===  2 ? (
                    <ManIcon />
                ) : (
                    <UnknownGenderIcon />
                )
            }
        </div>
    ) 
    
    return (
        <Link to={`/person/detail/${persons?.id}`}>
            <Card cover={cardCover()} className='flex flex-col items-center justify-center object-cover w-48 min-h-full transition duration-200 ease-in-out border-none hover:scale-105' >           
                <Tooltip title={cardDesc}>
                    <Card.Meta description={cardDesc} className='italic font-bold text-center line-clamp-3'/>
                </Tooltip>
            </Card> 
        </Link> 
    );
};

export default AvatarCard;