import classes from './HomePage.module.scss';

import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { Heading } from 'shared/ui';
import { HeadingThemes } from 'shared/ui/Heading/Heading';

interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps): ReturnComponentType => {
    return (
        <div className={classNames(classes.HomePage, {}, [String(className)])}>
            <Heading title="Watch movies online" theme={HeadingThemes.SUBTITLE} />
        </div>
    );
};
