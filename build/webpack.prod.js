/**
 * webpack.prod.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:25:54
 * @version 1.0.0
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');

const isShowBundleAnalyzer = false; // 是否加入打包的依赖分析

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
    }),
];

if (isShowBundleAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(common, {
    mode: 'production',
    plugins,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                sourceMap: true,
                cache: true,
            }),
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vender: {
                    name: 'vender',
                    priority: 1,
                    test: /node_modules/,
                    minSize: 0,
                    minChunks: 1,
                },
            },
        },
    },
});
