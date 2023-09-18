import type { FC } from 'react';
import SubTitle from '../../components/SubTitle';
import ListTemplate from '../../components/ListTemplate';
import Divider from '../../components/Divider';

interface Props {
    also_known_as?: string[];
}

const KnownForMedias: FC<Props> = ({ also_known_as }) => {

    return (
        <article className='p-2'>
            <Divider />
            <SubTitle>Keywords</SubTitle>
            <ListTemplate isLast>
                {
                    !!also_known_as?.length && (
                        also_known_as.map(media => (
                            <div className='p-2 my-4 border-b-2 ps-0 border-neutral'>
                                <span className='mr-2 dot dot-primary'>
                                    {media}
                                </span>                            
                            </div>
                        ))
                    )
                }
            </ListTemplate>        
        </article>       
    )
};

export default KnownForMedias;