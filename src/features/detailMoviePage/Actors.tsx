import type { FC } from 'react';
import { DetailPerson, LeastPersonInfo2, LeastPersonInfo2List } from '../../apis/types/personTypes';
import { useEffect, useState } from 'react';
import SubTitle from '../../components/SubTitle';
import ListTemplate from '../../components/ListTemplate';
import { CheckOutlined } from '@ant-design/icons';
import AvatarCard from '../../components/AvatarCard';

interface Props {
    actorsData?: LeastPersonInfo2List;
}

const Actors: FC<Props> = ({ actorsData }) => {

    const [actors, setActors] = useState<LeastPersonInfo2[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(5);
    
    const handleMoreCasts = () => {
        setVisibleCount(prev => prev + 5);
    }

    const isfull = actors.length >= (actorsData?.cast.length as number);

    useEffect(() => {
        if (actorsData) {
            setActors(actorsData.cast.slice(0, visibleCount));
        }
    }, [actorsData, visibleCount]);

    return (
        <div>            
            <div className='my-10 border border-t-2'/>
            <SubTitle>출연 배우</SubTitle>    
            <ListTemplate isLast>
                {
                    actors.length >= 1 && actors.map((actor) => (
                        <AvatarCard
                            key={actor.id}  
                            persons={actor}
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

export default Actors;