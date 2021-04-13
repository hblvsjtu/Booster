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
const FriendlyFormatter = require('eslint-friendly-formatter');
const ESLintPlugin = require('eslint-webpack-plugin');
const config = require('../config/index');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const plugins = [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: 'body',
    }),
    new VueLoaderPlugin(),
    new ESLintPlugin({
        extensions: ['js', 'vue', 'ts'],
        exclude: 'node_modules',
        formatter: FriendlyFormatter,
        fix: true,
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
            filename: '[name].[hash:8].css',
            chunkFilename: '[name].[hash:8].chunk.css',
        })
    );
}

function dir(myPath) {
    return myPath
        ? path.resolve(__dirname, '../', myPath)
        : path.resolve(__dirname, '../');
}

module.exports = {
    entry: {
        booster: './src/main',
    },
    output: {
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].chunk.js',
        path: dir('dist'),
        ...(config.libraryOptions || {}),
    },
    resolve: {
        // 给vue模板的提供编译支持
        mainFields: ['jsnext:main', 'browser', 'main'],
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            // vue$: 'vue/dist/vue.min.js',
            '@': dir('src'),
        },
        symlinks: false,
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            // test: /\.(js|vue)$/,
            // exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         formatter: FriendlyFormatter,
            //         fix: true,
            //     },
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.css$/,
                use: [
                    config.isSplitCSS
                        ? MiniCssExtractPlugin.loader
                        : 'vue-style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    config.isSplitCSS
                        ? MiniCssExtractPlugin.loader
                        : 'vue-style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                include: [dir('src')],
                options: {
                    limit: 1024,
                    name: '[name].[hash].[ext]',
                },
            },
        ],
    },
    plugins,
};
