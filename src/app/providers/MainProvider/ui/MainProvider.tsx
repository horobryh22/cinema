import { ReactNode } from 'react';

import { HeadProvider } from '../../HeadProvider/ui/HeadProvider';
import { Layout } from '../../Layout/ui/Layout';
import { ReduxToast } from '../../ReduxToast/ui/ReduxToast';
import { StoreProvider } from '../../StoreProvider';

import { ReturnComponentType } from 'shared/types';

interface IMainProvider {
    children: ReactNode;
}

export const MainProvider = ({ children }: IMainProvider): ReturnComponentType => {
    return (
        <>
            <StoreProvider>
                <HeadProvider>
                    <ReduxToast />
                    <Layout>
                        <main>{children}</main>
                    </Layout>
                </HeadProvider>
            </StoreProvider>
        </>
    );
};
