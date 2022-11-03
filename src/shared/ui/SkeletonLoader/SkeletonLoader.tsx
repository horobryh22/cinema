import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { classNames } from '../../lib/classNames/classNames';
import { ReturnComponentType } from '../../types';

import classes from './SkeletonLoader.module.scss';

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
    return (
        <Skeleton
            {...restProps}
            baseColor="#1F2125"
            highlightColor="#292A2E"
            className={classNames(classes.Skeleton, {}, [className, classes[theme]])}
        ></Skeleton>
    );
};
