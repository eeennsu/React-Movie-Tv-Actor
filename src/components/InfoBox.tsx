import { FC } from 'react';

interface Props {
    topic: string;
    description?: string | number;
}

const InfoBox: FC<Props> = ({ topic, description }) => {
    
    return (
        <div className='flex items-center gap-2 py-4 text-center bg-blue-100 rounded-lg justify-evenly md:px-2 md:justify-center md:flex-col dark:bg-slate-600 lg:px-8 lg:py-6'>
            <dt className='px-3 py-1 text-2xl font-medium text-gray-500 md:px-0 md:py-0 md:text-lg dark:text-slate-100 lg:text-xl dark:text-slate-90000'>
                {topic}
            </dt>       
            <dd className='w-3/5 text-4xl font-extrabold text-blue-600 md:w-auto f dark:text-blue-300 lg:text-3xl'>
                {description}
            </dd>                                                         
        </div>
    );
}

export default InfoBox;