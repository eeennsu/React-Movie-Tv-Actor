import { Modal as AntdModal, ModalProps, message } from 'antd';
import type { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSignUpModalStore from '../zustand/Modal/useSignUpModalStore';

interface FormProps {
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpModal: FC<ModalProps> = ({ open, onCancel, onOk }) => {

    const { setIsSignUpModalOpen } = useSignUpModalStore();
    
    const { register, handleSubmit } = useForm<FormProps>();
    const onSubmit: SubmitHandler<FormProps> = ({ email, password, confirmPassword }) => {
        
        if (email.length === 0 || password.length === 0 || confirmPassword.length === 0 ){
            message.error('입력값을 모두 입력해주세요');
            
            return;
        }

        if (password !== confirmPassword) {
            message.error('비밀번호와 비밀번호 확인이 일치하지 않습니다.');

            return;
        }
        
        setIsSignUpModalOpen(false);
    };

    return (
        <AntdModal footer={null} centered open={open} onCancel={onCancel} onOk={onOk}> 
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-2xl font-bold text-center text-indigo-500 sm:text-3xl">
                        SignUp
                    </h1>                                   
                    <form onSubmit={handleSubmit(onSubmit)} className="p-4 mt-6 mb-0 space-y-4 rounded-lg shadow-lg sm:p-6 lg:p-8">                                  
                        <div>                            
                            <input
                                {...register('email')}
                                type="email"
                                className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12 focus:border-black bg-slate-100 hover:bg-slate-200"
                                placeholder="Enter email"
                            />  
                        </div>
                        <div>                       
                            <input
                                {...register('password')}
                                type="password"
                                className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12 focus:border-black bg-slate-100 hover:bg-slate-200"
                                placeholder="Enter password"
                            />                             
                        </div>    
                        <div>
                            <input
                                {...register('confirmPassword')}
                                type="password"
                                className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12 focus:border-black bg-slate-100 hover:bg-slate-200"
                                placeholder="Confirm password"
                            /> 
                        </div>                 
                        <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-800">                                    
                            Sign Up
                        </button>                                   
                    </form>
                </div>
            </div> 
        </AntdModal>
    );
};

export default SignUpModal;