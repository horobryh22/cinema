import '../src/app/styles/index.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { HeadProvider } from '../src/app/providers/HeadProvider/HeadProvider';
import { ReduxToast } from '../src/app/providers/ReduxToast';
import { Layout } from '../src/widgets/Layout';

import { ReturnComponentType } from 'shared/types';
import { store } from 'store/store';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => {
    return (
        <HeadProvider>
            <Provider store={store}>
                <ReduxToast />
                <Layout>
                    <main>
                        <Component {...pageProps} />
                    </main>
                </Layout>
            </Provider>
        </HeadProvider>
    );
};

export default MyApp;
