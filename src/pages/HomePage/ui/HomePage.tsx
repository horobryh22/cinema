import classes from './HomePage.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';

interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps): ReturnComponentType => {
    return (
        <div className={classNames(classes.HomePage, {}, [String(className)])}>
            HomePage
        </div>
    );
};
