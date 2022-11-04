import { useTranslation } from 'next-i18next';

import classes from 'pages/MainPage/ui/MainPage.module.scss';
import { classNames } from 'shared/lib';
import { ReturnComponentType } from 'shared/types';
import { Heading } from 'shared/ui';

interface HomePageProps {
    className?: string;
}

export const MainPage = ({ className }: HomePageProps): ReturnComponentType => {
    const { t } = useTranslation('common');

    return (
        <div className={classNames(classes.HomePage, {}, [String(className)])}>
            <Heading title={t('Watch movies online')} />
        </div>
    );
};
