import { memo, ReactElement, useState } from 'react';

import Image from 'next/image';

import RuIcon from 'shared/assets/lang/russia.svg';
import UsaIcon from 'shared/assets/lang/usa.svg';
import { classNames } from 'shared/lib';
import classes from 'widgets/ThemeSwitcher/ui/ThemeSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(
    ({ className = '' }: LangSwitcherProps): ReactElement => {
        // const { t, i18n } = useTranslation();
        const [state, setState] = useState(false);

        // const toggleLang = async (): Promise<void> => {
        //     await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
        // };

        return (
            <button
                type="button"
                className={classNames(classes.ThemeSwitcher, {}, [className])}
                onClick={() => setState(!state)}
            >
                {state ? (
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
            </button>
        );
    },
);
