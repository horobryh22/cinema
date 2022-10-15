import { useRouter } from 'next/router';

import { IMenuItem } from '../../types';

import classes from './MenuItem.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { AppLink, MaterialIcon } from 'shared/ui';

interface IMenuItemProps {
    className?: string;
    item: IMenuItem;
}

export const MenuItem = (props: IMenuItemProps): ReturnComponentType => {
    const {
        item: { link, icon, title },
        className,
    } = props;

    const { asPath } = useRouter();

    return (
        <li
            className={classNames(
                classes.MenuItem,
                { [classes.active]: asPath === link },
                [classes[className!]],
            )}
        >
            <AppLink href={link} className="nav-link">
                <MaterialIcon name={icon} />
                <span>{title}</span>
            </AppLink>
        </li>
    );
};
