import { InputHTMLAttributes } from 'react';

import classes from './SearchField.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { MaterialIcon } from 'shared/ui/MaterialIcon/MaterialIcon';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const SearchField = ({
    className = '',
    ...restProps
}: IInputProps): ReturnComponentType => {
    return (
        <div className={classNames(classes.Input, {}, [className])}>
            <MaterialIcon name="MdSearch" />
            <input {...restProps} />
        </div>
    );
};
