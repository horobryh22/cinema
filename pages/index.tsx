import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { MainPage } from '../src/pages/MainPage';

import { Meta } from 'app/seo/ui/Meta';

const Home: NextPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Meta
            title="Watch movies online"
            description="Watch MovieApp movies and TV shows online or stream right to your browser"
        >
            <MainPage />
        </Meta>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
});

export default Home;
