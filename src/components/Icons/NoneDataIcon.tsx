import { FileUnknownOutlined } from '@ant-design/icons';
import { FC } from 'react';

const NoneDataIcon: FC = () => {
    return (
        <FileUnknownOutlined className='p-2 text-white bg-gray-500 rounded-full ms-2' />
    );
}

export default NoneDataIcon;