module.exports = {
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            };
        }

        return config;
    }
};

const withImages = require('next-images');

module.exports = withImages({
    fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'svg']
});
