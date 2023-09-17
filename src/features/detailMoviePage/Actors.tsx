import type { FC } from 'react';
import { LeastPersonInfo2, LeastPersonInfo2List } from '../../apis/types/personTypes';
import { useState } from 'react';
import SubTitle from '../../components/SubTitle';
import ListTemplate from '../../components/ListTemplate';
import { CheckOutlined } from '@ant-design/icons';
import AvatarCard from '../../components/Card/AvatarCard';
import useGetMoreCasts from '../../hooks/commons/useGetMoreCasts';

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

    useGetMoreCasts(actorsData, visibleCount, setActors);

    return (
        <article>            
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
        </article>
    );
};

export default Actors;