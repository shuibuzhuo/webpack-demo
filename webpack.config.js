const path = require('path');
const webpack = require('webpack');
const FooterPlugin = require('./plugin/FooterPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.hamovue$/,
        use: [path.resolve(__dirname, './loader/shuibuzhuo-loader.js')],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'BannerPlugin 测试',
    }),
    new FooterPlugin({
      banner: '页脚测试',
    }),
  ],
};
