var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: 'assets/[name].js',
        chunkFilename: '[id].chunk.js'
    },
    chunks: false,
    colors: true,
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: "3000",
        host: "0.0.0.0"
    }    
});
