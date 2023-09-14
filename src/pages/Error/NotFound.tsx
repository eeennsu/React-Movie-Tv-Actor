import { Result } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {

    const navigate = useNavigate();

    const backHome = () => {
        navigate('/', {
            replace: true       
        })
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Result 
                status='404'
                title='404'
                subTitle='Sorry, the page you visited does not exist.'
                extra={<button onClick={backHome} className='btn btn-warning'>Home</button>}
            />   
        </div>          
    );
};

export default NotFound;