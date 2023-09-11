import type { FC } from 'react';
import ResultsHeader from '../features/searchResultsPage/ResultsHeader';
import ResultsBody from '../features/searchResultsPage/ResultsBody';

const SearchResultsPage: FC = () => {
    
    return (
        <div className='flex flex-col w-full'>      
            <ResultsHeader />
            <ResultsBody />
        </div>
    );
};

export default SearchResultsPage;