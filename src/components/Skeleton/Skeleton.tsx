import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

const Skeleton: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className }) => {
   
    return (
        <div className={`rounded-2xl shadow-2xl animate-pulse bg-gray-300 ${className}`} />        
    );
};

export default Skeleton;