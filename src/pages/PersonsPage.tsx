import { type FC } from 'react';
import { useState } from 'react';
import HotPerson from '../features/personsPage/HotPerson';
import usePopularPersons from '../hooks/people/useInfinitePopularPersons';
import PopularPersons from '../features/personsPage/PopularPersons';
import { PersonListResponse } from '../apis/types/personTypes';

const PersonsPage: FC = () => {

    // fetcing해온 인기 연예인들 중에서, 랜덤으로 한명은 
    // const [ranPersons, setRanPersons] = useState<PersonListResponse['results']>([]);

    return (
        <div className='space-y-20'>
            <HotPerson />
            <PopularPersons />
        </div>
    );
};

export default PersonsPage;