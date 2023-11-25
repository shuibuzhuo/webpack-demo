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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.shuibuzhuo$/,
        use: [path.resolve(__dirname, './loader/shuibuzhuo-loader.js')],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '学习前端工程化',
    }),
    new FooterPlugin({
      banner: '页脚测试',
    }),
  ],
};
