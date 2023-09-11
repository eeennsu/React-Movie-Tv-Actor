import type { FC } from 'react';
import LatestContent from '../../../components/LatestContent';
import useLatestTv from '../../../hooks/tv/useLatestTv';


const LatestTv: FC = () => {

    const { data } = useLatestTv();

    return (
        <LatestContent tvData={data} />          
    );
};

export default LatestTv;