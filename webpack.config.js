const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      Colors: path.join(__dirname, 'src/data/colors.json'),
      Data: path.join(__dirname, 'src/data/'),
      Common: path.join(__dirname, 'src/components/common/'),
      Icon: path.join(__dirname, 'src/components/common/Icon.jsx'),
      Constants: path.join(__dirname, 'src/data/constants.js'),
      Assets: path.join(__dirname, 'assets/'),
    },
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3002,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(pdf|png|svg|jpg|gif|woff(2)?|ttf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|webp)$/,
        use: [
          'webp-loader',
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    /*
    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg|png|jpg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    */
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
      { from: '_redirects', to: '_redirects', toType: 'file' },
    ]),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
