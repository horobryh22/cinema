import type { NextPage } from 'next';

import { Meta } from '../src/app/seo/Meta';
import { HomePage } from '../src/pages/HomePage';

const Home: NextPage = () => {
    return (
        <Meta
            title="Watch movies online"
            description="Watch MovieApp movies and TV shows online or stream right to your browser"
        >
            <HomePage />
        </Meta>
    );
};

export default Home;
