import { classNames } from '../../lib';
import { ReturnComponentType } from '../../types';

import classes from './Heading.module.scss';

interface HeadingProps {
    title: string;
    className?: string;
}

export const Heading = ({ className = '', title }: HeadingProps): ReturnComponentType => {
    return <h1 className={classNames(classes.Heading, {}, [className])}>{title}</h1>;
};
