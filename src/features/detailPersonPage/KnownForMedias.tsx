import type { FC } from 'react';
import { DetailPerson } from '../../apis/types/personTypes';
import SubTitle from '../../components/SubTitle';
import ListTemplate from '../../components/ListTemplate';

interface Props {
    also_known_as?: string[];
}

const KnownForMedias: FC<Props> = ({ also_known_as }) => {

    console.log('also_known_as', also_known_as);

    return (
        <article className='p-2'>
            <div className='my-10 border border-t-2'/>
            <SubTitle>Cast In Medias</SubTitle>
            <ListTemplate isLast>
            {
                also_known_as ?  also_known_as?.map((media, i) => (
                    <div className='p-2 my-4 border-b-2 ps-0 border-neutral'>
                        <span className='mr-2 dot dot-primary' />
                        {media}
                    </div>
                )) : null
            }
            </ListTemplate>        
        </article>       
    )
};

export default KnownForMedias;