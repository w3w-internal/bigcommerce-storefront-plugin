const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const JsInlineCssWebpackPlugin =
  require('js-inline-css-webpack-plugin').default;

module.exports = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'store-front.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.VERSION': JSON.stringify(process.env.VERSION),
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      'process.env.PACKAGE_NAME': JSON.stringify(process.env.PACKAGE_NAME),
    }),
    new MiniCssExtractPlugin({ filename: 'store-front.css' }),
    new JsInlineCssWebpackPlugin(),
  ],
};
