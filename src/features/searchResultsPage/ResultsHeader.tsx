import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import Divider from '../../components/Divider';
import useSearchSelectStore from '../../zustand/search/useSearchSelectStore';

const ResultsHeader: FC = () => {

    const { fetchedSucSelect } = useSearchSelectStore();

    return (
        <div>
            <div className='flex flex-col w-full mt-10 prose'>
                <h1>
                    {fetchedSucSelect === 'movie' ? 'Movies' : (
                        fetchedSucSelect === 'tv' ? 'Tv Programs' : 
                        'People'
                    )}
                </h1>            
            </div>    
            <Divider />
        </div>
    );
};

export default ResultsHeader;