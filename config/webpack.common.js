var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

var ieCSSPlugin =  new ExtractTextPlugin('assets/css/main.ie.css', {            
            publicPath: 'assets/css/',
            allChunks: true,
            sourceMap: true
        });
var mainCSSPlugin = new ExtractTextPlugin('assets/css/main.css', {            
            publicPath: 'assets/css/',
            allChunks: true,
            sourceMap: true
        });

const sassLoaders = [
  'css-loader',
  'sass-loader?indentedSyntax=sass&sourceMap&includePaths[]=' + path.resolve(__dirname, './src')
];

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file',
                query: {
                    name: 'assets/fonts/[name].[ext]',
                    context: 'src/'
                }
            },
            {
                test: /\.ie\.css$/,
                loader: ieCSSPlugin.extract('style-loader', sassLoaders.join('!'))
            },
            {
                test: /\.scss$/, exclude: /\.ie\.css$/,
                loader: mainCSSPlugin.extract('style-loader', sassLoaders.join('!'))
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        }),
        ieCSSPlugin,
        mainCSSPlugin
        /*,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
            comments: false
            } 
        }),
        new UnminifiedWebpackPlugin()*/
    ]
};
