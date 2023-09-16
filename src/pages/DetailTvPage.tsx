import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import useDetailTv from '../hooks/tv/useDetailTv';
import { useEffect } from 'react';
import TvBackdrop from '../features/detailTvPage/TvBackdrop';
import Casts from '../features/detailTvPage/Casts';
import DetailTvInfo from '../features/detailTvPage/DetailTvInfo';
import MainTvInfo from '../features/detailTvPage/MainTvInfo';
import useKeywordsTv from '../hooks/tv/useKeywordsTv';
import SimilarTvs from '../features/detailTvPage/SimilarTvs';
import useSimilarTvs from '../hooks/tv/useSimilarTvs';
import useCasts from '../hooks/tv/useCasts';

const DetailTvPage: FC = () => {

    const { id } = useParams();

    const { data: tvData } = useDetailTv(id as string);
    const { data: keywordsData } = useKeywordsTv(id as string);
    const { data: similarData } = useSimilarTvs(id as string);
    const { data: castsData } = useCasts(id as string);
        
    return (    
        <div className='flex flex-col'>
            <TvBackdrop backdrop_path={tvData?.backdrop_path}/>

            <MainTvInfo tvData={tvData} />      

            <DetailTvInfo tvData={tvData} keywordsData={keywordsData?.results} />       

            <Casts castsData={castsData}/>
            
            <SimilarTvs similarTvs={similarData}/>
        </div>
    );
};

export default DetailTvPage;