import { Avatar, Card, Image, Popover, Spin } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailMovie } from '../../apis/types/movieTypes';
import { getLImageUrl } from '../../utils/utils';
import { DetailTv } from '../../apis/types/tvTypes';
import { DetailPerson } from '../../apis/types/personTypes';
import { UserOutlined, WomanOutlined, ManOutlined } from '@ant-design/icons';

interface Props{
    movieItem?: DetailMovie;
    tvItem?: DetailTv;
    personItem?: DetailPerson;
}

const AutoCompleteListItem: FC<Props> = ({ movieItem, tvItem, personItem }) => {
    
    const navigate = useNavigate();
    const nonePath = useMemo(() => (movieItem && !movieItem.poster_path) || (tvItem && !tvItem.poster_path) || (personItem && !personItem.profile_path), [movieItem, tvItem, personItem]);
    
    const handleNavigate = () => {
        if (movieItem) {
            navigate(`movie/detail/${movieItem?.id}`);
        } else if (tvItem) {
            navigate(`tv/detail/${tvItem?.id}`);
        } else if (personItem) {
            navigate (`person/detail/${personItem.id}`);
        }
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
            &nbsp;            
            {
                (personItem && personItem.gender === 1) ? 
                (
                    <WomanOutlined className='p-2 text-white bg-pink-500 rounded-full'/>
                ) : personItem?.gender ===  2 ? 
                (
                    <ManOutlined className='p-2 text-white bg-blue-500 rounded-full'/>
                ) : ''
            }
        </div>
    ) 

    const popoverImg = (
        <Card cover={cardCover()} className='flex flex-col items-center justify-center object-cover w-48 border-none' style={ !nonePath ? { minHeight: 350, maxHeight: 350, maxWidth: 200 } : { }}>           
            <Card.Meta description={cardDesc} className='italic font-bold text-center line-clamp-3'/>
        </Card>        
    );

    return (
        <Popover content={popoverImg} placement='right'>
            <li onClick={handleNavigate} className='px-3 py-2 text-sm truncate border-t-2 rounded cursor-pointer max-h-14 text-ellipsis border-t-slate-200/60 first-of-type:border-t-0 hover:bg-white/60 hover:text-gray-700'>
                {movieItem?.title || tvItem?.name || personItem?.name ||'Not found...'}{' '}           
            </li>     
        </Popover>
    );
};

export default AutoCompleteListItem;