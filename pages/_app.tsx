import '../src/app/styles/index.scss';
import { AppProps } from 'next/app';

import { MainProvider } from '../src/app/providers';

import { ReturnComponentType } from 'shared/types';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => {
    return (
        <MainProvider>
            <Component {...pageProps} />
        </MainProvider>
    );
};

export default MyApp;
