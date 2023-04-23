
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isNode = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Exchange Rate',
    template: './src/index.html',
  }),
];

if (isNode) {
  const Dotenv = require('dotenv-webpack');
  plugins.push(new Dotenv("./.env"));
}

module.exports = {
  mode: 'development',
  entry: './src/UI.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins,
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },
};
