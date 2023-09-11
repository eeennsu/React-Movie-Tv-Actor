import type { FC } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

const SideNavLink: FC<LinkProps> = ({ className: _className, to, ...props }) => {

    const { pathname, search, hash } = useResolvedPath(to);
    const match = useMatch({ path: pathname, end: true });
    
    return (
        <Link {...props} to={to} className={_className + `${match && ' text-teal-500'}`} />      
    );
};

export default SideNavLink;