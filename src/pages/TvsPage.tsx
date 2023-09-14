import type { FC } from 'react';
import AiringTodayTvs from '../features/tvsPages/AiringTodayTvs/AiringTodayTvs';
import OnTheAirTvs from '../features/tvsPages/OnTheAirTvs/OnTheAirTvs';
import TopRatedTvs from '../features/tvsPages/TopRatedTvs/TopRatedTvs';
import PopularTvs from '../features/tvsPages/PopularTvs/PopularTvs';
import LatestTv from '../features/tvsPages/LatestTv/LatestTv';

const TvsPage: FC = () => {

    return (
        <div className='space-y-20'>
            <LatestTv />

            <PopularTvs />

            <AiringTodayTvs />

            <OnTheAirTvs />
            
            <TopRatedTvs />
        </div>
    );
};

export default TvsPage;