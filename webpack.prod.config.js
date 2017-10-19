/*
 * webpack生产环境配置
 *
 * */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');


//gulp 输出文件的目录
// let _gulpFilePath = (dirname)=> {
//     let path = "./src/gulp/";
//     if(typeof dirname === 'undefined')
//         return path;
//     return path + dirname;
// };

module.exports = {
    devtool: '#eval-source-map',
    entry: {
        main: __dirname + "/src/main.js",
        //常用的第三方库封装
        vendor: ['jquery',
                      './src/module/vendor/semanticUI/semantic.min.css',
                      './src/module/vendor/semanticUI/semantic.min.js']

    },
    output: {
        path: __dirname + "/dist",
        chunkFilename:'[name].js',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader',
        },
    },

    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },

    module: {
        rules: [
            //ES6转义向前兼容
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            //vue相关loaders
            {
                test:/\.vue$/,
                use: [
                    //vue转义为ES6
                    {
                        loader: 'vue-loader'
                    },

                ]
                //    exclude: /node_modules/
            },
            //其他文件模块化
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
            },
            //sass模块
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader',
                exclude: /node_modules/
            },
            //css模块
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                autoprefixer()
                            ]
                        }
                    }
                ]
            },
            //图片文件模块化
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html' // 模板路径
        }),
        //打包时候移除警告
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']//manifest:抽取变动部分，防止第三方控件的多次打包
        // }),
        //webpack忽略打包
        // new webpack.IgnorePlugin(/\.\/vendor.js$/)
    ]
};