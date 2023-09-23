import type { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    isMobile: boolean;
}

const LoginButton: FC<Props> = ({ className, isMobile, ...props }) => {
    
    const _isMobile = isMobile ? (
        ' px-7 py-3 font-semibold text-white transition bg-teal-600 rounded-full hover:bg-teal-700'
    ) : (
        ' block rounded-md bg-teal-600 px-5 py-2.5 text-sm text-white transition hover:bg-teal-700'
    );

    return (
        <button {...props} className={className + `${_isMobile} text-white text-sm transition active:bg-teal-800`}>
            Login
        </button>
    );
};

export default LoginButton;