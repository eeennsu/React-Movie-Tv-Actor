import { Modal as AntdModal, message } from 'antd';
import type { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useLoginModalStore from '../zustand/modal/useLoginModalStore';
import { UserAddOutlined } from '@ant-design/icons';
import useSignUpModalStore from '../zustand/modal/useSignUpModalStore';

interface FormProps {
    email: string;
    password: string;
}

const LoginModal: FC = () => {

    const { isLoginModalOpen, setIsLoginModalOpen } = useLoginModalStore();
    const { setIsSignUpModalOpen } = useSignUpModalStore();
    
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>();
    const onSubmit: SubmitHandler<FormProps> = ({ email, password }) => {
        
        // 로그인 체크는 생략

        // 로그인이 확인되면 login 상태를 true로 설정해줘야 함
        // setIsLogin(true);
        setIsLoginModalOpen(false);
        message.warning('회원가입 및 로그인은 미구현 상태입니다.');
    };

    const handleSignUpModal = () => {
        setIsLoginModalOpen(false);
        setIsSignUpModalOpen(true);
    }

    return (
        <AntdModal footer={null} centered  onCancel={() => setIsLoginModalOpen(false)} open={isLoginModalOpen}>
            <div className='px-4 py-16 mx-auto rounded md:py-8 md:px-0 lg:px-8 '>            
                <h1 className='text-2xl font-bold text-center text-teal-600 sm:text-3xl'>
                    Login
                </h1>                                   
                <form onSubmit={handleSubmit(onSubmit)} className='p-4 mt-6 mb-0 rounded-lg shadow-lg md:p-6 lg:p-8'>                                  
                    <div className='relative'>
                        <input
                            {...register('email', { required: true })}
                            type='email'
                            className='w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm focus:border-black bg-slate-100 hover:bg-slate-200'
                            placeholder='Enter email'
                        />                  
                        <span className='inline-block w-full font-thin text-red-400 h-4italic '>
                            {
                                errors.email?.type === 'required' && (
                                    '이메일을 입력해주세요'
                                )
                            }
                        </span>
                    </div>
                    <div className='relative '>
                        <input
                            {...register('password', { required: true })}
                            type='password'
                            className='w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm focus:border-black bg-slate-100 hover:bg-slate-200'
                            placeholder='Enter password'
                        />        
                        <span className='inline-block w-full font-thin text-red-400 h-4italic '>
                            {
                                errors.email?.type === 'required' && (
                                    '비밀번호를 입력해주세요...'
                                )
                            }
                        </span>                                      
                    </div>
                    <button type='submit' className='block w-full px-5 py-3 text-sm font-medium text-white transition bg-teal-600 rounded-lg active:bg-teal-800 hover:bg-teal-700'>                                    
                        Login
                    </button>                                   
                </form>             
                <div className='flex items-center justify-center mt-4'>
                    <button className='py-3 text-sm font-medium text-teal-600 transition bg-white border-2 border-teal-600 hover:text-white rounded-2xl px-7 hover:bg-teal-700 active:bg-teal-800' onClick={handleSignUpModal}>
                        Sign Up<UserAddOutlined />
                    </button>
                </div>   
            </div> 
        </AntdModal>       
    );
};

export default LoginModal;