import { Avatar, Card, Image, Popover, Spin } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailMovie } from '../../apis/types/movieTypes';
import { getLImageUrl } from '../../utils/utils';
import { DetailTv } from '../../apis/types/tvTypes';
import { DetailPerson } from '../../apis/types/personTypes';
import { UserOutlined } from '@ant-design/icons';
import WomanIcon from '../Icons/WomanIcon';
import ManIcon from '../Icons/ManIcon';
import UnknownGenderIcon from '../Icons/NoneDataIcon';
import useDrawerStore from '../../zustand/drawer/useDrawerStore';

interface Props{
    movieItem?: DetailMovie;
    tvItem?: DetailTv;
    personItem?: DetailPerson;
    isDrawer?: boolean;
}

const AutoCompleteListItem: FC<Props> = ({ movieItem, tvItem, personItem, isDrawer }) => {
    
    const navigate = useNavigate();
    
    const { setIsDrawerOpen } = useDrawerStore();
    const nonePath = (movieItem && !movieItem.poster_path) || (tvItem && !tvItem.poster_path) || (personItem && !personItem.profile_path);

    const handleNavigate = () => {
        if (movieItem) {
            navigate(`movie/detail/${movieItem?.id}`);
        } else if (tvItem) {
            navigate(`tv/detail/${tvItem?.id}`);
        } else if (personItem) {
            navigate (`person/detail/${personItem.id}`);
        }

        isDrawer && setIsDrawerOpen(false);
    }

    const cardCover = () => {
        if (personItem && nonePath) {            
            return (
                <Avatar size={150} icon={<UserOutlined />}/>
            );
        }
     
        else if (nonePath) {
            return (
                <Image                     
                    alt={`none poster`}                    
                />
            );
        }

        return (
            <Image 
                src={getLImageUrl(movieItem?.poster_path || tvItem?.poster_path || personItem?.profile_path as string)} 
                alt={`none poster`}
            /> || 
            <Spin size='large' className='mt-5' />
        );
    };

    const cardDesc = (
        <div>            
            {movieItem?.original_title || tvItem?.original_name || personItem?.original_name}
                &nbsp;               
            {
                (personItem && personItem.gender === 1) ? (
                    <WomanIcon />
                ) : (personItem?.gender === 2) ? (
                    <ManIcon />
                ) : (
                    <UnknownGenderIcon />
                )
            }
        </div>
    ) 

    const popoverImg = (
        <Card cover={cardCover()} className='flex flex-col items-center justify-center object-cover w-48 border-none' style={ !nonePath ? { minHeight: 350, maxHeight: 350, maxWidth: 200 } : { }}>           
            <Card.Meta description={cardDesc} className='italic font-bold text-center line-clamp-3'/>
        </Card>        
    );

    const content = (
        <li onClick={handleNavigate} className='px-3 py-2 text-sm truncate border-t-2 rounded cursor-pointer max-h-14 text-ellipsis border-t-slate-200/60 first-of-type:border-t-0 hover:bg-white/60 hover:text-gray-700'>
            {movieItem?.title || tvItem?.name || personItem?.name ||'Not found...'}{' '}           
        </li>     
    )

    return (
        isDrawer ? (
            content
        ) : (
            <Popover content={popoverImg} placement='right'>
                {content}    
            </Popover>
        )
    );
};

export default AutoCompleteListItem;