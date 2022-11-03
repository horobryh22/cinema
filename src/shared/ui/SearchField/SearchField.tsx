import { InputHTMLAttributes } from 'react';

import { classNames } from '../../lib/classNames/classNames';
import { ReturnComponentType } from '../../types';
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

import classes from './SearchField.module.scss';

interface ISearchField extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const SearchField = ({
    className = '',
    ...restProps
}: ISearchField): ReturnComponentType => {
    return (
        <div className={classNames(classes.Input, {}, [className])}>
            <MaterialIcon name="MdSearch" />
            <input {...restProps} />
        </div>
    );
};
