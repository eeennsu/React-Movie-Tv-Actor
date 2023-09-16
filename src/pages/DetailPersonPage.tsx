import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import useDetailPerson from '../hooks/people/useDetailPerson';
import PersonBox from '../features/detailPersonPage/PersonBox';
import KnownForMedias from '../features/detailPersonPage/KnownForMedias';
import { useIsFetching } from '@tanstack/react-query';
import { Spin } from 'antd';

const DetailPersonPage: FC = () => {

    const { id } = useParams();
    const { data } = useDetailPerson(id as string);
    const isLoading = useIsFetching();

    return (
        isLoading ? (
            <div className='flex items-center justify-center h-132'>
                <Spin size='large'/>         
            </div>  
        ) : (
            <div className='flex flex-col space-y-10'>
                <PersonBox personData={data}/>
                
                <KnownForMedias also_known_as={data?.also_known_as} />
            </div>
        )
    );
};

export default DetailPersonPage;