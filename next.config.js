const { i18n } = require('./next-i18next.config');

module.exports = {
    i18n,
    poweredByHeader: false,
    optimizeFonts: false,
    env: {
        APP_URL: process.env.REACT_APP_BASE_URL,
        APP_MODE: process.env.REACT_APP_MODE,
        APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    },
    async rewrites() {
        return [
            {
                source: '/services/:path*',
                destination: 'http://localhost:4200/api/:path*',
            },
            {
                source: '/uploads/:path*',
                destination: 'http://localhost:4200/uploads/:path*',
            },
        ];
    },
    webpack: config => {
        const rules = config.module.rules.find(r => !!r.oneOf);

        rules.oneOf.forEach(loaders => {
            if (Array.isArray(loaders.use)) {
                loaders.use.forEach(l => {
                    if (
                        typeof l !== 'string' &&
                        typeof l.loader === 'string' &&
                        /(?<!post)css-loader/.test(l.loader)
                    ) {
                        if (!l.options.modules) return;
                        const { getLocalIdent, ...others } = l.options.modules;

                        l.options = {
                            ...l.options,
                            modules: {
                                ...others,
                                getLocalIdent: (
                                    ctx,
                                    localIdentName,
                                    localName,
                                    options,
                                ) => {
                                    if (localName === 'dark') return localName;

                                    return getLocalIdent(
                                        ctx,
                                        localIdentName,
                                        localName,
                                        options,
                                    );
                                },
                            },
                        };
                    }
                });
            }
        });

        return config;
    },
};
