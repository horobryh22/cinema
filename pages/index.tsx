import type { NextPage } from 'next';

import { MainPage } from '../src/pages/MainPage';

import { Meta } from 'app/seo/ui/Meta';

const Home: NextPage = () => {
    return (
        <Meta
            title="Watch movies online"
            description="Watch MovieApp movies and TV shows online or stream right to your browser"
        >
            <MainPage />
        </Meta>
    );
};

export default Home;
