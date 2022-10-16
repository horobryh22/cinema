import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import { HeadProvider } from '../HeadProvider/HeadProvider';
import { ReduxToast } from '../ReduxToast/ReduxToast';

import { ReturnComponentType } from 'shared/types';
import { store } from 'store/store';
import { Layout } from 'widgets/Layout';

interface IMainProvider {
    children: ReactNode;
}

export const MainProvider = ({ children }: IMainProvider): ReturnComponentType => {
    return (
        <>
            <HeadProvider>
                <Provider store={store}>
                    <ReduxToast />
                    <Layout>
                        <main>{children}</main>
                    </Layout>
                </Provider>
            </HeadProvider>
        </>
    );
};
