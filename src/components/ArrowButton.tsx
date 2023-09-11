import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import { CustomArrowProps } from 'react-slick';

interface Props extends CustomArrowProps{
    position: 'left' | 'right'
}

const ArrowButton: FC<Props> = ({ position, onClick }) => {

    const _className = `${position === 'left' ? 'left-0 -translate-x-4 -translate-y-1/2' : 'right-0 translate-x-4 -translate-y-1/2' }`;

    return (
        <button onClick={onClick} className={`absolute z-10 top-1/2 ${_className}`} >
            {
                position === 'left' ? (
                    <ArrowLeftOutlined className='p-3 text-xl bg-yellow-100 rounded-full shadow-lg hover:text-yellow-100 hover:bg-slate-700 text-slate-700' />
                ) : (
                    <ArrowRightOutlined className='p-3 text-xl bg-yellow-100 rounded-full shadow-lg hover:text-yellow-100 hover:bg-slate-700 text-slate-700' />
                )
            }
        </button>
    );
};

export default ArrowButton;