const withTM = require("next-transpile-modules")([
    "@babel/preset-react",
]);

const nextConfig = withTM({
    reactStrictMode: false,
    experimental: {
        modularizeImports: {
            'lodash-es': {
                transform: 'lodash-es/{{member}}',
            },
            'lodash': {
                transform: 'lodash/{{member}}',
            },
        },
    },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
