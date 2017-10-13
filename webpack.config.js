const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: '#eval-source-map',
    entry: {
        //常用的第三方库封装
        main: __dirname + "/src/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].js',
        // filename: "build.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            jquery: 'jquery/dist/jquery.min.js',
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
                    //iview转义为vue
                    // {
                    //     loader: 'iview-loader',
                    //     options: {
                    //         prefix: true
                    //     }
                    // }
                ]
                //    exclude: /node_modules/
            },
            //其他文件模块化
            {
                test: /\.(eot|ttf|woff)$/,
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
        })
    ]
};