/**
 * Created by RCC on 2018/6/15.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    resolve: {
        alias: {
            '@page': path.resolve(__dirname, './src/page')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0', 'react'],
                        plugins: [
                            ['import', { libraryName: 'antd', style: "css" }]
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        root: `${__dirname}/src`,
                        attrs: ['img:src', 'link:href', 'script:src']
                    }
                }]
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [{loader: 'css-loader'}, 'less-loader']
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz|tmpl)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'assets/[name].[ext]?[hash:7]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            inject : true
        }),
        new ExtractTextPlugin("css/index.css")
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                lib1: {
                    chunks: "initial",
                    enforce: true
                }
            }
        }
    },
    mode: 'production',
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host:'0.0.0.0',
        port: 9090,
        historyApiFallback: true,
        stats: "errors-only"
    }
};
