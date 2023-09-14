import type { FC } from 'react';
import ListTemplate from '../../components/ListTemplate';
import SubTitle from '../../components/SubTitle';
import { TvListResponse } from '../../apis/types/tvTypes';
import Card2 from '../../components/Card/Card2';

interface Props {
    similarTvs?: TvListResponse
}

const SimilarTvs: FC<Props> = ({ similarTvs }) => {
    
    return (
        <div className='p-2'>   
           <div className='my-10 border border-t-2'/>
            <SubTitle>비슷한 작품들</SubTitle>      
            <ListTemplate isLast>
                {
                    similarTvs?.results.map((tv) => (
                        <Card2 
                            key={tv.id} 
                            tv={tv}
                        />                          
                    ))
                }
            </ListTemplate>
        </div>
    );
};

export default SimilarTvs;