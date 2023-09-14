import { type FC } from 'react';
import HotPerson from '../features/personsPage/HotPerson';
import PopularPersons from '../features/personsPage/PopularPersons';

const PersonsPage: FC = () => {

    return (
        <div className='space-y-20'>
            <HotPerson />
            <PopularPersons />
        </div>
    );
};

export default PersonsPage;