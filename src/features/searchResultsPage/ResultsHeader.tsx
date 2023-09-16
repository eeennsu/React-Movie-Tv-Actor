import type { FC } from 'react';
import Divider from '../../components/Divider';
import useSearchSelectStore from '../../zustand/search/useSearchSelectStore';

const ResultsHeader: FC = () => {

    const { fetchedSucSelect } = useSearchSelectStore();

    return (
        <div>
            <div className='flex flex-col w-full mt-2 text-3xl text-center md:mt-6 md:text-left'>
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