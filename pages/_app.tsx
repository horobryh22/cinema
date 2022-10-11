import '../src/app/styles/index.scss';
import { AppProps } from 'next/app';

import { Layout } from '../src/widgets/Layout';

import { ReturnComponentType } from 'shared/types';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => {
    return (
        <Layout>
            <main>
                <Component {...pageProps} />
            </main>
        </Layout>
    );
};

export default MyApp;
