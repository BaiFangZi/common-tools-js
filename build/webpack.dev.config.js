const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../', 'example/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: [/node_modules/, /md/],
      },
    ],
  },

  plugins: [
    // new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      chunks: ['libs', 'vendor', 'resource', 'main'],
    }),
  ],
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
}
