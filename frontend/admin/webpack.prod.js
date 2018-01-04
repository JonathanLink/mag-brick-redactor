const Webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxBuildWebpackPlugin = require('workbox-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let config = {
    output: {
        publicPath: '/admin'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new OptimizeCssAssetsPlugin(),
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            }
        }),
        new WorkboxBuildWebpackPlugin({
            globDirectory: './dist/',
            globPatterns: ['**/*.{html,js,css,woff,woff2,json,jpg}'],
            swDest: './dist/sw.js',
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('.*/api/brick'),
                    handler: 'staleWhileRevalidate'
                }
            ]
        })
    ]
}

module.exports = merge(common, config)
