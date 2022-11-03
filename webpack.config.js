const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        assetModuleFilename: '[name][ext]'
    },
    performance: {
        hints: false,
        maxAssetSize: 100000,
        maxEntrypointSize: 100000
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff2|woff|ttf|otf|svg|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]'
                }
            },
        ]
    }
}