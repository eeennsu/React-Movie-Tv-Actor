import { useQuery } from '@tanstack/react-query';
import { DetailPerson } from '../../apis/types/personTypes';
import { detailPerson_API } from '../../apis/personAPI';

const useDetailPerson = (id: string) => {
    const { data, isLoading, error } = useQuery<DetailPerson>(
        ['detail_person', { id }],
        () => detailPerson_API(id),
        {
            enabled: Boolean(id),
        }
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useDetailPerson;
