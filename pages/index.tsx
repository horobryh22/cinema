import type { NextPage } from 'next';

import MyApp from './_app';

import { HomePage } from 'pages/HomePage';

const Home: NextPage = () => {
    return <MyApp Component={HomePage} pageProps={{}} />;
};

export default Home;
