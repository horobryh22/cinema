import { memo, ReactElement, useCallback } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import classes from './LangSwitcher.module.scss';

import RuIcon from 'shared/assets/lang/russia.svg';
import UsaIcon from 'shared/assets/lang/usa.svg';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps): ReactElement => {
    const { className = '' } = props;
    const router = useRouter();

    const onToggleLanguageClick = useCallback(
        (newLocale: string): void => {
            const { pathname, asPath, query } = router;

            router.push({ pathname, query }, asPath, { locale: newLocale });
        },
        [router],
    );

    const locale = router.locale === 'en' ? 'ru' : 'en';

    const handleClick = useCallback(
        () => onToggleLanguageClick(locale),
        [locale, onToggleLanguageClick],
    );

    return (
        <Button
            theme={ButtonTheme.CIRCLE}
            className={classNames('', {}, [className])}
            onClick={handleClick}
        >
            {router.locale === 'en' ? (
                <Image
                    src={RuIcon}
                    width={18}
                    height={14}
                    className={classes.svg}
                    alt="theme"
                    draggable={false}
                />
            ) : (
                <Image
                    src={UsaIcon}
                    width={18}
                    height={14}
                    className={classes.svg}
                    alt="theme"
                    draggable={false}
                />
            )}
        </Button>
    );
});
