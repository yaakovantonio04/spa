const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
          index: './index.html'
        }
      },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './public/index.html',
            filename: './index.html'
        }),
        
        /*new CopyWebpackPlugin({
            patterns: [{
                    from: "./src/styles/style.css",
                    to: "./assets/styles"
                },
                {
                    from: "./src/styles/normalize.css",
                    to: "assets/styles"
                },
                {
                    from: "./src/img/profile_picture.jpg",
                    to: './assets/img'
                },
                {
                    from: "./src/img/favicon.png",
                    to: './'
                }
            ]
        })*/
    ]
}