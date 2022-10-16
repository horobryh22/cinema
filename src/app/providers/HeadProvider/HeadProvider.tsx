import { ReactNode } from 'react';

import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { ACCENT_COLOR } from 'shared/config/constants';
import { ReturnComponentType } from 'shared/types';

interface IHeadProvider {
    children: ReactNode;
}

export const HeadProvider = ({ children }: IHeadProvider): ReturnComponentType => {
    return (
        <>
            <NextNProgress
                color={ACCENT_COLOR}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1 maximum-scale=1.0"
                />
                {/*<FavIcons/>*/}
                <meta name="theme-color" content="#181B1E" />
                <meta name="msapplication-navbutton-color" content="#181B1E" />
                <meta name="app-mobile-web-app-status-bar-style" content="#181B1E" />
            </Head>
            {children}
        </>
    );
};
