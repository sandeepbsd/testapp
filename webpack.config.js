const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: `bundle.js`,
        path: '/node-modules',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /(\.css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devtool: 'cheap-eval-source-map',
    devServer: {
        host: 'localhost',
        port: 9090,
        publicPath: '/',
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public'),
    }
};
