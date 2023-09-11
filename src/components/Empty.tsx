import type { FC } from 'react';
import { Empty as AntdEmpty } from 'antd';
import useSerachResultStore from '../zustand/search/useSerachResultStore';
import { Link } from 'react-router-dom';

const Empty: FC = () => {

    const { searchKeyword } = useSerachResultStore();

    return (
        <AntdEmpty description={`${searchKeyword}에 대한 검색결과는 없습니다.`}>
            <button className='btn btn-neutral'>
                <Link to='/'>
                    home
                </Link>
            </button>
        </AntdEmpty>     
    );
};

export default Empty;