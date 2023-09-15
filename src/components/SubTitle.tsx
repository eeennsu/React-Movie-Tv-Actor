import type { FC, PropsWithChildren } from 'react';

const SubTitle: FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className='flex justify-center md:justify-start'>
            <h3 className="pl-2 mb-5 text-2xl font-bold border-l-4 border-l-red-200">
                {children}
            </h3>
        </div>        
    );
};

export default SubTitle;