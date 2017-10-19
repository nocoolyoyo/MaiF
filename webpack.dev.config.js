/*
* webpack开发环境配置
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
        main: [
            //全局必用第三方库封装
            'jquery',
            'vue',
            './src/module/vendor/semanticUI/semantic.min.css',
            './src/module/vendor/semanticUI/semantic.min.js',
            __dirname + "/src/main.js",
        ],
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
                exclude: /(node_modules|webuploader)/
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
            //jquery对象暴露
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery!expose-loader?$'
            },
            //Vue对象暴露
            {
                test: require.resolve('vue'),
                loader: 'expose-loader?Vue'
            }
        ]
    },
    plugins:[
        //jquery对象暴露给全局
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html' // 模板路径
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']//manifest:抽取变动部分，防止第三方控件的多次打包
        // }),
        //webpack忽略打包
       //new webpack.IgnorePlugin(/\.\/vendor.js$/)
    ]
};