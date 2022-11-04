import { memo, ReactElement } from 'react';

import Image from 'next/image';

import classes from './ThemeSwitcher.module.scss';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeDark from 'shared/assets/theme/dark.svg';
import ThemeLight from 'shared/assets/theme/light.svg';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps): ReactElement => {
    const { className = '' } = props;
    const { theme, toggleTheme } = useTheme();

    const handleClick = (): void => {
        toggleTheme();
    };

    return (
        <Button
            theme={ButtonTheme.CIRCLE}
            className={classNames('', {}, [className])}
            onClick={handleClick}
        >
            {theme === Theme.DARK ? (
                <Image
                    src={ThemeLight}
                    width={18}
                    height={18}
                    className={classes.svg}
                    alt="theme"
                    draggable={false}
                />
            ) : (
                <Image
                    src={ThemeDark}
                    width={18}
                    height={18}
                    className={classes.svg}
                    alt="theme"
                    draggable={false}
                />
            )}
        </Button>
    );
});
