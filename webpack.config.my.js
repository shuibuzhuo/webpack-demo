const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: [
          './_loader/loader1.js',
          './_loader/loader2.js',
          './_loader/loader3.js',
        ],
      },
    ],
  },
};
