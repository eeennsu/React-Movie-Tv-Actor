import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import { CustomArrowProps } from 'react-slick';

interface Props extends CustomArrowProps{
    position: 'left' | 'right'
}

const ArrowButton: FC<Props> = ({ position, onClick }) => {

    const _className = `${position === 'left' ? 'left-0 -translate-x-7' : 'right-0 translate-x-7' }`;

    return (
        <button onClick={onClick} className={`absolute z-10 top-1/2 -translate-y-9 ${_className}`} >
            {
                position === 'left' ? (
                    <ArrowLeftOutlined className='p-3 text-xl text-white transition-colors bg-teal-500 rounded-full shadow-lg md:p-4 hover:text-yellow-500 hover:bg-slate-700' />
                ) : (
                    <ArrowRightOutlined className='p-3 text-xl text-white transition-colors bg-teal-500 rounded-full shadow-lg md:p-4 hover:text-yellow-500 hover:bg-slate-700' />
                )
            }
        </button>
    );
};

export default ArrowButton;