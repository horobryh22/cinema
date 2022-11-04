import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { MainPage } from '../src/pages/MainPage';

import { Meta } from 'app/seo/ui/Meta';

const Home: NextPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation('common');

    return (
        <Meta title={t('meta_title')} description={t('meta_description')}>
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
