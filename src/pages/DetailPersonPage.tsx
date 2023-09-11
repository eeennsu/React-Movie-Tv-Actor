import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import useDetailPerson from '../hooks/people/useDetailPerson';
import PersonBox from '../features/detailPersonPage/PersonBox';
import KnownForMedias from '../features/detailPersonPage/KnownForMedias';

const DetailPersonPage: FC = () => {

    const { id } = useParams();
    const { data } = useDetailPerson(id as string);

    return (
        <div className='flex flex-col space-y-10'>
            <PersonBox personData={data}/>
            <KnownForMedias also_known_as={data?.also_known_as} />
        </div>
    );
};

export default DetailPersonPage;