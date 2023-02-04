const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.tsx')],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[chunkhash].js',
    publicPath: isDev ? '/' : '/tplab-src/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  stats: 'errors-only',
};
