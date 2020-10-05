const path = require('path');
const { override, adjustStyleLoaders, addWebpackAlias, disableEsLint, overrideDevServer } = require("customize-cra");

module.exports = {
    webpack: override(
        adjustStyleLoaders(rule => {
            if (rule.test.toString().includes('scss')) {
                rule.use.push({
                    loader: require.resolve('sass-resources-loader'),
                    options: {
                        resources: './src/common/style/variables.scss'
                    }
                });
            }
        }),
         addWebpackAlias({
            '@': path.resolve(__dirname, 'src'),
        }),
        disableEsLint()
    ),
    devServer: overrideDevServer(config => {
        config.proxy = {
            '/music-api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/music-api': '/',
                },
            }
        }
        return config;
    })
}