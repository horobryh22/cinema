import '../src/app/styles/index.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Layout } from '../src/widgets/Layout';

import { ReturnComponentType } from 'shared/types';
import { store } from 'store/store';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => {
    return (
        <Provider store={store}>
            <Layout>
                <main>
                    <Component {...pageProps} />
                </main>
            </Layout>
        </Provider>
    );
};

export default MyApp;
