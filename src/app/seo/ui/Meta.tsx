import { ReactElement, ReactNode } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { siteName, titleMerge } from '../config/seo';

import { API_URL } from 'shared/api/config';
import logoImage from 'shared/assets/img/logo.svg';
import { clearText } from 'shared/lib';

interface ISeo {
    title: string;
    description?: string;
    image?: string;
    children?: ReactNode;
}

export const Meta = ({ image, description, title, children }: ISeo): ReactElement => {
    const { asPath } = useRouter();
    const currentUrl = `${API_URL}${asPath}`;

    return (
        <>
            <Head>
                <title itemProp="headline">{titleMerge(title)}</title>
                {description ? (
                    <>
                        <meta
                            itemProp="description"
                            name="description"
                            content={clearText(description, 152)}
                        />
                        <link rel="canonical" href={currentUrl} />
                        <meta property="og:locale" content="en" />
                        <meta property="og:title" content={titleMerge(title)} />
                        <meta property="og:url" content={currentUrl} />
                        <meta property="og:image" content={image ?? logoImage} />
                        <meta property="og:site_name" content={siteName} />
                        <meta
                            property="og:description"
                            content={clearText(description, 197)}
                        />
                    </>
                ) : (
                    <meta name="robots" content="noindex, nofollow" />
                )}
            </Head>
            {children}
        </>
    );
};
