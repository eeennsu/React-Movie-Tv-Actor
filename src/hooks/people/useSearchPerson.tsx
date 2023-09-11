import { useQuery } from '@tanstack/react-query';
import { personSearch_API } from '../../apis/personAPI';
import { SelectType } from '../../zustand/search/types';
import { SearchPersonResponse } from '../../apis/types/personTypes';

const useSearchPerson = (text: string, select: SelectType) => {
    
    const { data, error, isSuccess } = useQuery<SearchPersonResponse>(
        ['search_person', { text, select }], 
        () => personSearch_API(text),
        {
            enabled: Boolean(text) && select === 'person'
        }
    );

    return {
        data,
        isSuccess,
        error,
    };
};

export default useSearchPerson;
