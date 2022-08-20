const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const WebpackDevServer = require('webpack-dev-server');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     // 'vue-style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader,
               'css-loader'
        ]
      }

    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.vue'
    ]
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    // watchFiles: ["./dist/*"],
    watchFiles: ["./src/*"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ]
};

module.exports = config;