import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { classNames } from '../../lib/classNames/classNames';
import { ReturnComponentType } from '../../types';

import classes from './SkeletonLoader.module.scss';

import { useTheme } from 'app/providers/ThemeProvider';

export enum SkeletonTheme {
    DEFAULT = 'default',
}

interface ISkeletonProps extends SkeletonProps {
    theme?: SkeletonTheme;
    className?: string;
}

export const SkeletonLoader = ({
    theme = SkeletonTheme.DEFAULT,
    className = '',
    ...restProps
}: ISkeletonProps): ReturnComponentType => {
    const { theme: appTheme } = useTheme();

    return (
        <Skeleton
            {...restProps}
            baseColor={appTheme === 'dark' ? '#1F2125' : '#9bcfe8'}
            highlightColor={appTheme === 'dark' ? '#292A2E' : '#ffffff'}
            className={classNames(classes.Skeleton, {}, [className, classes[theme]])}
        ></Skeleton>
    );
};
