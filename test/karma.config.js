var webpackConfig = require('../webpack.dev.config')
webpackConfig.module.loaders[0].query = {plugins: ['babel-plugin-rewire']}

module.exports = function (config) {
    config.set({
        basePath: '../',
        browsers: ['PhantomJS'],
        files: ['test/test_helper.js'],
        frameworks: ['jasmine'],
        plugins: [
            require('karma-webpack'),
            'karma-spec-reporter',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            'test/test_helper.js': 'webpack'
        },
        reporters: ['spec'],
        webpack: webpackConfig,
        webpackMiddleware: {noInfo: true}
    });
};
