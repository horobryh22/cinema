import classes from './Navbar.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps): ReturnComponentType => {
    return (
        <div className={classNames(classes.Navbar, {}, [String(className)])}>Navbar</div>
    );
};
