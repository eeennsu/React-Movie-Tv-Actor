import type { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isMobile: boolean;
}

const SignUpButton: FC<Props> = ({ className, isMobile, ...props }) => {

    const _isMobile = isMobile ? (
        ' px-7 py-3 font-semibold bg-slate-100 rounded-full hover:bg-slate-200 active:bg-slate-300'
    ) : (
        'block rounded-md bg-teal-600 px-5 py-2.5 hover:bg-slate-200 active:bg-slate-300 bg-white'
    );
    
    return (
        <button {...props} className={ className + `${_isMobile}  transition text-sm text-teal-500 font-bold `}>
            Sign Up
        </button>
    )
};

export default SignUpButton;