import type { FC } from 'react';

interface Props{
    name: string;
}

const Badge: FC<Props> = ({ name }) => {

    return (
        <span className='mr-2 badge badge-info badge-lg'>
            {name}
        </span>
    );
};

export default Badge;