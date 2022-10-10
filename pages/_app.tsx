import '../src/app/styles/index.scss';
import type { AppProps } from 'next/app';

import { ReturnComponentType } from 'shared/types';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => {
    return <Component {...pageProps} />;
};

export default MyApp;
