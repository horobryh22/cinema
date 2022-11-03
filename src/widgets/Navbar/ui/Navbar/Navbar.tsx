import Image from 'next/image';

import { MenuContainer } from '../MenuContainer/MenuContainer';

import classes from './Navbar.module.scss';

import logoImage from 'shared/assets/img/logo.svg';
import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { AppLink } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface INavbarProps {
    className?: string;
}

export const Navbar = ({ className = '' }: INavbarProps): ReturnComponentType => {
    return (
        <div className={classNames(classes.Navbar, {}, [classes[className]])}>
            <AppLink href="/" className="logo">
                <Image
                    src={logoImage}
                    width={247}
                    height={34}
                    alt="logo"
                    draggable={false}
                />
            </AppLink>
            <MenuContainer />
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
