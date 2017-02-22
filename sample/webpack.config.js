/**
 * Created by zx on 2017/2/21.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/jianshu/app/main.js',
    output: {
        path: __dirname + '/jianshu/build',
        filename: 'bundle.js'
    },

    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    module: {
        loaders: [
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({
            template: __dirname + '/jianshu/app/index.tmpl.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [precss, autoprefixer];
                }
            }
        })
    ]
};