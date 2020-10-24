/**
 * webpack.dev.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:24:58
 * @version 1.0.0
 */

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require('../config/index');
const {dev} = require('../config/index');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        main: path.join(config.srcPath, 'show.jsx'),
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: dev,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
});
