const nextConfig = {
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
};

module.exports = nextConfig;
