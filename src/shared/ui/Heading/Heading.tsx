import { classNames } from '../../lib';
import { ReturnComponentType } from '../../types';

import classes from './Heading.module.scss';

export enum HeadingThemes {
    SUBTITLE = 'subtitle',
}

interface HeadingProps {
    title: string;
    className?: string;
    theme?: HeadingThemes;
}

export const Heading = ({
    className,
    title,
    theme,
}: HeadingProps): ReturnComponentType => {
    return (
        <h1 className={classNames(classes.Heading, {}, [className!, classes[theme!]])}>
            {title}
        </h1>
    );
};
