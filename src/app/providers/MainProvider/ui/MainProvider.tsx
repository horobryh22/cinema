import { ReactNode } from 'react';

import { HeadProvider } from '../../HeadProvider/ui/HeadProvider';
import { Layout } from '../../Layout/ui/Layout';
import { ReduxToast } from '../../ReduxToast/ui/ReduxToast';
import { StoreProvider } from '../../StoreProvider';
import { ThemeProvider } from '../../ThemeProvider';

import { ReturnComponentType } from 'shared/types';

interface IMainProvider {
    children: ReactNode;
}

export const MainProvider = ({ children }: IMainProvider): ReturnComponentType => {
    return (
        <>
            <ThemeProvider>
                <StoreProvider>
                    <HeadProvider>
                        <ReduxToast />
                        <Layout>
                            <main>{children}</main>
                        </Layout>
                    </HeadProvider>
                </StoreProvider>
            </ThemeProvider>
        </>
    );
};
