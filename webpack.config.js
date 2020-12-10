const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const production = process.env.NODE_ENV === 'production';

module.exports = (env, argv) => {
    return {
        entry: {
            app: path.join(__dirname, 'src', 'index.jsx')
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: argv.mode !== "production",
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: argv.mode !== "production",
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf|png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'static/media/[name].[hash:8].[ext]'
                            }
                        }
                    ],
                }
            ]
        },
        resolve: {
            extensions: [ ".js", ".jsx" ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        // optimization: {
        //     concatenateModules: production,
        //     nodeEnv: process.env.NODE_ENV,
        //     minimize: production,
        //     minimizer: [
        //         new UglifyJsPlugin({
        //             uglifyOptions: {
        //                 compress: {
        //                     unused: false
        //                 }
        //             }
        //         }),
        //         new OptimizeCSSPlugin({
        //             cssProcessorOptions: {
        //                 safe: true
        //             }
        //         })
        //     ],
        //     runtimeChunk: true,
        //     splitChunks: {
        //         chunks: 'all'
        //     }
        // },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 8080,
        }
    }
};
