const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    library: 'TOC',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
};