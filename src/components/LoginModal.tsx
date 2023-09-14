import { Modal as AntdModal, ModalProps } from 'antd';
import type { FC } from 'react';
import useLoginStore from '../zustand/UserLogin/useUserLoginStore';
import { useForm, SubmitHandler } from 'react-hook-form';
import useLoginModalStore from '../zustand/Modal/useLoginModalStore';

interface FormProps {
    email: string;
    password: string;
}

const LoginModal: FC<ModalProps> = () => {

    const { setIsLogin } = useLoginStore();
    const { isLoginModalOpen, setIsLoginModalOpen } = useLoginModalStore();
    
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>();
    const onSubmit: SubmitHandler<FormProps> = ({ email, password }) => {
        
        // 로그인 체크는 생략
        
        
        setIsLogin(true);
        setIsLoginModalOpen(false);
    };

    return (
        <AntdModal footer={null} centered onCancel={() => setIsLoginModalOpen(false)} open={isLoginModalOpen}>
            <div className='px-4 py-16 mx-auto rounded md:py-8 md:px-0 lg:px-8 '>            
                <h1 className='text-2xl font-bold text-center text-teal-600 sm:text-3xl'>
                    Get started Login
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
            </div> 
        </AntdModal>       
    );
};

export default LoginModal;