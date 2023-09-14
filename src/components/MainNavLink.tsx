import type { FC } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

const MainNavLink: FC<LinkProps> = ({ className: _className, to, ...props }) => {

    const { pathname } = useResolvedPath(to);
    const match = useMatch({ path: pathname, end: true });
    
    return (
        <Link {...props} to={to} className={_className + ` py-5 px-2 ${match && ' text-teal-700 border-b-2 border-b-teal-400'}`} />      
    );
};

export default MainNavLink;