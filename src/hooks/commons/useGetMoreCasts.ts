import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import { LeastPersonInfo2, LeastPersonInfo2List } from '../../apis/types/personTypes';

const useGetMoreCasts = (
    castsData: LeastPersonInfo2List | undefined,        // 비동기로 불러오는 데이터이므로 초기에는 undefined이다.
    visibleCount: number,
    setActors: Dispatch<SetStateAction<LeastPersonInfo2[]>>
) => {
    useEffect(() => {
        castsData && setActors(castsData.cast.slice(0, visibleCount));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [castsData, visibleCount]);

    return null;
};

export default useGetMoreCasts;