import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';

const Skeleton: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className }) => {
   
    return (
        <div className={`rounded-2xl shadow-2xl animate-pulse bg-slate-300/90 ${className}`} />        
    );
};

export default Skeleton;