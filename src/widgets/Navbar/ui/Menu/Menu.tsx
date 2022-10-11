import { IMenu } from '../../types';
import { MenuItem } from '../MenuItem/MenuItem';

import classes from './Menu.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

interface IMenuProps {
    className?: string;
    menu: IMenu;
}

export const Menu = (props: IMenuProps): ReturnComponentType => {
    const {
        className,
        menu: { title, items },
    } = props;

    const mappedData = items.map(item => <MenuItem key={item.link} item={item} />);

    return (
        <div className={classNames(classes.Menu, {}, [String(className)])}>
            <div className={classes.heading}>{title}</div>
            <ul className={classes.ul}>{mappedData}</ul>
        </div>
    );
};
