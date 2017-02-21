/**
 * Created by zx on 2017/2/21.
 */
module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/jianshu/app/main.js',
    output: {
        path: __dirname + '/jianshu/public',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: "./jianshu/public",
        colors: true,
        historyApiFallback: true,
        inline: true
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    preset: ['es2015', 'react']
                }
            }
        ]
    }
};