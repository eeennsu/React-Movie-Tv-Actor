import type { FC } from 'react';
import { LeastPersonInfo2List, LeastPersonInfo2 } from '../../apis/types/personTypes';
import { useState } from 'react';
import SubTitle from '../../components/SubTitle';
import ListTemplate from '../../components/ListTemplate';
import { CheckOutlined } from '@ant-design/icons';
import AvatarCard from '../../components/Card/AvatarCard';
import useGetMoreCasts from '../../hooks/commons/useGetMoreCasts';
import Divider from '../../components/Divider';

interface Props {
    castsData?: LeastPersonInfo2List;
}

const Casts: FC<Props> = ({ castsData }) => {

    const [casts, setCasts] = useState<LeastPersonInfo2[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(5);
    
    const handleMoreCasts = () => {
        setVisibleCount(prev => prev + 5);
    }

    const isfull = casts.length >= (castsData?.cast.length as number);

    useGetMoreCasts(castsData, visibleCount, setCasts);

    return (
        <article>            
            <Divider />
            <SubTitle>출연 배우</SubTitle>    
            <ListTemplate isLast>
                {
                    casts.length >= 1 && casts.map((cast) => (
                        <AvatarCard
                            key={cast.id}  
                            persons={cast}
                        />                        
                    ))
                }
            </ListTemplate>
            <div className='flex justify-center mt-5'>        
                <button className={`btn disabled:pointer-events-none disabled:opacity-50 btn-info ${isfull ? 'disabled' : 'active'}`} onClick={handleMoreCasts}>
                    {isfull ? <CheckOutlined /> : 'more data'}
                </button>
            </div>    
        </article>
    );
};

export default Casts;