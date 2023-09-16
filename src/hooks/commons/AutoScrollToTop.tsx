import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoScrollToTop = () => {

    // 현재 경로를 가져옴
    const { pathname } = useLocation();

    // 동기적으로 작동하는 것이 자연스러으므로 layoutEffect에서 사용
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [pathname]);

    return null;
};

export default AutoScrollToTop;