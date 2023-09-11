import type { FC } from 'react';
import { LeastPersonInfo2List, DetailPerson, LeastPersonInfo2 } from '../../apis/types/personTypes';
import { useEffect, useState } from 'react';
import SubTitle from '../../components/SubTitle';
import ListTemplate from '../../components/ListTemplate';
import { CheckOutlined } from '@ant-design/icons';
import AvatarCard from '../../components/AvatarCard';

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

    useEffect(() => {
        castsData && setCasts(castsData.cast.slice(0, visibleCount));
    }, [castsData, visibleCount]);

    return (
        <div>            
            <div className='my-10 border border-t-2'/>
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
        </div>
    );
};

export default Casts;