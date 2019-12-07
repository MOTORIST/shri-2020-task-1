const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const common = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {},
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin({})],
  },
};

const dev = {
  name: 'dev',
  ...common,
  ...{
    entry: ['./src/js/index.js', './src/blocks/main.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'script.js?[contenthash]',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      index: 'index.html',
      compress: false,
      port: 9000,
      historyApiFallback: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin([{ from: 'src/assets', to: 'assets' }]),
  ],
};

const build = {
  name: 'build',
  ...common,
  ...{
    entry: ['./src/js/index.prod.js', './src/blocks/main.scss'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'script.js?[contenthash]',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};

module.exports = [dev, build];
