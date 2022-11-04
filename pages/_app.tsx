import '../src/app/styles/index.scss';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

import { MainProvider } from 'app/providers';
import { ReturnComponentType } from 'shared/types';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => {
    return (
        <MainProvider>
            <Component {...pageProps} />
        </MainProvider>
    );
};

export default appWithTranslation(MyApp);
