const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
});

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    webpack: (config, { isServer, dev }) => {
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat'
            });
        }
        return config;
    }
});
