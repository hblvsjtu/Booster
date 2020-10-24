/**
 * webpack.common.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:25:54
 * @version 1.0.0
 */

const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../config/index');

const plugins = [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: 'body',
    }),
];

if (config.staticAssertsPath.from) {
    plugins.push(
        new CopyWebpackPlugin([
            {
                from: config.staticAssertsPath.from,
                to: config.staticAssertsPath.to,
            },
        ])
    );
}

if (config.isSplitCSS) {
    plugins.push(
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash].css',
            chunkFilename: '[id].css',
        })
    );
}

function dir(myPath) {
    if (myPath) {
        return path.resolve(__dirname, '../', myPath);
    }
    return path.resolve(__dirname, '../');
}

module.exports = {
    entry: {
        booster: path.join(config.srcPath, 'main.js'),
    },
    output: {
        filename: '[name].[hash].js',
        path: dir('dist'),
        ...(config.libraryOptions || {}),
    },
    resolve: {
        // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
        mainFields: ['jsnext:main', 'browser', 'main'],
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
        },
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    fix: true,
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    config.isSplitCSS
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    config.isSplitCSS
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ],
    },
    plugins,
};
