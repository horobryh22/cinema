import { memo, ReactElement } from 'react';

import { useTranslation } from 'next-i18next';

import { IMenu } from '../../model/types';
import { MenuItem } from '../MenuItem/MenuItem';

import classes from './Menu.module.scss';

import { classNames } from 'shared/lib';

interface IMenuProps {
    className?: string;
    menu: IMenu;
}

export const Menu = memo((props: IMenuProps): ReactElement => {
    const {
        className = '',
        menu: { title, items },
    } = props;
    const { t } = useTranslation('common');

    const mappedData = items.map(item => <MenuItem key={item.link} item={item} />);

    return (
        <div className={classNames(classes.Menu, {}, [String(className)])}>
            <div className={classes.heading}>{t(title)}</div>
            <ul className={classes.ul}>{mappedData}</ul>
        </div>
    );
});
